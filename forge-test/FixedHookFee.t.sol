// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import {IHooks} from "v4-core/src/interfaces/IHooks.sol";
import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {TickMath} from "v4-core/src/libraries/TickMath.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {BalanceDelta} from "v4-core/src/types/BalanceDelta.sol";
import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";
import {CurrencyLibrary, Currency} from "v4-core/src/types/Currency.sol";
import {Deployers} from "v4-core/test/utils/Deployers.sol";
import {FixedHookFee} from "@v4-by-example/pages/fees/fixed-hook-fee/FixedHookFee.sol";
import {HookMiner} from "./utils/HookMiner.sol";
import {GasSnapshot} from "forge-gas-snapshot/GasSnapshot.sol";
import {PoolSwapTest} from "v4-core/src/test/PoolSwapTest.sol";

contract FixedHookFeeTest is Test, Deployers, GasSnapshot {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    FixedHookFee hook;
    PoolKey poolKey;
    PoolId poolId;

    PoolKey hooklessKey;

    address alice = makeAddr("alice");

    function setUp() public {
        // creates the pool manager, test tokens, and other utility routers
        Deployers.deployFreshManagerAndRouters();
        Deployers.deployMintAndApprove2Currencies();

        // Deploy the hook to an address with the correct flags
        uint160 flags = uint160(Hooks.AFTER_SWAP_FLAG | Hooks.AFTER_SWAP_RETURNS_DELTA_FLAG);
        (address hookAddress, bytes32 salt) =
            HookMiner.find(address(this), flags, type(FixedHookFee).creationCode, abi.encode(address(manager)));
        hook = new FixedHookFee{salt: salt}(IPoolManager(address(manager)));
        require(address(hook) == hookAddress, "FixedHookFeeTest: hook address mismatch");

        // Create the pool with 0% fee
        poolKey = PoolKey(currency0, currency1, 0, 60, IHooks(hook));
        poolId = poolKey.toId();
        manager.initialize(poolKey, SQRT_PRICE_1_1, ZERO_BYTES);

        // Provide liquidity to the pool
        modifyLiquidityRouter.modifyLiquidity(
            poolKey,
            IPoolManager.ModifyLiquidityParams(TickMath.minUsableTick(60), TickMath.maxUsableTick(60), 100_000 ether, 0),
            ZERO_BYTES
        );

        // create a hookless pool
        hooklessKey = PoolKey(currency0, currency1, 0, 60, IHooks(address(0x0)));
        manager.initialize(hooklessKey, SQRT_PRICE_1_1, ZERO_BYTES);

        // Provide liquidity to the pool
        modifyLiquidityRouter.modifyLiquidity(
            hooklessKey,
            IPoolManager.ModifyLiquidityParams(TickMath.minUsableTick(60), TickMath.maxUsableTick(60), 100_000 ether, 0),
            ZERO_BYTES
        );
    }

    function test_hookFee(bool zeroForOne, int256 amountSpecified) public {
        amountSpecified = bound(amountSpecified, -100e18, 100e18);
        // assume the swap amount is material
        uint256 swapAmount = amountSpecified < 0 ? uint256(-amountSpecified) : uint256(amountSpecified);
        vm.assume(swapAmount > 1e18);

        bool exactInput = amountSpecified < 0;
        bool zeroIsSpecified = zeroForOne == exactInput;
        Currency specifiedCurrency = zeroIsSpecified ? currency0 : currency1;
        Currency unspecifiedCurrency = specifiedCurrency == currency0 ? currency1 : currency0;

        BalanceDelta withoutHookFee = swap(hooklessKey, zeroForOne, amountSpecified, ZERO_BYTES);

        uint256 specifiedAmountBefore = specifiedCurrency.balanceOfSelf();
        uint256 unspecifiedAmountBefore = unspecifiedCurrency.balanceOfSelf();
        BalanceDelta result = swap(poolKey, zeroForOne, amountSpecified, ZERO_BYTES);
        uint256 specifiedAmountAfter = specifiedCurrency.balanceOfSelf();
        uint256 unspecifiedAmountAfter = unspecifiedCurrency.balanceOfSelf();

        if (exactInput) {
            assertEq(specifiedAmountBefore - specifiedAmountAfter, uint256(-amountSpecified));
            if (zeroIsSpecified) {
                assertEq(uint256(int256(-result.amount0())), specifiedAmountBefore - specifiedAmountAfter);

                assertEq(unspecifiedAmountAfter - unspecifiedAmountBefore, uint256(int256(result.amount1())));
                assertEq(
                    unspecifiedAmountAfter - unspecifiedAmountBefore,
                    uint256(int256(withoutHookFee.amount1())) - hook.FIXED_HOOK_FEE()
                );
            } else {
                // token1 is specified
                assertEq(uint256(int256(-result.amount1())), specifiedAmountBefore - specifiedAmountAfter);

                assertEq(unspecifiedAmountAfter - unspecifiedAmountBefore, uint256(int256(result.amount0())));
                assertEq(
                    unspecifiedAmountAfter - unspecifiedAmountBefore,
                    uint256(int256(withoutHookFee.amount0())) - hook.FIXED_HOOK_FEE()
                );
            }
        } else {
            assertEq(specifiedAmountAfter - specifiedAmountBefore, uint256(amountSpecified));
            if (zeroIsSpecified) {
                // token0 (exactOut) is specified
                assertEq(uint256(int256(result.amount0())), specifiedAmountAfter - specifiedAmountBefore);

                assertEq(unspecifiedAmountBefore - unspecifiedAmountAfter, uint256(int256(-result.amount1())));
                assertEq(
                    unspecifiedAmountBefore - unspecifiedAmountAfter,
                    uint256(int256(-withoutHookFee.amount1())) + hook.FIXED_HOOK_FEE()
                );
            } else {
                // token1 is specified
                assertEq(uint256(int256(result.amount1())), specifiedAmountAfter - specifiedAmountBefore);

                assertEq(unspecifiedAmountBefore - unspecifiedAmountAfter, uint256(int256(-result.amount0())));
                assertEq(
                    unspecifiedAmountBefore - unspecifiedAmountAfter,
                    uint256(int256(-withoutHookFee.amount0())) + hook.FIXED_HOOK_FEE()
                );
            }
        }

        // hook collected fees
        assertEq(manager.balanceOf(address(hook), unspecifiedCurrency.toId()), hook.FIXED_HOOK_FEE());
    }

    function test_snap_hookFee() public {
        int256 amount = -1e18;
        bool zeroForOne = true;
        IPoolManager.SwapParams memory params = IPoolManager.SwapParams({
            zeroForOne: zeroForOne,
            amountSpecified: amount,
            sqrtPriceLimitX96: zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT // unlimited impact
        });

        PoolSwapTest.TestSettings memory testSettings =
            PoolSwapTest.TestSettings({takeClaims: false, settleUsingBurn: false});

        snapStart("hookFee");
        swapRouter.swap(poolKey, params, testSettings, ZERO_BYTES);
        snapEnd();
    }
}

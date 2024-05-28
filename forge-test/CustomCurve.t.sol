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
import {ConstantSumCurve} from "@v4-by-example/pages/hooks/custom-curve/CustomCurve.sol";
import {HookMiner} from "./utils/HookMiner.sol";
import {IERC20} from "forge-std/interfaces/IERC20.sol";

contract CustomCurveTest is Test, Deployers {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;

    ConstantSumCurve hook;
    PoolKey poolKey;
    PoolId poolId;

    function setUp() public {
        // creates the pool manager, test tokens, and other utility routers
        Deployers.deployFreshManagerAndRouters();
        Deployers.deployMintAndApprove2Currencies();

        // Deploy the hook to an address with the correct flags
        uint160 flags =
            uint160(Hooks.BEFORE_SWAP_FLAG | Hooks.BEFORE_ADD_LIQUIDITY_FLAG | Hooks.BEFORE_SWAP_RETURNS_DELTA_FLAG);
        (address hookAddress, bytes32 salt) =
            HookMiner.find(address(this), flags, type(ConstantSumCurve).creationCode, abi.encode(address(manager)));
        hook = new ConstantSumCurve{salt: salt}(IPoolManager(address(manager)));
        require(address(hook) == hookAddress, "CustomCurveTest: hook address mismatch");

        // Create the pool
        poolKey = PoolKey(currency0, currency1, 3000, 60, IHooks(hook));
        poolId = poolKey.toId();
        manager.initialize(poolKey, SQRT_PRICE_1_1, ZERO_BYTES);

        // Add liquidity
        IERC20(Currency.unwrap(currency0)).approve(address(hook), type(uint256).max);
        IERC20(Currency.unwrap(currency1)).approve(address(hook), type(uint256).max);
        hook.addLiquidity(poolKey, 100 ether, 100 ether);
    }

    function test_swap(bool zeroForOne, int256 amountSpecified) public {
        amountSpecified = bound(amountSpecified, -100 ether, 100 ether);
        vm.assume(amountSpecified != 0);

        uint256 token0Before = currency0.balanceOfSelf();
        uint256 token1Before = currency1.balanceOfSelf();
        swap(poolKey, zeroForOne, amountSpecified, ZERO_BYTES);
        uint256 token0After = currency0.balanceOfSelf();
        uint256 token1After = currency1.balanceOfSelf();

        bool exactInput = amountSpecified < 0;
        uint256 amountSwapped = exactInput ? uint256(-amountSpecified) : uint256(amountSpecified);
        if (zeroForOne) {
            assertEq(token0Before - token0After, amountSwapped);
            assertEq(token1After - token1Before, amountSwapped);
        } else {
            assertEq(token0After - token0Before, amountSwapped);
            assertEq(token1Before - token1After, amountSwapped);
        }
    }
}

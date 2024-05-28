// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// TODO: replace with v4-periphery/BaseHook.sol when compatibility is fixed
import {BaseHook} from "v4-periphery/BaseHook.sol";

import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";
import {Currency, CurrencyLibrary} from "v4-core/src/types/Currency.sol";
import {toBeforeSwapDelta, BeforeSwapDelta, BeforeSwapDeltaLibrary} from "v4-core/src/types/BeforeSwapDelta.sol";
import {IERC20} from "forge-std/interfaces/IERC20.sol";
import {CurrencySettleTake} from "v4-core/src/libraries/CurrencySettleTake.sol";
import {SafeCast} from "v4-core/src/libraries/SafeCast.sol";
import {IUnlockCallback} from "v4-core/src/interfaces/callback/IUnlockCallback.sol";

abstract contract CustomCurveBase is BaseHook {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;
    using CurrencySettleTake for Currency;
    using SafeCast for uint256;

    constructor(IPoolManager _poolManager) BaseHook(_poolManager) {}

    /// NOTE: You should implement a function to manage liquidity

    function getAmountOutFromExactInput(bool zeroForOne, Currency input, uint256 amountIn)
        internal
        virtual
        returns (uint256 amountOut);

    function getAmountInForExactOutput(bool zeroForOne, Currency output, uint256 amount)
        internal
        virtual
        returns (uint256 amountIn);

    function beforeSwap(address, PoolKey calldata key, IPoolManager.SwapParams calldata params, bytes calldata)
        external
        override
        returns (bytes4, BeforeSwapDelta, uint24)
    {
        bool exactInput = params.amountSpecified < 0;
        (Currency specified, Currency unspecified) =
            (params.zeroForOne == exactInput) ? (key.currency0, key.currency1) : (key.currency1, key.currency0);

        uint256 specifiedAmount = exactInput ? uint256(-params.amountSpecified) : uint256(params.amountSpecified);
        uint256 unspecifiedAmount;
        BeforeSwapDelta returnDelta;
        if (exactInput) {
            unspecifiedAmount = getAmountOutFromExactInput(params.zeroForOne, specified, specifiedAmount);
            specified.take(poolManager, address(this), specifiedAmount, true);
            unspecified.settle(poolManager, address(this), unspecifiedAmount, true);

            returnDelta = toBeforeSwapDelta(specifiedAmount.toInt128(), -unspecifiedAmount.toInt128());
        } else {
            // exactOutput
            unspecifiedAmount = getAmountInForExactOutput(params.zeroForOne, specified, specifiedAmount);
            unspecified.take(poolManager, address(this), unspecifiedAmount, true);
            specified.settle(poolManager, address(this), specifiedAmount, true);

            returnDelta = toBeforeSwapDelta(-specifiedAmount.toInt128(), unspecifiedAmount.toInt128());
        }

        return (BaseHook.beforeSwap.selector, returnDelta, 0);
    }

    /// @notice No liquidity will be managed by v4 PoolManager
    function beforeAddLiquidity(address, PoolKey calldata, IPoolManager.ModifyLiquidityParams calldata, bytes calldata)
        external
        pure
        override
        returns (bytes4)
    {
        revert("No v4 Liquidity allowed");
    }

    function getHookPermissions() public pure override returns (Hooks.Permissions memory) {
        return Hooks.Permissions({
            beforeInitialize: false,
            afterInitialize: false,
            beforeAddLiquidity: true, // -- disable v4 liquidity with a revert -- //
            beforeRemoveLiquidity: false,
            afterAddLiquidity: false,
            afterRemoveLiquidity: false,
            beforeSwap: true, // -- No-op'ing the swap --  //
            afterSwap: false,
            beforeDonate: false,
            afterDonate: false,
            beforeSwapReturnDelta: true,
            afterSwapReturnDelta: false,
            afterAddLiquidityReturnDelta: false,
            afterRemoveLiquidityReturnDelta: false
        });
    }
}

contract ConstantSumCurve is CustomCurveBase {
    using CurrencySettleTake for Currency;

    constructor(IPoolManager _manager) CustomCurveBase(_manager) {}

    /// @notice Not production-ready, only serves an example of hook-owned liquidity
    function addLiquidity(PoolKey calldata key, uint256 amount0, uint256 amount1) external {
        poolManager.unlock(
            abi.encodeCall(this.handleAddLiquidity, (key.currency0, key.currency1, amount0, amount1, msg.sender))
        );
    }

    function getAmountOutFromExactInput(bool, Currency, uint256 amountIn)
        internal
        pure
        override
        returns (uint256 amountOut)
    {
        // in constant-sum curve, tokens trade exactly 1:1
        amountOut = amountIn;
    }

    function getAmountInForExactOutput(bool, Currency, uint256 amountOut)
        internal
        pure
        override
        returns (uint256 amountIn)
    {
        // in constant-sum curve, tokens trade exactly 1:1
        amountIn = amountOut;
    }

    // TODO: restrict callers
    function handleAddLiquidity(
        Currency currency0,
        Currency currency1,
        uint256 amount0,
        uint256 amount1,
        address sender
    ) external selfOnly returns (bytes memory) {
        currency0.settle(poolManager, sender, amount0, false);
        currency0.take(poolManager, address(this), amount0, true);

        currency1.settle(poolManager, sender, amount1, false);
        currency1.take(poolManager, address(this), amount1, true);
    }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {BaseHook} from "v4-periphery/BaseHook.sol";

import {Hooks} from "v4-core/src/libraries/Hooks.sol";
import {IPoolManager} from "v4-core/src/interfaces/IPoolManager.sol";
import {PoolKey} from "v4-core/src/types/PoolKey.sol";
import {PoolId, PoolIdLibrary} from "v4-core/src/types/PoolId.sol";
import {BalanceDelta} from "v4-core/src/types/BalanceDelta.sol";
import {Currency, CurrencyLibrary} from "v4-core/src/types/Currency.sol";
import {BeforeSwapDelta, BeforeSwapDeltaLibrary} from "v4-core/src/types/BeforeSwapDelta.sol";
import {CurrencySettleTake} from "v4-core/src/libraries/CurrencySettleTake.sol";
import {SafeCast} from "v4-core/src/libraries/SafeCast.sol";

contract FixedHookFee is BaseHook {
    using PoolIdLibrary for PoolKey;
    using CurrencyLibrary for Currency;
    using CurrencySettleTake for Currency;
    using SafeCast for uint256;

    uint256 public constant FIXED_HOOK_FEE = 0.0001e18;

    constructor(IPoolManager _poolManager) BaseHook(_poolManager) {}

    function getHookPermissions() public pure override returns (Hooks.Permissions memory) {
        return Hooks.Permissions({
            beforeInitialize: false,
            afterInitialize: false,
            beforeAddLiquidity: false,
            beforeRemoveLiquidity: false,
            afterAddLiquidity: false,
            afterRemoveLiquidity: false,
            beforeSwap: false,
            afterSwap: true,
            beforeDonate: false,
            afterDonate: false,
            beforeSwapReturnDelta: false,
            afterSwapReturnDelta: true, // -- Fee charged on unspecified after swap -- //
            afterAddLiquidityReturnDelta: false,
            afterRemoveLiquidityReturnDelta: false
        });
    }

    function afterSwap(
        address,
        PoolKey calldata key,
        IPoolManager.SwapParams calldata params,
        BalanceDelta,
        bytes calldata
    ) external override returns (bytes4, int128) {
        // take a fixed fee of 0.0001 of the unspecified token

        bool exactInput = params.amountSpecified < 0;
        bool specifiedIsZero = params.zeroForOne == exactInput;

        if (specifiedIsZero) {
            // taking fee on unspecified currency (currency1)
            poolManager.mint(address(this), key.currency1.toId(), FIXED_HOOK_FEE);
        } else {
            // taking fee on specified currency (currency0)
            poolManager.mint(address(this), key.currency0.toId(), FIXED_HOOK_FEE);
        }

        // by returning the amount the amount the hook has taken,
        return (BaseHook.afterSwap.selector, FIXED_HOOK_FEE.toInt128());
    }

    /// @dev Because the fee is taking as an ERC6909 claim, you'll want to implement logic to collect
    /// fee as ERC20 OR ERC6909...
    /// ...
}

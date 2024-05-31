---
title: Dynamic Fees
version: 0.8.20
description: Design a v4 pool with a dynamic fee
keywords: [fee, fees, dynamic fee, dynamic, poke]
---

- Design a v4 pool with a dynamic fee

Uniswap v4 pools can support dynamic swap fees, and do not need to adhere to a static fee (0.05% / 0.30% / 1.0%). The hook needs to use `LPFeeLibrary.DYNAMIC_FEE_FLAG` as its `PoolKey.fee`. **By default, dynamic-fee-pools initialize with a 0% fee**

> Use `afterInitialize` to set the initial fee of a dynamic-fee-pool

---

There are two ways to update the dynamic fee:

1) The hook contract calls `IPoolManager.updateDynamicLPFee(PoolKey memory key, uint24 newDynamicLPFee)`

2) Use `beforeSwap` and return a valid fee with its 2nd bit set to 1 (i.e. `fee | LPFeeLibrary.OVERRIDE_FEE_FLAG`)

Using `beforeSwap` is useful for dynamic fees that may change on *every* swap. It's more gas efficient than calling `updateDynamicLPFee` in every call. **Note: the fee returned by beforeSwap is not saved to the PoolManager**

---

### Initialize a Dynamic Fee Pool

```solidity
import {LPFeeLibrary} from "v4-core/src/libraries/LPFeeLibrary.sol";


poolKey = PoolKey(
    currency0,
    currency1,
    LPFeeLibrary.DYNAMIC_FEE_FLAG, // signal that the pool has a dynamic fee
    60,
    IHooks(hook)
);
manager.initialize(poolKey, startingPrice, hookData);
```

## Example: Manual Dynamic Fee

*Implements a time-decaying dynamic fee*

* The swap fee starts at 5.0% 
* The fee decays 0.00001% every second
* After 495,000 seconds, the minimum fee is set to 0.05%

An external party must call `hook.setFee()` to update the dynamic fee
```solidity
{{{ManualDynamicFee}}}
```

## Example: Overriding Dynamic Fee

*Implements an automatically-updated, time-decaying dynamic fee*

The hook uses `beforeSwap` to return a valid *override* fee, which is always up-to-date

*a few thousand gas cheaper than calling `updateDynamicLPFee`*
```solidity
{{{DynamicFeeOverride}}}
```

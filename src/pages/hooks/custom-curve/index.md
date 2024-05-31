---
title: Custom Curve
version: 0.8.20
description: Replace v3 concentrated liquidity curve
keywords: [hook, hooks, noop, no-op, custom curve, custom accounting]
---

- Custom Curve on Uniswap v4

Through custom accounting, developers can opt-out of the v3-concentrated-liquidity and implement their own curve. Custom curves are highly flexibile and possibilities include:

* constant-product curves ([*xy=k*](https://github.com/hensha256/v2-on-v4), Uniswap v2)
* [StableSwap](https://docs.curve.fi/pdf/stableswap-paper.pdf)
* [LAMMbert](https://github.com/euler-mab/LAMMbert/blob/main/LAMMbert.pdf)
* asymmetric curves
* dynamic curves
* step-wise curves

---

Custom curves are enabled through `Hooks.BEFORE_SWAP_FLAG` and `Hooks.BEFORE_SWAP_RETURNS_DELTA_FLAG`

`beforeSwap` calls `.take()` to create a debt (an IOU to the PoolManager), which is paid for by the Swapper

`beforeSwap` calls `.settle()` to transfer custodied tokens to the PoolManager. This creates a credit (an IOU *from* the PoolManager), which is claimed by Swapper

The delta returned by `beforeSwap` signals to the PoolManager that deltas created by the *hook address* should be applied to the `msg.sender`, the swap router, instead of the *hook address*


# Example: Constant-Sum Curve

The constant-sum curve trades tokens exactly 1:1 without slippage. `CustomCurveBase` is a reusable contract for implementing your own curves!

```solidity
{{{CustomCurve}}}
```


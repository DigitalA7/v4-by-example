---
title: NoOp Swap
version: 0.8.20
description: Elect to skip an operation without reverting
keywords: [hook, hooks, noop, no-op, skip, swap, skip swap]
---

NoOp Swap:
- Elect to skip or delay the concentrated liquidity swap (v3)

When a `beforeSwap` hook returns a `BeforeSwapDelta` that nets exactly equal to `params.amountSpecified`, the subsequent swap operation is *skipped*. NoOp Swap requires `Hooks.BEFORE_SWAP_RETURNS_DELTA_FLAG`

> NoOp will *only* work on `beforeSwap`

* To NoOp *exact input* (amountSpecified is negative): use `toBeforeSwapDelta(-params.amountSpecified, ...)` as a return

---

Use-cases:
  * Asynchronous swap fulfillment. Reorder and fulfill swaps at a later point in the time
  * Combine `NoOp` + custom accounting to facilitate swaps with external liquidity

---

## Example: NoOp Swap

Skip the v3-swap if the input amount is 69e18 tokens. This example is only tested for exact-input swaps (when amountSpecified is negative)

```solidity
{{{NoOpSwap}}}
```

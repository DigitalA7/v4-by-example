---
title: Single Swap
version: 0.8.20
description: Swapping on a single pool
keywords: [swap, trade, swapping]
---

- Swap between tokens on a single pool

Swapping will typically make use of a periphery contract. It is **not** recommended to directly swap with `poolManager.swap`

---

Using the `v4-core` provided _test_ router, we can swap on a single pool. These snippets should only be used for non-production, testing purposes

---

Swapping involves 3 primary arguments:

- Which pool to swap on
- The direction of the swap, `token0 -> token1` or `token1 -> token0`
- The input token amount

*exact-input*: `amountSpecified` is negative -- users provide an exact amount of input tokens

*exact-output*: `amountSpecified` is positive -- users **expect** an exact amount of output tokens

#### Expect Uniswap Labs to release an official contract around launch

```solidity
{{{Swap}}}
```

### Examples of Swapping on a V4 Pool

```solidity
{{{SwapExampleInputs}}}
```

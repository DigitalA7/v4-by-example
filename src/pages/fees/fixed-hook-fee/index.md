---
title: Static Hook Fee
version: 0.8.20
description: Charge a static hook fee
keywords: [hook, hooks, fee, static fee, hook fee]
---

Hook Fees
- Charge a hook fee

Optional hook fees are taken (from swappers) via the hook. Hook fees can be dynamically calculated, or simply set to a fixed amount. Hooks can charge fees in any currency, however charging USDC on the ETH/DAI pair may pose routing-compatibility issues.

Hook fees are achieved using the return-delta-flags, i.e. `BEFORE_SWAP_RETURNS_DELTA_FLAG` and/or `AFTER_SWAP_RETURNS_DELTA_FLAG`. In beforeSwap or afterSwap, the hook uses `.mint` or `.take` to charge fees. The additional deltas are then applied to the Swapper.

While more investigations are required, charging fees on the `unspecified` currency is the recommended practice.

* For exact-input swaps, the fee on *unspecified* is the *output* token

* For exact-outpout swaps, the fee on *unspecified* is the *input* token

---

## Example: Static Hook Fee

This example hook charges a fixed-fee of 0.0001e18 tokens

```solidity
{{{FixedHookFee}}}
```
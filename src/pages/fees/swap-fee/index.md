---
title: Swap Fees
version: 0.8.20
description: Swap Fees in v4
keywords: [fees, swap, swap fee, lp fee, fee tier]
---

Swap fees are accrued to liquidity providers and paid by swappers. The core logic and accrual design is exactly the same as v3.

In v3, there were four fixed fee-tiers `0.01%, 0.05%, 0.30%, and 1.0%`. In v4, fee-tiers are continuous

### Fee Charging

Swap fees are charged on the "open" side of a trade

- exact-input: fees are taken from the output token
- exact-output: fees are taken on the input token

Example:

- **Exact Input**: User is swapping exactly 100 USDC into ETH: fee is taken from the **ETH output**
- **Exact Output**: User is willing to pay USDC for 0.01 ETH: fee is taken from the **USDC input**

### Note on Protocol Fee

The protocol fee is **not** currently enabled. However, it is an additive fee on top of the Swap Fee and is expressed as a percentage

---

## Example: Setting a Swap Fee

The swap fee is set during pool creation, as defined in its `PoolKey`

```solidity
{{{SetSwapFee}}}
```

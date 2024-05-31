// metadata
export const version = "0.8.20"
export const title = "Quoter"
export const description = "Offchain Quoter, to fetch input/output amounts"

export const keywords = [
    "quoter",
    "quoting",
    "exact input",
    "exact output",
    "single",
    "multi",
    "multihop",
]

export const codes = [
    {
        fileName: "Quoter.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xOTsKCmltcG9ydCAiZm9yZ2Utc3RkL1Rlc3Quc29sIjsKaW1wb3J0IHtJSG9va3N9IGZyb20gInY0LWNvcmUvc3JjL2ludGVyZmFjZXMvSUhvb2tzLnNvbCI7CmltcG9ydCB7SG9va3N9IGZyb20gInY0LWNvcmUvc3JjL2xpYnJhcmllcy9Ib29rcy5zb2wiOwppbXBvcnQge1RpY2tNYXRofSBmcm9tICJ2NC1jb3JlL3NyYy9saWJyYXJpZXMvVGlja01hdGguc29sIjsKaW1wb3J0IHtJUG9vbE1hbmFnZXJ9IGZyb20gInY0LWNvcmUvc3JjL2ludGVyZmFjZXMvSVBvb2xNYW5hZ2VyLnNvbCI7CmltcG9ydCB7UG9vbEtleX0gZnJvbSAidjQtY29yZS9zcmMvdHlwZXMvUG9vbEtleS5zb2wiOwppbXBvcnQge0JhbGFuY2VEZWx0YX0gZnJvbSAidjQtY29yZS9zcmMvdHlwZXMvQmFsYW5jZURlbHRhLnNvbCI7CmltcG9ydCB7UG9vbElkLCBQb29sSWRMaWJyYXJ5fSBmcm9tICJ2NC1jb3JlL3NyYy90eXBlcy9Qb29sSWQuc29sIjsKaW1wb3J0IHtDb25zdGFudHN9IGZyb20gInY0LWNvcmUvdGVzdC91dGlscy9Db25zdGFudHMuc29sIjsKaW1wb3J0IHtDdXJyZW5jeUxpYnJhcnksIEN1cnJlbmN5fSBmcm9tICJ2NC1jb3JlL3NyYy90eXBlcy9DdXJyZW5jeS5zb2wiOwppbXBvcnQge0RlcGxveWVyc30gZnJvbSAidjQtY29yZS90ZXN0L3V0aWxzL0RlcGxveWVycy5zb2wiOwppbXBvcnQge0lRdW90ZXJ9IGZyb20gInY0LXBlcmlwaGVyeS9pbnRlcmZhY2VzL0lRdW90ZXIuc29sIjsKaW1wb3J0IHtRdW90ZXJ9IGZyb20gInY0LXBlcmlwaGVyeS9sZW5zL1F1b3Rlci5zb2wiOwppbXBvcnQge1N0YXRlTGlicmFyeX0gZnJvbSAidjQtY29yZS9zcmMvbGlicmFyaWVzL1N0YXRlTGlicmFyeS5zb2wiOwoKY29udHJhY3QgUXVvdGVyVGVzdCBpcyBUZXN0LCBEZXBsb3llcnMgewogICAgdXNpbmcgUG9vbElkTGlicmFyeSBmb3IgUG9vbEtleTsKICAgIHVzaW5nIEN1cnJlbmN5TGlicmFyeSBmb3IgQ3VycmVuY3k7CiAgICB1c2luZyBTdGF0ZUxpYnJhcnkgZm9yIElQb29sTWFuYWdlcjsKCiAgICBQb29sS2V5IHBvb2xLZXk7CiAgICBQb29sSWQgcG9vbElkOwogICAgUXVvdGVyIHF1b3RlcjsKCiAgICBmdW5jdGlvbiBzZXRVcCgpIHB1YmxpYyB7CiAgICAgICAgLy8gY3JlYXRlcyB0aGUgcG9vbCBtYW5hZ2VyLCB0ZXN0IHRva2VucywgYW5kIG90aGVyIHV0aWxpdHkgcm91dGVycwogICAgICAgIERlcGxveWVycy5kZXBsb3lGcmVzaE1hbmFnZXJBbmRSb3V0ZXJzKCk7CiAgICAgICAgRGVwbG95ZXJzLmRlcGxveU1pbnRBbmRBcHByb3ZlMkN1cnJlbmNpZXMoKTsKICAgICAgICBxdW90ZXIgPSBuZXcgUXVvdGVyKGFkZHJlc3MobWFuYWdlcikpOwoKICAgICAgICAvLyBDcmVhdGUgdGhlIHBvb2wKICAgICAgICBwb29sS2V5ID0gUG9vbEtleShjdXJyZW5jeTAsIGN1cnJlbmN5MSwgMzAwMCwgNjAsIElIb29rcyhhZGRyZXNzKDB4MCkpKTsKICAgICAgICBwb29sSWQgPSBwb29sS2V5LnRvSWQoKTsKICAgICAgICBtYW5hZ2VyLmluaXRpYWxpemUocG9vbEtleSwgQ29uc3RhbnRzLlNRUlRfUFJJQ0VfMV8xLCBaRVJPX0JZVEVTKTsKCiAgICAgICAgLy8gUHJvdmlkZSBsaXF1aWRpdHkgdG8gdGhlIHBvb2wKICAgICAgICBtb2RpZnlMaXF1aWRpdHlSb3V0ZXIubW9kaWZ5TGlxdWlkaXR5KAogICAgICAgICAgICBwb29sS2V5LAogICAgICAgICAgICBJUG9vbE1hbmFnZXIuTW9kaWZ5TGlxdWlkaXR5UGFyYW1zKFRpY2tNYXRoLm1pblVzYWJsZVRpY2soNjApLCBUaWNrTWF0aC5tYXhVc2FibGVUaWNrKDYwKSwgMTAwMCBldGhlciwgMCksCiAgICAgICAgICAgIFpFUk9fQllURVMKICAgICAgICApOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RRdW90ZXJfb3V0cHV0KCkgcHVibGljIHsKICAgICAgICB1aW50MTI4IGFtb3VudEluID0gMWUxODsKICAgICAgICBib29sIHplcm9Gb3JPbmUgPSB0cnVlOwogICAgICAgIHVpbnQxNjAgTUFYX1NMSVBQQUdFID0gemVyb0Zvck9uZSA/IE1JTl9QUklDRV9MSU1JVCA6IE1BWF9QUklDRV9MSU1JVDsKCiAgICAgICAgLy8gZ2V0IHRoZSBxdW90ZQogICAgICAgIFBvb2xLZXkgbWVtb3J5IGtleSA9IHBvb2xLZXk7CiAgICAgICAgKGludDEyOFtdIG1lbW9yeSBkZWx0YUFtb3VudHMsIHVpbnQxNjAgc3FydFByaWNlWDk2QWZ0ZXIsKSA9IHF1b3Rlci5xdW90ZUV4YWN0SW5wdXRTaW5nbGUoCiAgICAgICAgICAgIElRdW90ZXIuUXVvdGVFeGFjdFNpbmdsZVBhcmFtcyhrZXksIHplcm9Gb3JPbmUsIGFkZHJlc3ModGhpcyksIGFtb3VudEluLCBNQVhfU0xJUFBBR0UsIFpFUk9fQllURVMpCiAgICAgICAgKTsKCiAgICAgICAgLy8gb3V0cHV0IGlzIGFtb3VudCAxCiAgICAgICAgaW50MTI4IG91dHB1dEFtb3VudCA9IGRlbHRhQW1vdW50c1sxXTsKICAgICAgICBjb25zb2xlMi5sb2coIlF1b3RlZCBvdXRwdXQgYW1vdW50OiAiLCBpbnQyNTYob3V0cHV0QW1vdW50KSk7CgogICAgICAgIC8vIFBlcmZvcm0gYSB0ZXN0IHN3YXAKICAgICAgICBCYWxhbmNlRGVsdGEgc3dhcERlbHRhID0gc3dhcChwb29sS2V5LCB6ZXJvRm9yT25lLCAtaW50MjU2KHVpbnQyNTYoYW1vdW50SW4pKSwgWkVST19CWVRFUyk7CgogICAgICAgIC8vIHF1b3RlIGFncmVlcyB3aXRoIHRoZSBhY3R1YWwgc3dhcAogICAgICAgIGFzc2VydEVxKG91dHB1dEFtb3VudCwgLXN3YXBEZWx0YS5hbW91bnQxKCkpOwogICAgfQoKICAgIGZ1bmN0aW9uIHRlc3RRdW90ZXJfaW5wdXQoKSBwdWJsaWMgewogICAgICAgIHVpbnQxMjggYW1vdW50T3V0ID0gMWUxODsKICAgICAgICBib29sIHplcm9Gb3JPbmUgPSB0cnVlOwogICAgICAgIHVpbnQxNjAgTUFYX1NMSVBQQUdFID0gemVyb0Zvck9uZSA/IE1JTl9QUklDRV9MSU1JVCA6IE1BWF9QUklDRV9MSU1JVDsKCiAgICAgICAgLy8gZ2V0IHRoZSBxdW90ZQogICAgICAgIFBvb2xLZXkgbWVtb3J5IGtleSA9IHBvb2xLZXk7CiAgICAgICAgKGludDEyOFtdIG1lbW9yeSBkZWx0YUFtb3VudHMsIHVpbnQxNjAgc3FydFByaWNlWDk2QWZ0ZXIsKSA9IHF1b3Rlci5xdW90ZUV4YWN0T3V0cHV0U2luZ2xlKAogICAgICAgICAgICBJUXVvdGVyLlF1b3RlRXhhY3RTaW5nbGVQYXJhbXMoa2V5LCB6ZXJvRm9yT25lLCBhZGRyZXNzKHRoaXMpLCBhbW91bnRPdXQsIE1BWF9TTElQUEFHRSwgWkVST19CWVRFUykKICAgICAgICApOwoKICAgICAgICAvLyBpbnB1dCAocXVvdGVkKSBpcyBhbW91bnQgMAogICAgICAgIGludDEyOCBpbnB1dEFtb3VudCA9IGRlbHRhQW1vdW50c1swXTsKICAgICAgICBjb25zb2xlMi5sb2coIlF1b3RlZCBpbnB1dCBhbW91bnQ6ICIsIGludDI1NihpbnB1dEFtb3VudCkpOwoKICAgICAgICAvLyBQZXJmb3JtIGEgZXhhY3Qtb3V0cHV0IHN3YXAKICAgICAgICBCYWxhbmNlRGVsdGEgc3dhcERlbHRhID0gc3dhcChwb29sS2V5LCB6ZXJvRm9yT25lLCBpbnQyNTYodWludDI1NihhbW91bnRPdXQpKSwgWkVST19CWVRFUyk7CiAgICAgICAgYXNzZXJ0RXEoaW5wdXRBbW91bnQsIC1zd2FwRGVsdGEuYW1vdW50MCgpKTsKICAgICAgICAodWludDE2MCBzcXJ0UHJpY2VYOTYsLCwpID0gbWFuYWdlci5nZXRTbG90MChwb29sSWQpOwogICAgICAgIGFzc2VydEVxKHNxcnRQcmljZVg5NkFmdGVyLCBzcXJ0UHJpY2VYOTYpOwogICAgfQp9Cg==",
    },
    {
        fileName: "QuoterSnippet.sol",
        code: "aW1wb3J0IHtJUXVvdGVyfSBmcm9tICJ2NC1wZXJpcGhlcnkvaW50ZXJmYWNlcy9JUXVvdGVyLnNvbCI7CgpQb29sS2V5IG1lbW9yeSBrZXk7CnVpbnQxMjggYW1vdW50SW4gPSAxZTE4Owpib29sIHplcm9Gb3JPbmUgPSB0cnVlOwp1aW50MTYwIE1BWF9TTElQUEFHRSA9IHplcm9Gb3JPbmUgPyBNSU5fUFJJQ0VfTElNSVQgOiBNQVhfUFJJQ0VfTElNSVQ7CmJ5dGVzIG1lbW9yeSBob29rRGF0YTsKCi8vIGV4YWN0IGlucHV0IHdpbGwgcXVvdGUgZGVsdGFBbW91bnRzWzFdIChvdXRwdXQpCi8vIGV4YWN0IG91dHB1dCB3aWxsIHF1b3RlIGRlbHRhQW1vdW50c1swXSAoaW5wdXQpCihpbnQxMjhbXSBtZW1vcnkgZGVsdGFBbW91bnRzLCB1aW50MTYwIHNxcnRQcmljZVg5NkFmdGVyLCkgPSBxdW90ZXIucXVvdGVFeGFjdElucHV0U2luZ2xlKAogICAgSVF1b3Rlci5RdW90ZUV4YWN0U2luZ2xlUGFyYW1zKGtleSwgemVyb0Zvck9uZSwgYWRkcmVzcyh0aGlzKSwgYW1vdW50SW4sIE1BWF9TTElQUEFHRSwgaG9va0RhdGEpCik7Cg==",
    },
]

const html = `<ul>
<li><p>Quoting swaps -- for <strong>offchain purposes</strong></p>
</li>
<li><p>Quoter performs a swap and reverts, this very <em>expensive</em> and should not be used onchain</p>
</li>
</ul>
<p>The <code>Quoter</code> contract provides helper functions for quoting different types of swaps:</p>
<pre><code>|             | Exact Input           | Exact Output           |
|-------------|-----------------------|------------------------|
| Single Pool | quoteExactInputSingle | quoteExactOutputSingle |
| Multi-hop   | quoteExactInput       | quoteExactOutput       |
</code></pre><p><code>Exact Input</code>: Given the <code>input</code> amount, how many <em>output</em> tokens can I expect</p>
<p><code>Exact Output</code>: Given the desired <code>output</code> amount, how many <em>input</em> tokens should I provide</p>
<hr>
<h2>Quoter snippet</h2>
<pre><code class="language-solidity"><span class="hljs-keyword">import</span> {<span class="hljs-title">IQuoter</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-periphery/interfaces/IQuoter.sol"</span>;

PoolKey <span class="hljs-keyword">memory</span> key;
<span class="hljs-keyword">uint128</span> amountIn <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
<span class="hljs-keyword">bool</span> zeroForOne <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
<span class="hljs-keyword">uint160</span> MAX_SLIPPAGE <span class="hljs-operator">=</span> zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT;
<span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> hookData;

<span class="hljs-comment">// exact input will quote deltaAmounts[1] (output)</span>
<span class="hljs-comment">// exact output will quote deltaAmounts[0] (input)</span>
(<span class="hljs-keyword">int128</span>[] <span class="hljs-keyword">memory</span> deltaAmounts, <span class="hljs-keyword">uint160</span> sqrtPriceX96After,) <span class="hljs-operator">=</span> quoter.quoteExactInputSingle(
    IQuoter.QuoteExactSingleParams(key, zeroForOne, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn, MAX_SLIPPAGE, hookData)
);
</code></pre><h2>Example: Single Pool</h2>
<p>Please see <code>testQuoter_output()</code> and <code>testQuoter_input()</code> for example usage and validation</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.19;</span>

<span class="hljs-keyword">import</span> <span class="hljs-string">"forge-std/Test.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IHooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/interfaces/IHooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">TickMath</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/TickMath.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">BalanceDelta</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/BalanceDelta.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolId</span>, <span class="hljs-title">PoolIdLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/PoolId.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Constants</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/test/utils/Constants.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">CurrencyLibrary</span>, <span class="hljs-title">Currency</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/Currency.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Deployers</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/test/utils/Deployers.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IQuoter</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-periphery/interfaces/IQuoter.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Quoter</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-periphery/lens/Quoter.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">StateLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/StateLibrary.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">QuoterTest</span> <span class="hljs-keyword">is</span> <span class="hljs-title">Test</span>, <span class="hljs-title">Deployers</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">PoolIdLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">PoolKey</span>;
    <span class="hljs-keyword">using</span> <span class="hljs-title">CurrencyLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;
    <span class="hljs-keyword">using</span> <span class="hljs-title">StateLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">IPoolManager</span>;

    PoolKey poolKey;
    PoolId poolId;
    Quoter quoter;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setUp</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// creates the pool manager, test tokens, and other utility routers</span>
        Deployers.deployFreshManagerAndRouters();
        Deployers.deployMintAndApprove2Currencies();
        quoter <span class="hljs-operator">=</span> <span class="hljs-keyword">new</span> Quoter(<span class="hljs-keyword">address</span>(manager));

        <span class="hljs-comment">// Create the pool</span>
        poolKey <span class="hljs-operator">=</span> PoolKey(currency0, currency1, <span class="hljs-number">3000</span>, <span class="hljs-number">60</span>, IHooks(<span class="hljs-keyword">address</span>(<span class="hljs-number">0x0</span>)));
        poolId <span class="hljs-operator">=</span> poolKey.toId();
        manager.initialize(poolKey, Constants.SQRT_PRICE_1_1, ZERO_BYTES);

        <span class="hljs-comment">// Provide liquidity to the pool</span>
        modifyLiquidityRouter.modifyLiquidity(
            poolKey,
            IPoolManager.ModifyLiquidityParams(TickMath.minUsableTick(<span class="hljs-number">60</span>), TickMath.maxUsableTick(<span class="hljs-number">60</span>), <span class="hljs-number">1000</span> <span class="hljs-literal">ether</span>, <span class="hljs-number">0</span>),
            ZERO_BYTES
        );
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testQuoter_output</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint128</span> amountIn <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        <span class="hljs-keyword">bool</span> zeroForOne <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">uint160</span> MAX_SLIPPAGE <span class="hljs-operator">=</span> zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT;

        <span class="hljs-comment">// get the quote</span>
        PoolKey <span class="hljs-keyword">memory</span> key <span class="hljs-operator">=</span> poolKey;
        (<span class="hljs-keyword">int128</span>[] <span class="hljs-keyword">memory</span> deltaAmounts, <span class="hljs-keyword">uint160</span> sqrtPriceX96After,) <span class="hljs-operator">=</span> quoter.quoteExactInputSingle(
            IQuoter.QuoteExactSingleParams(key, zeroForOne, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountIn, MAX_SLIPPAGE, ZERO_BYTES)
        );

        <span class="hljs-comment">// output is amount 1</span>
        <span class="hljs-keyword">int128</span> outputAmount <span class="hljs-operator">=</span> deltaAmounts[<span class="hljs-number">1</span>];
        console2.log(<span class="hljs-string">"Quoted output amount: "</span>, <span class="hljs-keyword">int256</span>(outputAmount));

        <span class="hljs-comment">// Perform a test swap</span>
        BalanceDelta swapDelta <span class="hljs-operator">=</span> swap(poolKey, zeroForOne, <span class="hljs-operator">-</span><span class="hljs-keyword">int256</span>(<span class="hljs-keyword">uint256</span>(amountIn)), ZERO_BYTES);

        <span class="hljs-comment">// quote agrees with the actual swap</span>
        assertEq(outputAmount, <span class="hljs-operator">-</span>swapDelta.amount1());
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testQuoter_input</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-keyword">uint128</span> amountOut <span class="hljs-operator">=</span> <span class="hljs-number">1e18</span>;
        <span class="hljs-keyword">bool</span> zeroForOne <span class="hljs-operator">=</span> <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">uint160</span> MAX_SLIPPAGE <span class="hljs-operator">=</span> zeroForOne ? MIN_PRICE_LIMIT : MAX_PRICE_LIMIT;

        <span class="hljs-comment">// get the quote</span>
        PoolKey <span class="hljs-keyword">memory</span> key <span class="hljs-operator">=</span> poolKey;
        (<span class="hljs-keyword">int128</span>[] <span class="hljs-keyword">memory</span> deltaAmounts, <span class="hljs-keyword">uint160</span> sqrtPriceX96After,) <span class="hljs-operator">=</span> quoter.quoteExactOutputSingle(
            IQuoter.QuoteExactSingleParams(key, zeroForOne, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amountOut, MAX_SLIPPAGE, ZERO_BYTES)
        );

        <span class="hljs-comment">// input (quoted) is amount 0</span>
        <span class="hljs-keyword">int128</span> inputAmount <span class="hljs-operator">=</span> deltaAmounts[<span class="hljs-number">0</span>];
        console2.log(<span class="hljs-string">"Quoted input amount: "</span>, <span class="hljs-keyword">int256</span>(inputAmount));

        <span class="hljs-comment">// Perform a exact-output swap</span>
        BalanceDelta swapDelta <span class="hljs-operator">=</span> swap(poolKey, zeroForOne, <span class="hljs-keyword">int256</span>(<span class="hljs-keyword">uint256</span>(amountOut)), ZERO_BYTES);
        assertEq(inputAmount, <span class="hljs-operator">-</span>swapDelta.amount0());
        (<span class="hljs-keyword">uint160</span> sqrtPriceX96,,,) <span class="hljs-operator">=</span> manager.getSlot0(poolId);
        assertEq(sqrtPriceX96After, sqrtPriceX96);
    }
}
</code></pre>`

export default html

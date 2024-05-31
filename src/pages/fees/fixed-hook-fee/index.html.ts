// metadata
export const version = "0.8.20"
export const title = "Static Hook Fee"
export const description = "Charge a static hook fee"

export const keywords = [
    "hook",
    "hooks",
    "fee",
    "static fee",
    "hook fee",
]

export const codes = [
    {
        fileName: "EnableAccessLock.sol",
        code: "aW1wb3J0IHtIb29rc30gZnJvbSAidjQtY29yZS9zcmMvbGlicmFyaWVzL0hvb2tzLnNvbCI7CgpmdW5jdGlvbiBnZXRIb29rUGVybWlzc2lvbnMoKSBwdWJsaWMgcHVyZSBvdmVycmlkZSByZXR1cm5zIChIb29rcy5QZXJtaXNzaW9ucyBtZW1vcnkpIHsKICAgIHJldHVybiBIb29rcy5QZXJtaXNzaW9ucyh7CiAgICAgICAgYmVmb3JlSW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgYWZ0ZXJJbml0aWFsaXplOiBmYWxzZSwKICAgICAgICBiZWZvcmVNb2RpZnlQb3NpdGlvbjogZmFsc2UsCiAgICAgICAgYWZ0ZXJNb2RpZnlQb3NpdGlvbjogZmFsc2UsCiAgICAgICAgYmVmb3JlU3dhcDogdHJ1ZSwKICAgICAgICBhZnRlclN3YXA6IGZhbHNlLAogICAgICAgIGJlZm9yZURvbmF0ZTogZmFsc2UsCiAgICAgICAgYWZ0ZXJEb25hdGU6IGZhbHNlCiAgICB9KTsKfQ==",
    },
    {
        fileName: "FixedHookFee.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xOTsKCmltcG9ydCB7QmFzZUhvb2t9IGZyb20gInY0LXBlcmlwaGVyeS9CYXNlSG9vay5zb2wiOwoKaW1wb3J0IHtIb29rc30gZnJvbSAidjQtY29yZS9zcmMvbGlicmFyaWVzL0hvb2tzLnNvbCI7CmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJ2NC1jb3JlL3NyYy9pbnRlcmZhY2VzL0lQb29sTWFuYWdlci5zb2wiOwppbXBvcnQge1Bvb2xLZXl9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL1Bvb2xLZXkuc29sIjsKaW1wb3J0IHtCYWxhbmNlRGVsdGF9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL0JhbGFuY2VEZWx0YS5zb2wiOwppbXBvcnQge0N1cnJlbmN5LCBDdXJyZW5jeUxpYnJhcnl9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL0N1cnJlbmN5LnNvbCI7CmltcG9ydCB7QmVmb3JlU3dhcERlbHRhLCBCZWZvcmVTd2FwRGVsdGFMaWJyYXJ5fSBmcm9tICJ2NC1jb3JlL3NyYy90eXBlcy9CZWZvcmVTd2FwRGVsdGEuc29sIjsKaW1wb3J0IHtTYWZlQ2FzdH0gZnJvbSAidjQtY29yZS9zcmMvbGlicmFyaWVzL1NhZmVDYXN0LnNvbCI7Cgpjb250cmFjdCBGaXhlZEhvb2tGZWUgaXMgQmFzZUhvb2sgewogICAgdXNpbmcgQ3VycmVuY3lMaWJyYXJ5IGZvciBDdXJyZW5jeTsKICAgIHVzaW5nIFNhZmVDYXN0IGZvciB1aW50MjU2OwoKICAgIHVpbnQyNTYgcHVibGljIGNvbnN0YW50IEZJWEVEX0hPT0tfRkVFID0gMC4wMDAxZTE4OwoKICAgIGNvbnN0cnVjdG9yKElQb29sTWFuYWdlciBfcG9vbE1hbmFnZXIpIEJhc2VIb29rKF9wb29sTWFuYWdlcikge30KCiAgICBmdW5jdGlvbiBhZnRlclN3YXAoCiAgICAgICAgYWRkcmVzcywKICAgICAgICBQb29sS2V5IGNhbGxkYXRhIGtleSwKICAgICAgICBJUG9vbE1hbmFnZXIuU3dhcFBhcmFtcyBjYWxsZGF0YSBwYXJhbXMsCiAgICAgICAgQmFsYW5jZURlbHRhLAogICAgICAgIGJ5dGVzIGNhbGxkYXRhCiAgICApIGV4dGVybmFsIG92ZXJyaWRlIHJldHVybnMgKGJ5dGVzNCwgaW50MTI4KSB7CiAgICAgICAgLy8gdGFrZSBhIGZpeGVkIGZlZSBvZiAwLjAwMDEgb2YgdGhlIHVuc3BlY2lmaWVkIHRva2VuCgogICAgICAgIGJvb2wgZXhhY3RJbnB1dCA9IHBhcmFtcy5hbW91bnRTcGVjaWZpZWQgPCAwOwogICAgICAgIGJvb2wgc3BlY2lmaWVkSXNaZXJvID0gcGFyYW1zLnplcm9Gb3JPbmUgPT0gZXhhY3RJbnB1dDsKCiAgICAgICAgLy8gdGFraW5nIGEgaG9vayBmZWUgb24gdGhlIHVuc3BlY2lmaWVkIHRva2VuCiAgICAgICAgaWYgKHNwZWNpZmllZElzWmVybykgewogICAgICAgICAgICBwb29sTWFuYWdlci5taW50KGFkZHJlc3ModGhpcyksIGtleS5jdXJyZW5jeTEudG9JZCgpLCBGSVhFRF9IT09LX0ZFRSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgcG9vbE1hbmFnZXIubWludChhZGRyZXNzKHRoaXMpLCBrZXkuY3VycmVuY3kwLnRvSWQoKSwgRklYRURfSE9PS19GRUUpOwogICAgICAgIH0KCiAgICAgICAgLy8gYnkgcmV0dXJuaW5nIHRoZSBhbW91bnQgdGhlIGFtb3VudCB0aGUgaG9vayBoYXMgdGFrZW4sIFBvb2xNYW5hZ2VyIHdpbGwgYXBwbHkgdGhlIGhvb2sncyBkZWx0YSB0byB0aGUgc3dhcHBlcidzIGRlbHRhCiAgICAgICAgcmV0dXJuIChCYXNlSG9vay5hZnRlclN3YXAuc2VsZWN0b3IsIEZJWEVEX0hPT0tfRkVFLnRvSW50MTI4KCkpOwogICAgfQoKICAgIC8vLyBAZGV2IEJlY2F1c2UgdGhlIGZlZSBpcyB0YWtpbmcgYXMgYW4gRVJDNjkwOSBjbGFpbSwgeW91J2xsIHdhbnQgdG8gaW1wbGVtZW50IGxvZ2ljIHRvIGNvbGxlY3QKICAgIC8vLyBmZWUgYXMgRVJDMjAgT1IgRVJDNjkwOQogICAgLy8vIC4uLgoKICAgIGZ1bmN0aW9uIGdldEhvb2tQZXJtaXNzaW9ucygpIHB1YmxpYyBwdXJlIG92ZXJyaWRlIHJldHVybnMgKEhvb2tzLlBlcm1pc3Npb25zIG1lbW9yeSkgewogICAgICAgIHJldHVybiBIb29rcy5QZXJtaXNzaW9ucyh7CiAgICAgICAgICAgIGJlZm9yZUluaXRpYWxpemU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckluaXRpYWxpemU6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVBZGRMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVSZW1vdmVMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBhZnRlckFkZExpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyUmVtb3ZlTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlU3dhcDogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyU3dhcDogdHJ1ZSwKICAgICAgICAgICAgYmVmb3JlRG9uYXRlOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJEb25hdGU6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVTd2FwUmV0dXJuRGVsdGE6IGZhbHNlLAogICAgICAgICAgICBhZnRlclN3YXBSZXR1cm5EZWx0YTogdHJ1ZSwgLy8gLS0gRmVlIGNoYXJnZWQgb24gdW5zcGVjaWZpZWQgYWZ0ZXIgc3dhcCAtLSAvLwogICAgICAgICAgICBhZnRlckFkZExpcXVpZGl0eVJldHVybkRlbHRhOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJSZW1vdmVMaXF1aWRpdHlSZXR1cm5EZWx0YTogZmFsc2UKICAgICAgICB9KTsKICAgIH0KfQo=",
    },
    {
        fileName: "SetAccessLockPermission.sol",
        code: "Ly8gSG9vayBjYW4gdGFrZSBhIGZlZSB2aWEgQUNDRVNTX0xPQ0sKdWludDE2MCBmbGFncyA9IHVpbnQxNjAoSG9va3MuQkVGT1JFX1NXQVBfRkxBRyB8IEhvb2tzLkFDQ0VTU19MT0NLX0ZMQUcpOwoKKGFkZHJlc3MgaG9va0FkZHJlc3MsIGJ5dGVzMzIgc2FsdCkgPQogICAgSG9va01pbmVyLmZpbmQoYWRkcmVzcyh0aGlzKSwgZmxhZ3MsIHR5cGUoRml4ZWRIb29rRmVlKS5jcmVhdGlvbkNvZGUsIGFiaS5lbmNvZGUoYWRkcmVzcyhtYW5hZ2VyKSkpOwoKaG9vayA9IG5ldyBGaXhlZEhvb2tGZWV7c2FsdDogc2FsdH0oSVBvb2xNYW5hZ2VyKGFkZHJlc3MobWFuYWdlcikpKTsK",
    },
]

const html = `<p>Hook Fees</p>
<ul>
<li>Charge a hook fee</li>
</ul>
<p>Optional hook fees are taken (from swappers) via the hook. Hook fees can be dynamically calculated, or simply set to a fixed amount. Hooks can charge fees in any currency, however charging USDC on the ETH/DAI pair may pose routing-compatibility issues.</p>
<p>Hook fees are achieved using the return-delta-flags, i.e. <code>BEFORE_SWAP_RETURNS_DELTA_FLAG</code> and/or <code>AFTER_SWAP_RETURNS_DELTA_FLAG</code>. In beforeSwap or afterSwap, the hook uses <code>.mint</code> or <code>.take</code> to charge fees. The additional deltas are then applied to the Swapper.</p>
<p>While more investigations are required, charging fees on the <code>unspecified</code> currency is the recommended practice.</p>
<ul>
<li><p>For exact-input swaps, the fee on <em>unspecified</em> is the <em>output</em> token</p>
</li>
<li><p>For exact-outpout swaps, the fee on <em>unspecified</em> is the <em>input</em> token</p>
</li>
</ul>
<hr>
<h2>Example: Static Hook Fee</h2>
<p>This example hook charges a fixed-fee of 0.0001e18 tokens</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.19;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-periphery/BaseHook.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">BalanceDelta</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/BalanceDelta.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Currency</span>, <span class="hljs-title">CurrencyLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/Currency.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">BeforeSwapDelta</span>, <span class="hljs-title">BeforeSwapDeltaLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/BeforeSwapDelta.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">SafeCast</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/SafeCast.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">FixedHookFee</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">CurrencyLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;
    <span class="hljs-keyword">using</span> <span class="hljs-title">SafeCast</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">uint256</span></span>;

    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> FIXED_HOOK_FEE <span class="hljs-operator">=</span> <span class="hljs-number">0</span><span class="hljs-number">.0001e18</span>;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _poolManager</span>) <span class="hljs-title">BaseHook</span>(<span class="hljs-params">_poolManager</span>) </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterSwap</span>(<span class="hljs-params">
        <span class="hljs-keyword">address</span>,
        PoolKey <span class="hljs-keyword">calldata</span> key,
        IPoolManager.SwapParams <span class="hljs-keyword">calldata</span> params,
        BalanceDelta,
        <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span>
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span>, <span class="hljs-keyword">int128</span></span>) </span>{
        <span class="hljs-comment">// take a fixed fee of 0.0001 of the unspecified token</span>

        <span class="hljs-keyword">bool</span> exactInput <span class="hljs-operator">=</span> params.amountSpecified <span class="hljs-operator">&lt;</span> <span class="hljs-number">0</span>;
        <span class="hljs-keyword">bool</span> specifiedIsZero <span class="hljs-operator">=</span> params.zeroForOne <span class="hljs-operator">=</span><span class="hljs-operator">=</span> exactInput;

        <span class="hljs-comment">// taking a hook fee on the unspecified token</span>
        <span class="hljs-keyword">if</span> (specifiedIsZero) {
            poolManager.mint(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), key.currency1.toId(), FIXED_HOOK_FEE);
        } <span class="hljs-keyword">else</span> {
            poolManager.mint(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), key.currency0.toId(), FIXED_HOOK_FEE);
        }

        <span class="hljs-comment">// by returning the amount the amount the hook has taken, PoolManager will apply the hook&#x27;s delta to the swapper&#x27;s delta</span>
        <span class="hljs-keyword">return</span> (BaseHook.afterSwap.<span class="hljs-built_in">selector</span>, FIXED_HOOK_FEE.toInt128());
    }

    <span class="hljs-comment">/// @dev Because the fee is taking as an ERC6909 claim, you&#x27;ll want to implement logic to collect</span>
    <span class="hljs-comment">/// fee as ERC20 OR ERC6909</span>
    <span class="hljs-comment">/// ...</span>

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">false</span>,
            beforeAddLiquidity: <span class="hljs-literal">false</span>,
            beforeRemoveLiquidity: <span class="hljs-literal">false</span>,
            afterAddLiquidity: <span class="hljs-literal">false</span>,
            afterRemoveLiquidity: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">false</span>,
            afterSwap: <span class="hljs-literal">true</span>,
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>,
            beforeSwapReturnDelta: <span class="hljs-literal">false</span>,
            afterSwapReturnDelta: <span class="hljs-literal">true</span>, <span class="hljs-comment">// -- Fee charged on unspecified after swap -- //</span>
            afterAddLiquidityReturnDelta: <span class="hljs-literal">false</span>,
            afterRemoveLiquidityReturnDelta: <span class="hljs-literal">false</span>
        });
    }
}
</code></pre>`

export default html

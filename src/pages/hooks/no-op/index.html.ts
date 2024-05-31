// metadata
export const version = "0.8.20"
export const title = "NoOp Swap"
export const description = "Elect to skip an operation without reverting"

export const keywords = [
    "hook",
    "hooks",
    "noop",
    "no-op",
    "skip",
    "swap",
    "skip swap",
]

export const codes = [
    {
        fileName: "EnableNoOp.sol",
        code: "aW1wb3J0IHtIb29rc30gZnJvbSAidjQtY29yZS9zcmMvbGlicmFyaWVzL0hvb2tzLnNvbCI7CgpmdW5jdGlvbiBnZXRIb29rc0NhbGxzKCkgcHVibGljIHB1cmUgb3ZlcnJpZGUgcmV0dXJucyAoSG9va3MuQ2FsbHMgbWVtb3J5KSB7CiAgICByZXR1cm4gSG9va3MuQ2FsbHMoewogICAgICAgIGJlZm9yZUluaXRpYWxpemU6IGZhbHNlLAogICAgICAgIGFmdGVySW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgYmVmb3JlTW9kaWZ5UG9zaXRpb246IGZhbHNlLAogICAgICAgIGFmdGVyTW9kaWZ5UG9zaXRpb246IGZhbHNlLAogICAgICAgIGJlZm9yZVN3YXA6IHRydWUsCiAgICAgICAgYWZ0ZXJTd2FwOiBmYWxzZSwKICAgICAgICBiZWZvcmVEb25hdGU6IGZhbHNlLAogICAgICAgIGFmdGVyRG9uYXRlOiBmYWxzZSwKICAgICAgICBub09wOiB0cnVlIC8vIC0tIEVOQUJMRSBOTy1PUCAtLSAgLy8KICAgIH0pOwp9",
    },
    {
        fileName: "NoOpSwap.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCB7QmFzZUhvb2t9IGZyb20gInY0LXBlcmlwaGVyeS9CYXNlSG9vay5zb2wiOwoKaW1wb3J0IHtIb29rc30gZnJvbSAidjQtY29yZS9zcmMvbGlicmFyaWVzL0hvb2tzLnNvbCI7CmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJ2NC1jb3JlL3NyYy9pbnRlcmZhY2VzL0lQb29sTWFuYWdlci5zb2wiOwppbXBvcnQge1Bvb2xLZXl9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL1Bvb2xLZXkuc29sIjsKaW1wb3J0IHtQb29sSWQsIFBvb2xJZExpYnJhcnl9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL1Bvb2xJZC5zb2wiOwppbXBvcnQge3RvQmVmb3JlU3dhcERlbHRhLCBCZWZvcmVTd2FwRGVsdGEsIEJlZm9yZVN3YXBEZWx0YUxpYnJhcnl9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL0JlZm9yZVN3YXBEZWx0YS5zb2wiOwppbXBvcnQge0N1cnJlbmN5LCBDdXJyZW5jeUxpYnJhcnl9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL0N1cnJlbmN5LnNvbCI7CmltcG9ydCB7U2FmZUNhc3R9IGZyb20gInY0LWNvcmUvc3JjL2xpYnJhcmllcy9TYWZlQ2FzdC5zb2wiOwoKY29udHJhY3QgTm9PcFN3YXAgaXMgQmFzZUhvb2sgewogICAgdXNpbmcgUG9vbElkTGlicmFyeSBmb3IgUG9vbEtleTsKICAgIHVzaW5nIEN1cnJlbmN5TGlicmFyeSBmb3IgQ3VycmVuY3k7CiAgICB1c2luZyBTYWZlQ2FzdCBmb3IgdWludDI1NjsKCiAgICBtYXBwaW5nKFBvb2xJZCA9PiB1aW50MjU2IGNvdW50KSBwdWJsaWMgYmVmb3JlU3dhcENvdW50OwoKICAgIGNvbnN0cnVjdG9yKElQb29sTWFuYWdlciBfcG9vbE1hbmFnZXIpIEJhc2VIb29rKF9wb29sTWFuYWdlcikge30KCiAgICBmdW5jdGlvbiBiZWZvcmVTd2FwKGFkZHJlc3MsIFBvb2xLZXkgY2FsbGRhdGEga2V5LCBJUG9vbE1hbmFnZXIuU3dhcFBhcmFtcyBjYWxsZGF0YSBwYXJhbXMsIGJ5dGVzIGNhbGxkYXRhKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgb3ZlcnJpZGUKICAgICAgICByZXR1cm5zIChieXRlczQsIEJlZm9yZVN3YXBEZWx0YSwgdWludDI0KQogICAgewogICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vCiAgICAgICAgLy8gRXhhbXBsZSBOb09wOiBpZiBzd2FwIGlzIGV4YWN0SW5wdXQgYW5kIHRoZSBhbW91bnQgaXMgNjllMTgsIHRoZW4gdGhlIHN3YXAgd2lsbCBiZSBza2lwcGVkICAgLy8KICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvLwogICAgICAgIGlmIChwYXJhbXMuYW1vdW50U3BlY2lmaWVkID09IC02OWUxOCkgewogICAgICAgICAgICAvLyB0YWtlIHRoZSBpbnB1dCB0b2tlbiBzbyB0aGF0IHYzLXN3YXAgaXMgc2tpcHBlZC4uLgogICAgICAgICAgICB1aW50MjU2IGFtb3VudFRha2VuID0gNjllMTg7CiAgICAgICAgICAgIEN1cnJlbmN5IGlucHV0ID0gcGFyYW1zLnplcm9Gb3JPbmUgPyBrZXkuY3VycmVuY3kwIDoga2V5LmN1cnJlbmN5MTsKICAgICAgICAgICAgcG9vbE1hbmFnZXIubWludChhZGRyZXNzKHRoaXMpLCBpbnB1dC50b0lkKCksIGFtb3VudFRha2VuKTsKCiAgICAgICAgICAgIC8vIHRvIE5vT3AgdGhlIGV4YWN0IGlucHV0LCB3ZSByZXR1cm4gdGhlIGFtb3VudCB0aGF0J3MgdGFrZW4gYnkgdGhlIGhvb2sKICAgICAgICAgICAgcmV0dXJuIChCYXNlSG9vay5iZWZvcmVTd2FwLnNlbGVjdG9yLCB0b0JlZm9yZVN3YXBEZWx0YShhbW91bnRUYWtlbi50b0ludDEyOCgpLCAwKSwgMCk7CiAgICAgICAgfQoKICAgICAgICBiZWZvcmVTd2FwQ291bnRba2V5LnRvSWQoKV0rKzsKICAgICAgICByZXR1cm4gKEJhc2VIb29rLmJlZm9yZVN3YXAuc2VsZWN0b3IsIEJlZm9yZVN3YXBEZWx0YUxpYnJhcnkuWkVST19ERUxUQSwgMCk7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0SG9va1Blcm1pc3Npb25zKCkgcHVibGljIHB1cmUgb3ZlcnJpZGUgcmV0dXJucyAoSG9va3MuUGVybWlzc2lvbnMgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIEhvb2tzLlBlcm1pc3Npb25zKHsKICAgICAgICAgICAgYmVmb3JlSW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVySW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZUFkZExpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZVJlbW92ZUxpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyQWRkTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJSZW1vdmVMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVTd2FwOiB0cnVlLCAvLyAtLSBOby1vcCdpbmcgdGhlIHN3YXAgLS0gIC8vCiAgICAgICAgICAgIGFmdGVyU3dhcDogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZURvbmF0ZTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyRG9uYXRlOiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlU3dhcFJldHVybkRlbHRhOiB0cnVlLCAvLyAtLSBOby1vcCdpbmcgdGhlIHN3YXAgLS0gIC8vCiAgICAgICAgICAgIGFmdGVyU3dhcFJldHVybkRlbHRhOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJBZGRMaXF1aWRpdHlSZXR1cm5EZWx0YTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyUmVtb3ZlTGlxdWlkaXR5UmV0dXJuRGVsdGE6IGZhbHNlCiAgICAgICAgfSk7CiAgICB9Cn0K",
    },
    {
        fileName: "SetNoOpPermission.sol",
        code: "Ly8gSG9vayBjYW4gbm8tb3AgdGhlIHN3YXAKdWludDE2MCBmbGFncyA9IHVpbnQxNjAoSG9va3MuQkVGT1JFX1NXQVBfRkxBRyB8IEhvb2tzLk5PX09QX0ZMQUcpOwoKKGFkZHJlc3MgaG9va0FkZHJlc3MsIGJ5dGVzMzIgc2FsdCkgPQogICAgSG9va01pbmVyLmZpbmQoYWRkcmVzcyh0aGlzKSwgZmxhZ3MsIHR5cGUoTm9PcFN3YXApLmNyZWF0aW9uQ29kZSwgYWJpLmVuY29kZShhZGRyZXNzKG1hbmFnZXIpKSk7Cgpob29rID0gbmV3IE5vT3BTd2Fwe3NhbHQ6IHNhbHR9KElQb29sTWFuYWdlcihhZGRyZXNzKG1hbmFnZXIpKSk7Cg==",
    },
]

const html = `<p>NoOp Swap:</p>
<ul>
<li>Elect to skip or delay the concentrated liquidity swap (v3)</li>
</ul>
<p>When a <code>beforeSwap</code> hook returns a <code>BeforeSwapDelta</code> that nets exactly equal to <code>params.amountSpecified</code>, the subsequent swap operation is <em>skipped</em>. NoOp Swap requires <code>Hooks.BEFORE_SWAP_RETURNS_DELTA_FLAG</code></p>
<blockquote>
<p>NoOp will <em>only</em> work on <code>beforeSwap</code></p>
</blockquote>
<ul>
<li>To NoOp <em>exact input</em> (amountSpecified is negative): use <code>toBeforeSwapDelta(-params.amountSpecified, ...)</code> as a return</li>
</ul>
<hr>
<p>Use-cases:</p>
<ul>
<li>Asynchronous swap fulfillment. Reorder and fulfill swaps at a later point in the time</li>
<li>Combine <code>NoOp</code> + custom accounting to facilitate swaps with external liquidity</li>
</ul>
<hr>
<h2>Example: NoOp Swap</h2>
<p>Skip the v3-swap if the input amount is 69e18 tokens. This example is only tested for exact-input swaps (when amountSpecified is negative)</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-periphery/BaseHook.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolId</span>, <span class="hljs-title">PoolIdLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/PoolId.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">toBeforeSwapDelta</span>, <span class="hljs-title">BeforeSwapDelta</span>, <span class="hljs-title">BeforeSwapDeltaLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/BeforeSwapDelta.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Currency</span>, <span class="hljs-title">CurrencyLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/Currency.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">SafeCast</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/SafeCast.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">NoOpSwap</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">PoolIdLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">PoolKey</span>;
    <span class="hljs-keyword">using</span> <span class="hljs-title">CurrencyLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;
    <span class="hljs-keyword">using</span> <span class="hljs-title">SafeCast</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">uint256</span></span>;

    <span class="hljs-keyword">mapping</span>(PoolId <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">uint256</span> count) <span class="hljs-keyword">public</span> beforeSwapCount;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _poolManager</span>) <span class="hljs-title">BaseHook</span>(<span class="hljs-params">_poolManager</span>) </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeSwap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.SwapParams <span class="hljs-keyword">calldata</span> params, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span>, BeforeSwapDelta, <span class="hljs-keyword">uint24</span></span>)
    </span>{
        <span class="hljs-comment">// -------------------------------------------------------------------------------------------- //</span>
        <span class="hljs-comment">// Example NoOp: if swap is exactInput and the amount is 69e18, then the swap will be skipped   //</span>
        <span class="hljs-comment">// -------------------------------------------------------------------------------------------- //</span>
        <span class="hljs-keyword">if</span> (params.amountSpecified <span class="hljs-operator">=</span><span class="hljs-operator">=</span> <span class="hljs-number">-69e18</span>) {
            <span class="hljs-comment">// take the input token so that v3-swap is skipped...</span>
            <span class="hljs-keyword">uint256</span> amountTaken <span class="hljs-operator">=</span> <span class="hljs-number">69e18</span>;
            Currency input <span class="hljs-operator">=</span> params.zeroForOne ? key.currency0 : key.currency1;
            poolManager.mint(<span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), input.toId(), amountTaken);

            <span class="hljs-comment">// to NoOp the exact input, we return the amount that&#x27;s taken by the hook</span>
            <span class="hljs-keyword">return</span> (BaseHook.beforeSwap.<span class="hljs-built_in">selector</span>, toBeforeSwapDelta(amountTaken.toInt128(), <span class="hljs-number">0</span>), <span class="hljs-number">0</span>);
        }

        beforeSwapCount[key.toId()]<span class="hljs-operator">+</span><span class="hljs-operator">+</span>;
        <span class="hljs-keyword">return</span> (BaseHook.beforeSwap.<span class="hljs-built_in">selector</span>, BeforeSwapDeltaLibrary.ZERO_DELTA, <span class="hljs-number">0</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">false</span>,
            beforeAddLiquidity: <span class="hljs-literal">false</span>,
            beforeRemoveLiquidity: <span class="hljs-literal">false</span>,
            afterAddLiquidity: <span class="hljs-literal">false</span>,
            afterRemoveLiquidity: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">true</span>, <span class="hljs-comment">// -- No-op&#x27;ing the swap --  //</span>
            afterSwap: <span class="hljs-literal">false</span>,
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>,
            beforeSwapReturnDelta: <span class="hljs-literal">true</span>, <span class="hljs-comment">// -- No-op&#x27;ing the swap --  //</span>
            afterSwapReturnDelta: <span class="hljs-literal">false</span>,
            afterAddLiquidityReturnDelta: <span class="hljs-literal">false</span>,
            afterRemoveLiquidityReturnDelta: <span class="hljs-literal">false</span>
        });
    }
}
</code></pre>`

export default html

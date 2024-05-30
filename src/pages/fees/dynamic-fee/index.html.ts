// metadata
export const version = "0.8.20"
export const title = "Dynamic Fees"
export const description = "Design a v4 pool with a dynamic fee"

export const keywords = [
    "fee",
    "fees",
    "dynamic fee",
    "dynamic",
    "poke",
]

export const codes = [
    {
        fileName: "DynamicFeeOverride.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xOTsKCmltcG9ydCB7QmFzZUhvb2t9IGZyb20gInY0LXBlcmlwaGVyeS9CYXNlSG9vay5zb2wiOwoKaW1wb3J0IHtIb29rc30gZnJvbSAidjQtY29yZS9zcmMvbGlicmFyaWVzL0hvb2tzLnNvbCI7CmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJ2NC1jb3JlL3NyYy9pbnRlcmZhY2VzL0lQb29sTWFuYWdlci5zb2wiOwppbXBvcnQge1Bvb2xLZXl9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL1Bvb2xLZXkuc29sIjsKaW1wb3J0IHtCZWZvcmVTd2FwRGVsdGEsIEJlZm9yZVN3YXBEZWx0YUxpYnJhcnl9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL0JlZm9yZVN3YXBEZWx0YS5zb2wiOwppbXBvcnQge0xQRmVlTGlicmFyeX0gZnJvbSAidjQtY29yZS9zcmMvbGlicmFyaWVzL0xQRmVlTGlicmFyeS5zb2wiOwoKLy8vIEBub3RpY2UgQSB0aW1lLWRlY2F5aW5nIGR5bmFtaWNhbGx5IGZlZSwgdXBkYXRlZCBhdXRvbWF0aWNhbGx5IHdpdGggYmVmb3JlU3dhcCgpCmNvbnRyYWN0IER5bmFtaWNGZWVPdmVycmlkZSBpcyBCYXNlSG9vayB7CiAgICB1aW50MjU2IHB1YmxpYyBpbW11dGFibGUgc3RhcnRUaW1lc3RhbXA7CgogICAgLy8gU3RhcnQgYXQgNSUgZmVlLCBkZWNheWluZyBhdCByYXRlIG9mIDAuMDAwMDElIHBlciBzZWNvbmQKICAgIC8vIGFmdGVyIDQ5NSwwMDAgc2Vjb25kcyAoNS43MiBkYXlzKSwgZmVlIHdpbGwgYmUgYSBtaW5pbXVtIG9mIDAuMDUlCiAgICAvLyBOT1RFOiBiZWNhdXNlIGZlZXMgYXJlIHVpbnQyNCwgd2Ugd2lsbCBsb3NlIHNvbWUgcHJlY2lzaW9uCiAgICB1aW50MTI4IHB1YmxpYyBjb25zdGFudCBTVEFSVF9GRUUgPSA1MDAwMDA7IC8vIHJlcHJlc2VudHMgNSUKICAgIHVpbnQxMjggcHVibGljIGNvbnN0YW50IE1JTl9GRUUgPSA1MDA7IC8vIG1pbmltdW0gZmVlIG9mIDAuMDUlCgogICAgdWludDEyOCBwdWJsaWMgY29uc3RhbnQgZGVjYXlSYXRlID0gMTsgLy8gMC4wMDAwMSUgcGVyIHNlY29uZAoKICAgIGNvbnN0cnVjdG9yKElQb29sTWFuYWdlciBfcG9vbE1hbmFnZXIpIEJhc2VIb29rKF9wb29sTWFuYWdlcikgewogICAgICAgIHN0YXJ0VGltZXN0YW1wID0gYmxvY2sudGltZXN0YW1wOwogICAgfQoKICAgIGZ1bmN0aW9uIGJlZm9yZVN3YXAoYWRkcmVzcywgUG9vbEtleSBjYWxsZGF0YSwgSVBvb2xNYW5hZ2VyLlN3YXBQYXJhbXMgY2FsbGRhdGEsIGJ5dGVzIGNhbGxkYXRhKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgb3ZlcnJpZGUKICAgICAgICByZXR1cm5zIChieXRlczQsIEJlZm9yZVN3YXBEZWx0YSwgdWludDI0KQogICAgewogICAgICAgIC8vIExpbmVhcmx5IGRlY2F5aW5nIGZlZSwgeSA9IG14ICsgYgogICAgICAgIC8vIEFmdGVyIDQ5NSwwMDAgc2Vjb25kcyAoNS43MiBkYXlzKSwgZmVlIHdpbGwgYmUgYSBtaW5pbXVtIG9mIDAuMDUlCiAgICAgICAgdWludDI1NiBfY3VycmVudEZlZTsKICAgICAgICB1bmNoZWNrZWQgewogICAgICAgICAgICB1aW50MjU2IHRpbWVFbGFwc2VkID0gYmxvY2sudGltZXN0YW1wIC0gc3RhcnRUaW1lc3RhbXA7CiAgICAgICAgICAgIF9jdXJyZW50RmVlID0KICAgICAgICAgICAgICAgIHRpbWVFbGFwc2VkID4gNDk1MDAwID8gdWludDI1NihNSU5fRkVFKSA6ICh1aW50MjU2KFNUQVJUX0ZFRSkgLSAodGltZUVsYXBzZWQgKiBkZWNheVJhdGUpKSAvIDEwOwogICAgICAgIH0KCiAgICAgICAgLy8gdG8gb3ZlcnJpZGUgdGhlIExQIGZlZSwgaXRzIDJuZCBiaXQgbXVzdCBiZSBzZXQgZm9yIHRoZSBvdmVycmlkZSB0byBhcHBseQogICAgICAgIHVpbnQyNTYgb3ZlcnJpZGVGZWUgPSBfY3VycmVudEZlZSB8IHVpbnQyNTYoTFBGZWVMaWJyYXJ5Lk9WRVJSSURFX0ZFRV9GTEFHKTsKICAgICAgICByZXR1cm4gKEJhc2VIb29rLmJlZm9yZVN3YXAuc2VsZWN0b3IsIEJlZm9yZVN3YXBEZWx0YUxpYnJhcnkuWkVST19ERUxUQSwgdWludDI0KG92ZXJyaWRlRmVlKSk7CiAgICB9CgogICAgZnVuY3Rpb24gYWZ0ZXJJbml0aWFsaXplKGFkZHJlc3MsIFBvb2xLZXkgY2FsbGRhdGEga2V5LCB1aW50MTYwLCBpbnQyNCwgYnl0ZXMgY2FsbGRhdGEpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICBvdmVycmlkZQogICAgICAgIHJldHVybnMgKGJ5dGVzNCkKICAgIHsKICAgICAgICBwb29sTWFuYWdlci51cGRhdGVEeW5hbWljTFBGZWUoa2V5LCB1aW50MjQoU1RBUlRfRkVFKSk7CiAgICAgICAgcmV0dXJuIEJhc2VIb29rLmFmdGVySW5pdGlhbGl6ZS5zZWxlY3RvcjsKICAgIH0KCiAgICAvLy8gQGRldiB0aGlzIGV4YW1wbGUgaG9vayBjb250cmFjdCBkb2VzIG5vdCBpbXBsZW1lbnQgYW55IGhvb2tzCiAgICBmdW5jdGlvbiBnZXRIb29rUGVybWlzc2lvbnMoKSBwdWJsaWMgcHVyZSBvdmVycmlkZSByZXR1cm5zIChIb29rcy5QZXJtaXNzaW9ucyBtZW1vcnkpIHsKICAgICAgICByZXR1cm4gSG9va3MuUGVybWlzc2lvbnMoewogICAgICAgICAgICBiZWZvcmVJbml0aWFsaXplOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJJbml0aWFsaXplOiB0cnVlLAogICAgICAgICAgICBiZWZvcmVBZGRMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBhZnRlckFkZExpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZVJlbW92ZUxpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyUmVtb3ZlTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlU3dhcDogdHJ1ZSwKICAgICAgICAgICAgYWZ0ZXJTd2FwOiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlRG9uYXRlOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJEb25hdGU6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVTd2FwUmV0dXJuRGVsdGE6IGZhbHNlLAogICAgICAgICAgICBhZnRlclN3YXBSZXR1cm5EZWx0YTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyQWRkTGlxdWlkaXR5UmV0dXJuRGVsdGE6IGZhbHNlLAogICAgICAgICAgICBhZnRlclJlbW92ZUxpcXVpZGl0eVJldHVybkRlbHRhOiBmYWxzZQogICAgICAgIH0pOwogICAgfQp9Cg==",
    },
    {
        fileName: "ManualDynamicFee.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xOTsKCmltcG9ydCB7QmFzZUhvb2t9IGZyb20gInY0LXBlcmlwaGVyeS9CYXNlSG9vay5zb2wiOwoKaW1wb3J0IHtIb29rc30gZnJvbSAidjQtY29yZS9zcmMvbGlicmFyaWVzL0hvb2tzLnNvbCI7CmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJ2NC1jb3JlL3NyYy9pbnRlcmZhY2VzL0lQb29sTWFuYWdlci5zb2wiOwppbXBvcnQge1Bvb2xLZXl9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL1Bvb2xLZXkuc29sIjsKCi8vLyBAbm90aWNlIEEgdGltZS1kZWNheWluZyBkeW5hbWljYWxseSBmZWUsIHVwZGF0ZWQgbWFudWFsbHkgd2l0aCBleHRlcm5hbCBQb29sTWFuYWdlci51cGRhdGVEeW5hbWljU3dhcEZlZSgpIGNhbGxzCmNvbnRyYWN0IE1hbnVhbER5bmFtaWNGZWUgaXMgQmFzZUhvb2sgewogICAgdWludDI1NiBwdWJsaWMgaW1tdXRhYmxlIHN0YXJ0VGltZXN0YW1wOwoKICAgIC8vIFN0YXJ0IGF0IDUlIGZlZSwgZGVjYXlpbmcgYXQgcmF0ZSBvZiAwLjAwMDAxJSBwZXIgc2Vjb25kCiAgICAvLyBhZnRlciA0OTUsMDAwIHNlY29uZHMgKDUuNzIgZGF5cyksIGZlZSB3aWxsIGJlIGEgbWluaW11bSBvZiAwLjA1JQogICAgLy8gTk9URTogYmVjYXVzZSBmZWVzIGFyZSB1aW50MjQsIHdlIHdpbGwgbG9zZSBzb21lIHByZWNpc2lvbgogICAgdWludDEyOCBwdWJsaWMgY29uc3RhbnQgU1RBUlRfRkVFID0gNTAwMDAwOyAvLyByZXByZXNlbnRzIDUlCiAgICB1aW50MTI4IHB1YmxpYyBjb25zdGFudCBNSU5fRkVFID0gNTAwOyAvLyBtaW5pbXVtIGZlZSBvZiAwLjA1JQoKICAgIHVpbnQxMjggcHVibGljIGNvbnN0YW50IGRlY2F5UmF0ZSA9IDE7IC8vIDAuMDAwMDElIHBlciBzZWNvbmQKCiAgICBjb25zdHJ1Y3RvcihJUG9vbE1hbmFnZXIgX3Bvb2xNYW5hZ2VyKSBCYXNlSG9vayhfcG9vbE1hbmFnZXIpIHsKICAgICAgICBzdGFydFRpbWVzdGFtcCA9IGJsb2NrLnRpbWVzdGFtcDsKICAgIH0KCiAgICAvLy8gQGRldiBEZXRlcmVtaW5lcyBhIFBvb2wncyBzd2FwIGZlZQogICAgZnVuY3Rpb24gc2V0RmVlKFBvb2xLZXkgY2FsbGRhdGEga2V5KSBwdWJsaWMgewogICAgICAgIC8vIExpbmVhcmx5IGRlY2F5aW5nIGZlZSwgeSA9IG14ICsgYgogICAgICAgIC8vIEFmdGVyIDQ5NSwwMDAgc2Vjb25kcyAoNS43MiBkYXlzKSwgZmVlIHdpbGwgYmUgYSBtaW5pbXVtIG9mIDAuMDUlCiAgICAgICAgdWludDI0IF9jdXJyZW50RmVlOwogICAgICAgIHVuY2hlY2tlZCB7CiAgICAgICAgICAgIHVpbnQyNTYgdGltZUVsYXBzZWQgPSBibG9jay50aW1lc3RhbXAgLSBzdGFydFRpbWVzdGFtcDsKICAgICAgICAgICAgX2N1cnJlbnRGZWUgPSB0aW1lRWxhcHNlZCA+IDQ5NTAwMCA/IHVpbnQyNChNSU5fRkVFKSA6IHVpbnQyNCgoU1RBUlRfRkVFIC0gKHRpbWVFbGFwc2VkICogZGVjYXlSYXRlKSkgLyAxMCk7CiAgICAgICAgfQogICAgICAgIHBvb2xNYW5hZ2VyLnVwZGF0ZUR5bmFtaWNMUEZlZShrZXksIF9jdXJyZW50RmVlKTsKICAgIH0KCiAgICBmdW5jdGlvbiBhZnRlckluaXRpYWxpemUoYWRkcmVzcywgUG9vbEtleSBjYWxsZGF0YSBrZXksIHVpbnQxNjAsIGludDI0LCBieXRlcyBjYWxsZGF0YSkKICAgICAgICBleHRlcm5hbAogICAgICAgIG92ZXJyaWRlCiAgICAgICAgcmV0dXJucyAoYnl0ZXM0KQogICAgewogICAgICAgIHNldEZlZShrZXkpOwogICAgICAgIHJldHVybiBCYXNlSG9vay5hZnRlckluaXRpYWxpemUuc2VsZWN0b3I7CiAgICB9CgogICAgLy8vIEBkZXYgdGhpcyBleGFtcGxlIGhvb2sgY29udHJhY3QgZG9lcyBub3QgaW1wbGVtZW50IGFueSBob29rcwogICAgZnVuY3Rpb24gZ2V0SG9va1Blcm1pc3Npb25zKCkgcHVibGljIHB1cmUgb3ZlcnJpZGUgcmV0dXJucyAoSG9va3MuUGVybWlzc2lvbnMgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIEhvb2tzLlBlcm1pc3Npb25zKHsKICAgICAgICAgICAgYmVmb3JlSW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVySW5pdGlhbGl6ZTogdHJ1ZSwKICAgICAgICAgICAgYmVmb3JlQWRkTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJBZGRMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVSZW1vdmVMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBhZnRlclJlbW92ZUxpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZVN3YXA6IGZhbHNlLAogICAgICAgICAgICBhZnRlclN3YXA6IGZhbHNlLAogICAgICAgICAgICBiZWZvcmVEb25hdGU6IGZhbHNlLAogICAgICAgICAgICBhZnRlckRvbmF0ZTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZVN3YXBSZXR1cm5EZWx0YTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyU3dhcFJldHVybkRlbHRhOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJBZGRMaXF1aWRpdHlSZXR1cm5EZWx0YTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyUmVtb3ZlTGlxdWlkaXR5UmV0dXJuRGVsdGE6IGZhbHNlCiAgICAgICAgfSk7CiAgICB9Cn0K",
    },
]

const html = `<ul>
<li>Design a v4 pool with a dynamic fee</li>
</ul>
<p>Uniswap v4 pools can support dynamic swap fees, and do not need to adhere to a static fee (0.05% / 0.30% / 1.0%). The hook needs to use <code>LPFeeLibrary.DYNAMIC_FEE_FLAG</code> as its <code>PoolKey.fee</code>. <strong>By default, dynamic-fee-pools initialize with a 0% fee</strong></p>
<blockquote>
<p>Use <code>afterInitialize</code> to set the initial fee of a dynamic-fee-pool</p>
</blockquote>
<hr>
<p>There are two ways to update the dynamic fee:</p>
<ol>
<li><p>The hook contract calls <code>IPoolManager.updateDynamicLPFee(PoolKey memory key, uint24 newDynamicLPFee)</code></p>
</li>
<li><p>Use <code>beforeSwap</code> and return a valid fee with its 2nd bit set to 1 (i.e. <code>fee | LPFeeLibrary.OVERRIDE_FEE_FLAG</code>)</p>
</li>
</ol>
<p>Using <code>beforeSwap</code> is useful for dynamic fees that may change on <em>every</em> swap. It&#39;s more gas efficient than calling <code>updateDynamicLPFee</code> in every call. <strong>Note: the fee returned by beforeSwap is not saved to the PoolManager</strong></p>
<hr>
<h3>Initialize a Dynamic Fee Pool</h3>
<pre><code class="language-solidity"><span class="hljs-keyword">import</span> {<span class="hljs-title">LPFeeLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/LPFeeLibrary.sol"</span>;


poolKey <span class="hljs-operator">=</span> PoolKey(
    currency0,
    currency1,
    LPFeeLibrary.DYNAMIC_FEE_FLAG, <span class="hljs-comment">// signal that the pool has a dynamic fee</span>
    <span class="hljs-number">60</span>,
    IHooks(hook)
);
manager.initialize(poolKey, startingPrice, hookData);
</code></pre><h2>Example: Manual Dynamic Fee</h2>
<p><em>Implements a time-decaying dynamic fee</em></p>
<ul>
<li>The swap fee starts at 5.0% </li>
<li>The fee decays 0.00001% every second</li>
<li>After 495,000 seconds, the minimum fee is set to 0.05%</li>
</ul>
<p>An external party must call <code>hook.setFee()</code> to update the dynamic fee</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.19;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-periphery/BaseHook.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/PoolKey.sol"</span>;

<span class="hljs-comment">/// @notice A time-decaying dynamically fee, updated manually with external PoolManager.updateDynamicSwapFee() calls</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ManualDynamicFee</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> startTimestamp;

    <span class="hljs-comment">// Start at 5% fee, decaying at rate of 0.00001% per second</span>
    <span class="hljs-comment">// after 495,000 seconds (5.72 days), fee will be a minimum of 0.05%</span>
    <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> because fees are uint24, we will lose some precision</span>
    <span class="hljs-keyword">uint128</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> START_FEE <span class="hljs-operator">=</span> <span class="hljs-number">500000</span>; <span class="hljs-comment">// represents 5%</span>
    <span class="hljs-keyword">uint128</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MIN_FEE <span class="hljs-operator">=</span> <span class="hljs-number">500</span>; <span class="hljs-comment">// minimum fee of 0.05%</span>

    <span class="hljs-keyword">uint128</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> decayRate <span class="hljs-operator">=</span> <span class="hljs-number">1</span>; <span class="hljs-comment">// 0.00001% per second</span>

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _poolManager</span>) <span class="hljs-title">BaseHook</span>(<span class="hljs-params">_poolManager</span>) </span>{
        startTimestamp <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>;
    }

    <span class="hljs-comment">/// @dev Deteremines a Pool&#x27;s swap fee</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setFee</span>(<span class="hljs-params">PoolKey <span class="hljs-keyword">calldata</span> key</span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> </span>{
        <span class="hljs-comment">// Linearly decaying fee, y = mx + b</span>
        <span class="hljs-comment">// After 495,000 seconds (5.72 days), fee will be a minimum of 0.05%</span>
        <span class="hljs-keyword">uint24</span> _currentFee;
        <span class="hljs-keyword">unchecked</span> {
            <span class="hljs-keyword">uint256</span> timeElapsed <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">-</span> startTimestamp;
            _currentFee <span class="hljs-operator">=</span> timeElapsed <span class="hljs-operator">&gt;</span> <span class="hljs-number">495000</span> ? <span class="hljs-keyword">uint24</span>(MIN_FEE) : <span class="hljs-keyword">uint24</span>((START_FEE <span class="hljs-operator">-</span> (timeElapsed <span class="hljs-operator">*</span> decayRate)) <span class="hljs-operator">/</span> <span class="hljs-number">10</span>);
        }
        poolManager.updateDynamicLPFee(key, _currentFee);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterInitialize</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span> key, <span class="hljs-keyword">uint160</span>, <span class="hljs-keyword">int24</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)
    </span>{
        setFee(key);
        <span class="hljs-keyword">return</span> BaseHook.afterInitialize.<span class="hljs-built_in">selector</span>;
    }

    <span class="hljs-comment">/// @dev this example hook contract does not implement any hooks</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">true</span>,
            beforeAddLiquidity: <span class="hljs-literal">false</span>,
            afterAddLiquidity: <span class="hljs-literal">false</span>,
            beforeRemoveLiquidity: <span class="hljs-literal">false</span>,
            afterRemoveLiquidity: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">false</span>,
            afterSwap: <span class="hljs-literal">false</span>,
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>,
            beforeSwapReturnDelta: <span class="hljs-literal">false</span>,
            afterSwapReturnDelta: <span class="hljs-literal">false</span>,
            afterAddLiquidityReturnDelta: <span class="hljs-literal">false</span>,
            afterRemoveLiquidityReturnDelta: <span class="hljs-literal">false</span>
        });
    }
}
</code></pre><h2>Example: Overriding Dynamic Fee</h2>
<p><em>Implements an automatically-updated, time-decaying dynamic fee</em></p>
<p>The hook uses <code>beforeSwap</code> to return a valid <em>override</em> fee, which is always up-to-date</p>
<p><em>a few thousand gas cheaper than calling <code>updateDynamicLPFee</code></em></p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.19;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-periphery/BaseHook.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">BeforeSwapDelta</span>, <span class="hljs-title">BeforeSwapDeltaLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/BeforeSwapDelta.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">LPFeeLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/LPFeeLibrary.sol"</span>;

<span class="hljs-comment">/// @notice A time-decaying dynamically fee, updated automatically with beforeSwap()</span>
<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">DynamicFeeOverride</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span> </span>{
    <span class="hljs-keyword">uint256</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">immutable</span> startTimestamp;

    <span class="hljs-comment">// Start at 5% fee, decaying at rate of 0.00001% per second</span>
    <span class="hljs-comment">// after 495,000 seconds (5.72 days), fee will be a minimum of 0.05%</span>
    <span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> because fees are uint24, we will lose some precision</span>
    <span class="hljs-keyword">uint128</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> START_FEE <span class="hljs-operator">=</span> <span class="hljs-number">500000</span>; <span class="hljs-comment">// represents 5%</span>
    <span class="hljs-keyword">uint128</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> MIN_FEE <span class="hljs-operator">=</span> <span class="hljs-number">500</span>; <span class="hljs-comment">// minimum fee of 0.05%</span>

    <span class="hljs-keyword">uint128</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">constant</span> decayRate <span class="hljs-operator">=</span> <span class="hljs-number">1</span>; <span class="hljs-comment">// 0.00001% per second</span>

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _poolManager</span>) <span class="hljs-title">BaseHook</span>(<span class="hljs-params">_poolManager</span>) </span>{
        startTimestamp <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span>;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeSwap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span>, IPoolManager.SwapParams <span class="hljs-keyword">calldata</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span>, BeforeSwapDelta, <span class="hljs-keyword">uint24</span></span>)
    </span>{
        <span class="hljs-comment">// Linearly decaying fee, y = mx + b</span>
        <span class="hljs-comment">// After 495,000 seconds (5.72 days), fee will be a minimum of 0.05%</span>
        <span class="hljs-keyword">uint256</span> _currentFee;
        <span class="hljs-keyword">unchecked</span> {
            <span class="hljs-keyword">uint256</span> timeElapsed <span class="hljs-operator">=</span> <span class="hljs-built_in">block</span>.<span class="hljs-built_in">timestamp</span> <span class="hljs-operator">-</span> startTimestamp;
            _currentFee <span class="hljs-operator">=</span>
                timeElapsed <span class="hljs-operator">&gt;</span> <span class="hljs-number">495000</span> ? <span class="hljs-keyword">uint256</span>(MIN_FEE) : (<span class="hljs-keyword">uint256</span>(START_FEE) <span class="hljs-operator">-</span> (timeElapsed <span class="hljs-operator">*</span> decayRate)) <span class="hljs-operator">/</span> <span class="hljs-number">10</span>;
        }

        <span class="hljs-comment">// to override the LP fee, its 2nd bit must be set for the override to apply</span>
        <span class="hljs-keyword">uint256</span> overrideFee <span class="hljs-operator">=</span> _currentFee <span class="hljs-operator">|</span> <span class="hljs-keyword">uint256</span>(LPFeeLibrary.OVERRIDE_FEE_FLAG);
        <span class="hljs-keyword">return</span> (BaseHook.beforeSwap.<span class="hljs-built_in">selector</span>, BeforeSwapDeltaLibrary.ZERO_DELTA, <span class="hljs-keyword">uint24</span>(overrideFee));
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterInitialize</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span> key, <span class="hljs-keyword">uint160</span>, <span class="hljs-keyword">int24</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)
    </span>{
        poolManager.updateDynamicLPFee(key, <span class="hljs-keyword">uint24</span>(START_FEE));
        <span class="hljs-keyword">return</span> BaseHook.afterInitialize.<span class="hljs-built_in">selector</span>;
    }

    <span class="hljs-comment">/// @dev this example hook contract does not implement any hooks</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">true</span>,
            beforeAddLiquidity: <span class="hljs-literal">false</span>,
            afterAddLiquidity: <span class="hljs-literal">false</span>,
            beforeRemoveLiquidity: <span class="hljs-literal">false</span>,
            afterRemoveLiquidity: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">true</span>,
            afterSwap: <span class="hljs-literal">false</span>,
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>,
            beforeSwapReturnDelta: <span class="hljs-literal">false</span>,
            afterSwapReturnDelta: <span class="hljs-literal">false</span>,
            afterAddLiquidityReturnDelta: <span class="hljs-literal">false</span>,
            afterRemoveLiquidityReturnDelta: <span class="hljs-literal">false</span>
        });
    }
}
</code></pre>`

export default html

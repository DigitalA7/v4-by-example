// metadata
export const version = "0.8.20"
export const title = "Access msg.sender within a Hook"
export const description = "Access msg.sender within a hook"

export const keywords = [
    "hook",
    "hooks",
    "msg.sender",
    "msgsender",
    "sender",
]

export const codes = [
    {
        fileName: "MsgSenderHookData.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4xOTsKCmltcG9ydCB7QmFzZUhvb2t9IGZyb20gInY0LXBlcmlwaGVyeS9CYXNlSG9vay5zb2wiOwoKaW1wb3J0IHtIb29rc30gZnJvbSAidjQtY29yZS9zcmMvbGlicmFyaWVzL0hvb2tzLnNvbCI7CmltcG9ydCB7SVBvb2xNYW5hZ2VyfSBmcm9tICJ2NC1jb3JlL3NyYy9pbnRlcmZhY2VzL0lQb29sTWFuYWdlci5zb2wiOwppbXBvcnQge1Bvb2xLZXl9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL1Bvb2xLZXkuc29sIjsKaW1wb3J0IHtQb29sSWQsIFBvb2xJZExpYnJhcnl9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL1Bvb2xJZC5zb2wiOwppbXBvcnQge0JhbGFuY2VEZWx0YX0gZnJvbSAidjQtY29yZS9zcmMvdHlwZXMvQmFsYW5jZURlbHRhLnNvbCI7CmltcG9ydCB7QmVmb3JlU3dhcERlbHRhLCBCZWZvcmVTd2FwRGVsdGFMaWJyYXJ5fSBmcm9tICJ2NC1jb3JlL3NyYy90eXBlcy9CZWZvcmVTd2FwRGVsdGEuc29sIjsKCmNvbnRyYWN0IE1zZ1NlbmRlckhvb2tEYXRhIGlzIEJhc2VIb29rIHsKICAgIHVzaW5nIFBvb2xJZExpYnJhcnkgZm9yIFBvb2xLZXk7CgogICAgbWFwcGluZyhhZGRyZXNzIHVzZXIgPT4gYm9vbCBhbGxvd2VkKSBwdWJsaWMgYWxsb3dlZFVzZXJzOwoKICAgIGNvbnN0cnVjdG9yKElQb29sTWFuYWdlciBfcG9vbE1hbmFnZXIpIEJhc2VIb29rKF9wb29sTWFuYWdlcikge30KCiAgICBmdW5jdGlvbiBiZWZvcmVTd2FwKGFkZHJlc3MsIFBvb2xLZXkgY2FsbGRhdGEga2V5LCBJUG9vbE1hbmFnZXIuU3dhcFBhcmFtcyBjYWxsZGF0YSwgYnl0ZXMgY2FsbGRhdGEgaG9va0RhdGEpCiAgICAgICAgZXh0ZXJuYWwKICAgICAgICBvdmVycmlkZQogICAgICAgIHJldHVybnMgKGJ5dGVzNCwgQmVmb3JlU3dhcERlbHRhLCB1aW50MjQpCiAgICB7CiAgICAgICAgLy8gLS0tIFJlYWQgdGhlIHVzZXIncyBhZGRyZXNzIC0tLSAvLwogICAgICAgIGFkZHJlc3MgdXNlciA9IGFiaS5kZWNvZGUoaG9va0RhdGEsIChhZGRyZXNzKSk7CiAgICAgICAgcmVxdWlyZShhbGxvd2VkVXNlcnNbdXNlcl0sICJNc2dTZW5kZXJIb29rRGF0YTogVXNlciBub3QgYWxsb3dlZCIpOwogICAgICAgIHJldHVybiAoQmFzZUhvb2suYmVmb3JlU3dhcC5zZWxlY3RvciwgQmVmb3JlU3dhcERlbHRhTGlicmFyeS5aRVJPX0RFTFRBLCAwKTsKICAgIH0KCiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gZm9yIGRlbW9uc3RyYXRpb24KICAgIGZ1bmN0aW9uIHNldEFsbG93ZWRVc2VyKGFkZHJlc3MgdXNlciwgYm9vbCBhbGxvd2VkKSBleHRlcm5hbCB7CiAgICAgICAgYWxsb3dlZFVzZXJzW3VzZXJdID0gYWxsb3dlZDsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRIb29rUGVybWlzc2lvbnMoKSBwdWJsaWMgcHVyZSBvdmVycmlkZSByZXR1cm5zIChIb29rcy5QZXJtaXNzaW9ucyBtZW1vcnkpIHsKICAgICAgICByZXR1cm4gSG9va3MuUGVybWlzc2lvbnMoewogICAgICAgICAgICBiZWZvcmVJbml0aWFsaXplOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJJbml0aWFsaXplOiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlQWRkTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlUmVtb3ZlTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJBZGRMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBhZnRlclJlbW92ZUxpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZVN3YXA6IHRydWUsCiAgICAgICAgICAgIGFmdGVyU3dhcDogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZURvbmF0ZTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyRG9uYXRlOiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlU3dhcFJldHVybkRlbHRhOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJTd2FwUmV0dXJuRGVsdGE6IGZhbHNlLAogICAgICAgICAgICBhZnRlckFkZExpcXVpZGl0eVJldHVybkRlbHRhOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJSZW1vdmVMaXF1aWRpdHlSZXR1cm5EZWx0YTogZmFsc2UKICAgICAgICB9KTsKICAgIH0KfQo=",
    },
    {
        fileName: "PoolManagerLock.sol",
        code: "Ly8gVXNlciBkaXJlY3RseSBsb2NrcyBvbiB0aGUgUG9vbE1hbmFnZXIKLy8gLSBwb29sTWFuYWdlci5nZXRMb2NrKDEpIHJldHVybnMgYWxpY2UncyBhZGRyZXNzCnZtLnByYW5rKGFsaWNlKTsKbWFuYWdlci5sb2NrKAogICAgYWRkcmVzcyhzd2FwUm91dGVyKSwKICAgIGFiaS5lbmNvZGUoUG9vbFN3YXBUZXN0LkNhbGxiYWNrRGF0YShhZGRyZXNzKHRoaXMpLCB0ZXN0U2V0dGluZ3MsIGtleSwgcGFyYW1zLCBob29rRGF0YSkpCik7",
    },
    {
        fileName: "PoolSwapTestHookData.sol",
        code: "SVBvb2xNYW5hZ2VyLlN3YXBQYXJhbXMgbWVtb3J5IHBhcmFtcyA9IC4uLjsKClBvb2xTd2FwVGVzdC5UZXN0U2V0dGluZ3MgbWVtb3J5IHRlc3RTZXR0aW5ncyA9IC4uLjsKCi8vIHByb3ZpZGUgdGhlIHVzZXIncyBhZGRyZXNzIGFzIGhvb2tEYXRhIHRvIGJlIGF2YWlsYWJsZSBpbnNpZGUgdGhlIGhvb2sgZnVuY3Rpb24KYnl0ZXMgbWVtb3J5IGhvb2tEYXRhID0gYWJpLmVuY29kZShhZGRyZXNzKFVTRVJfQUREUkVTUykpOwpzd2FwUm91dGVyLnN3YXAoa2V5LCBwYXJhbXMsIHRlc3RTZXR0aW5ncywgaG9va0RhdGEpOw==",
    },
]

const html = `<h3>Use-cases</h3>
<p>Accessing the user&#39;s address inside a hook provides a lot of expressivity such as:</p>
<ul>
<li>Volume-based discounts</li>
<li>Permissioned / compliant access</li>
</ul>
<h3>Using <code>hookData</code></h3>
<p>Callers (EOAs / contracts / multisigs) of periphery contracts (<code>PoolSwapTest</code>) can provide the user&#39;s address as the <code>hookData</code> argument</p>
<ul>
<li><p>Tradeoff: Routing, quoters, and user interfaces will need to be aware of this non-standard parameter. <code>hookData</code> breaks generic/conventional paths</p>
<ul>
<li>Additionally, it&#39;s possible to spoof the <code>msg.sender</code> by manually providing an arbitrary address</li>
</ul>
</li>
</ul>
<hr>
<h2><code>bytes memory hookData</code></h2>
<p>Provide the user&#39;s address to the <code>PoolSwapTest</code></p>
<pre><code class="language-solidity">IPoolManager.SwapParams <span class="hljs-keyword">memory</span> params <span class="hljs-operator">=</span> ...;

PoolSwapTest.TestSettings <span class="hljs-keyword">memory</span> testSettings <span class="hljs-operator">=</span> ...;

<span class="hljs-comment">// provide the user&#x27;s address as hookData to be available inside the hook function</span>
<span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span> hookData <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(<span class="hljs-keyword">address</span>(USER_ADDRESS));
swapRouter.swap(key, params, testSettings, hookData);
</code></pre><p>Decode the <code>hookData</code> into an <code>address</code> type</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.19;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-periphery/BaseHook.sol"</span>;

<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolId</span>, <span class="hljs-title">PoolIdLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/PoolId.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">BalanceDelta</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/BalanceDelta.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">BeforeSwapDelta</span>, <span class="hljs-title">BeforeSwapDeltaLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/BeforeSwapDelta.sol"</span>;

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">MsgSenderHookData</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">PoolIdLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">PoolKey</span>;

    <span class="hljs-keyword">mapping</span>(<span class="hljs-keyword">address</span> user <span class="hljs-operator">=</span><span class="hljs-operator">&gt;</span> <span class="hljs-keyword">bool</span> allowed) <span class="hljs-keyword">public</span> allowedUsers;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _poolManager</span>) <span class="hljs-title">BaseHook</span>(<span class="hljs-params">_poolManager</span>) </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeSwap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.SwapParams <span class="hljs-keyword">calldata</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span> hookData</span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span>, BeforeSwapDelta, <span class="hljs-keyword">uint24</span></span>)
    </span>{
        <span class="hljs-comment">// --- Read the user&#x27;s address --- //</span>
        <span class="hljs-keyword">address</span> user <span class="hljs-operator">=</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">decode</span>(hookData, (<span class="hljs-keyword">address</span>));
        <span class="hljs-built_in">require</span>(allowedUsers[user], <span class="hljs-string">"MsgSenderHookData: User not allowed"</span>);
        <span class="hljs-keyword">return</span> (BaseHook.beforeSwap.<span class="hljs-built_in">selector</span>, BeforeSwapDeltaLibrary.ZERO_DELTA, <span class="hljs-number">0</span>);
    }

    <span class="hljs-comment">// Helper function for demonstration</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setAllowedUser</span>(<span class="hljs-params"><span class="hljs-keyword">address</span> user, <span class="hljs-keyword">bool</span> allowed</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        allowedUsers[user] <span class="hljs-operator">=</span> allowed;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">false</span>,
            beforeAddLiquidity: <span class="hljs-literal">false</span>,
            beforeRemoveLiquidity: <span class="hljs-literal">false</span>,
            afterAddLiquidity: <span class="hljs-literal">false</span>,
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

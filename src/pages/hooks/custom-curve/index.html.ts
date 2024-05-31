// metadata
export const version = "0.8.20"
export const title = "Custom Curve"
export const description = "Replace v3 concentrated liquidity curve"

export const keywords = [
    "hook",
    "hooks",
    "noop",
    "no-op",
    "custom curve",
    "custom accounting",
]

export const codes = [
    {
        fileName: "CustomCurve.sol",
        code: "Ly8gU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IE1JVApwcmFnbWEgc29saWRpdHkgXjAuOC4yMDsKCmltcG9ydCB7QmFzZUhvb2t9IGZyb20gInY0LXBlcmlwaGVyeS9CYXNlSG9vay5zb2wiOwppbXBvcnQge0hvb2tzfSBmcm9tICJ2NC1jb3JlL3NyYy9saWJyYXJpZXMvSG9va3Muc29sIjsKaW1wb3J0IHtJUG9vbE1hbmFnZXJ9IGZyb20gInY0LWNvcmUvc3JjL2ludGVyZmFjZXMvSVBvb2xNYW5hZ2VyLnNvbCI7CmltcG9ydCB7UG9vbEtleX0gZnJvbSAidjQtY29yZS9zcmMvdHlwZXMvUG9vbEtleS5zb2wiOwppbXBvcnQge0N1cnJlbmN5LCBDdXJyZW5jeUxpYnJhcnl9IGZyb20gInY0LWNvcmUvc3JjL3R5cGVzL0N1cnJlbmN5LnNvbCI7CmltcG9ydCB7dG9CZWZvcmVTd2FwRGVsdGEsIEJlZm9yZVN3YXBEZWx0YX0gZnJvbSAidjQtY29yZS9zcmMvdHlwZXMvQmVmb3JlU3dhcERlbHRhLnNvbCI7CmltcG9ydCB7Q3VycmVuY3lTZXR0bGVUYWtlfSBmcm9tICJ2NC1jb3JlL3NyYy9saWJyYXJpZXMvQ3VycmVuY3lTZXR0bGVUYWtlLnNvbCI7CmltcG9ydCB7U2FmZUNhc3R9IGZyb20gInY0LWNvcmUvc3JjL2xpYnJhcmllcy9TYWZlQ2FzdC5zb2wiOwoKYWJzdHJhY3QgY29udHJhY3QgQ3VzdG9tQ3VydmVCYXNlIGlzIEJhc2VIb29rIHsKICAgIHVzaW5nIEN1cnJlbmN5TGlicmFyeSBmb3IgQ3VycmVuY3k7CiAgICB1c2luZyBDdXJyZW5jeVNldHRsZVRha2UgZm9yIEN1cnJlbmN5OwogICAgdXNpbmcgU2FmZUNhc3QgZm9yIHVpbnQyNTY7CgogICAgY29uc3RydWN0b3IoSVBvb2xNYW5hZ2VyIF9wb29sTWFuYWdlcikgQmFzZUhvb2soX3Bvb2xNYW5hZ2VyKSB7fQoKICAgIC8vLyBOT1RFOiBJbiB0aGUgaW5oZXJpdGluZyBjb250cmFjdCwgZGVmaW5lIGEgZnVuY3Rpb24gdG8gYWRkIGxpcXVpZGl0eS4uLgoKICAgIC8vLyBAbm90aWNlIFJldHVybnMgdGhlIGFtb3VudCBvZiBvdXRwdXQgdG9rZW5zIGZvciBhbiBleGFjdC1pbnB1dCBzd2FwCiAgICAvLy8gQHBhcmFtIGFtb3VudEluIHRoZSBhbW91bnQgb2YgaW5wdXQgdG9rZW5zCiAgICAvLy8gQHBhcmFtIGlucHV0IHRoZSBpbnB1dCB0b2tlbgogICAgLy8vIEBwYXJhbSBvdXRwdXQgdGhlIG91dHB1dCB0b2tlbgogICAgLy8vIEBwYXJhbSB6ZXJvRm9yT25lIHRydWUgaWYgdGhlIGlucHV0IHRva2VuIGlzIHRva2VuMAogICAgLy8vIEByZXR1cm4gYW1vdW50T3V0IHRoZSBhbW91bnQgb2Ygb3V0cHV0IHRva2VucwogICAgZnVuY3Rpb24gZ2V0QW1vdW50T3V0RnJvbUV4YWN0SW5wdXQodWludDI1NiBhbW91bnRJbiwgQ3VycmVuY3kgaW5wdXQsIEN1cnJlbmN5IG91dHB1dCwgYm9vbCB6ZXJvRm9yT25lKQogICAgICAgIGludGVybmFsCiAgICAgICAgdmlydHVhbAogICAgICAgIHJldHVybnMgKHVpbnQyNTYgYW1vdW50T3V0KTsKCiAgICAvLy8gQG5vdGljZSBSZXR1cm5zIHRoZSBhbW91bnQgb2YgaW5wdXQgdG9rZW5zIGZvciBhbiBleGFjdC1vdXRwdXQgc3dhcAogICAgLy8vIEBwYXJhbSBhbW91bnRPdXQgdGhlIGFtb3VudCBvZiBvdXRwdXQgdG9rZW5zIHRoZSB1c2VyIGV4cGVjdHMgdG8gcmVjZWl2ZQogICAgLy8vIEBwYXJhbSBpbnB1dCB0aGUgaW5wdXQgdG9rZW4KICAgIC8vLyBAcGFyYW0gb3V0cHV0IHRoZSBvdXRwdXQgdG9rZW4KICAgIC8vLyBAcGFyYW0gemVyb0Zvck9uZSB0cnVlIGlmIHRoZSBpbnB1dCB0b2tlbiBpcyB0b2tlbjAKICAgIC8vLyBAcmV0dXJuIGFtb3VudEluIHRoZSBhbW91bnQgb2YgaW5wdXQgdG9rZW5zIHJlcXVpcmVkIHRvIHByb2R1Y2UgYW1vdW50T3V0CiAgICBmdW5jdGlvbiBnZXRBbW91bnRJbkZvckV4YWN0T3V0cHV0KHVpbnQyNTYgYW1vdW50T3V0LCBDdXJyZW5jeSBpbnB1dCwgQ3VycmVuY3kgb3V0cHV0LCBib29sIHplcm9Gb3JPbmUpCiAgICAgICAgaW50ZXJuYWwKICAgICAgICB2aXJ0dWFsCiAgICAgICAgcmV0dXJucyAodWludDI1NiBhbW91bnRJbik7CgogICAgLy8vIEBkZXYgRmFjaWxpdGF0ZSBhIGN1c3RvbSBjdXJ2ZSB2aWEgYmVmb3JlU3dhcCArIHJldHVybiBkZWx0YQogICAgLy8vIEBkZXYgaW5wdXQgdG9rZW5zIGFyZSB0YWtlbiBmcm9tIHRoZSBQb29sTWFuYWdlciwgY3JlYXRpbmcgYSBkZWJ0IHBhaWQgYnkgdGhlIHN3YXBwZXIKICAgIC8vLyBAZGV2IG91dHB1dCB0YWtlbnMgYXJlIHRyYW5zZmVycmVkIGZyb20gdGhlIGhvb2sgdG8gdGhlIFBvb2xNYW5hZ2VyLCBjcmVhdGluZyBhIGNyZWRpdCBjbGFpbWVkIGJ5IHRoZSBzd2FwcGVyCiAgICBmdW5jdGlvbiBiZWZvcmVTd2FwKGFkZHJlc3MsIFBvb2xLZXkgY2FsbGRhdGEga2V5LCBJUG9vbE1hbmFnZXIuU3dhcFBhcmFtcyBjYWxsZGF0YSBwYXJhbXMsIGJ5dGVzIGNhbGxkYXRhKQogICAgICAgIGV4dGVybmFsCiAgICAgICAgb3ZlcnJpZGUKICAgICAgICByZXR1cm5zIChieXRlczQsIEJlZm9yZVN3YXBEZWx0YSwgdWludDI0KQogICAgewogICAgICAgIGJvb2wgZXhhY3RJbnB1dCA9IHBhcmFtcy5hbW91bnRTcGVjaWZpZWQgPCAwOwogICAgICAgIChDdXJyZW5jeSBzcGVjaWZpZWQsIEN1cnJlbmN5IHVuc3BlY2lmaWVkKSA9CiAgICAgICAgICAgIChwYXJhbXMuemVyb0Zvck9uZSA9PSBleGFjdElucHV0KSA/IChrZXkuY3VycmVuY3kwLCBrZXkuY3VycmVuY3kxKSA6IChrZXkuY3VycmVuY3kxLCBrZXkuY3VycmVuY3kwKTsKCiAgICAgICAgdWludDI1NiBzcGVjaWZpZWRBbW91bnQgPSBleGFjdElucHV0ID8gdWludDI1NigtcGFyYW1zLmFtb3VudFNwZWNpZmllZCkgOiB1aW50MjU2KHBhcmFtcy5hbW91bnRTcGVjaWZpZWQpOwogICAgICAgIHVpbnQyNTYgdW5zcGVjaWZpZWRBbW91bnQ7CiAgICAgICAgQmVmb3JlU3dhcERlbHRhIHJldHVybkRlbHRhOwogICAgICAgIGlmIChleGFjdElucHV0KSB7CiAgICAgICAgICAgIC8vIGluIGV4YWN0LWlucHV0IHN3YXBzLCB0aGUgc3BlY2lmaWVkIHRva2VuIGlzIGEgZGVidCB0aGF0IGdldHMgcGFpZCBkb3duIGJ5IHRoZSBzd2FwcGVyCiAgICAgICAgICAgIC8vIHRoZSB1bnNwZWNpZmllZCB0b2tlbiBpcyBjcmVkaXRlZCB0byB0aGUgUG9vbE1hbmFnZXIsIHRoYXQgaXMgY2xhaW1lZCBieSB0aGUgc3dhcHBlcgogICAgICAgICAgICB1bnNwZWNpZmllZEFtb3VudCA9IGdldEFtb3VudE91dEZyb21FeGFjdElucHV0KHNwZWNpZmllZEFtb3VudCwgc3BlY2lmaWVkLCB1bnNwZWNpZmllZCwgcGFyYW1zLnplcm9Gb3JPbmUpOwogICAgICAgICAgICBzcGVjaWZpZWQudGFrZShwb29sTWFuYWdlciwgYWRkcmVzcyh0aGlzKSwgc3BlY2lmaWVkQW1vdW50LCB0cnVlKTsKICAgICAgICAgICAgdW5zcGVjaWZpZWQuc2V0dGxlKHBvb2xNYW5hZ2VyLCBhZGRyZXNzKHRoaXMpLCB1bnNwZWNpZmllZEFtb3VudCwgdHJ1ZSk7CgogICAgICAgICAgICByZXR1cm5EZWx0YSA9IHRvQmVmb3JlU3dhcERlbHRhKHNwZWNpZmllZEFtb3VudC50b0ludDEyOCgpLCAtdW5zcGVjaWZpZWRBbW91bnQudG9JbnQxMjgoKSk7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgLy8gZXhhY3RPdXRwdXQKICAgICAgICAgICAgLy8gaW4gZXhhY3Qtb3V0cHV0IHN3YXBzLCB0aGUgdW5zcGVjaWZpZWQgdG9rZW4gaXMgYSBkZWJ0IHRoYXQgZ2V0cyBwYWlkIGRvd24gYnkgdGhlIHN3YXBwZXIKICAgICAgICAgICAgLy8gdGhlIHNwZWNpZmllZCB0b2tlbiBpcyBjcmVkaXRlZCB0byB0aGUgUG9vbE1hbmFnZXIsIHRoYXQgaXMgY2xhaW1lZCBieSB0aGUgc3dhcHBlcgogICAgICAgICAgICB1bnNwZWNpZmllZEFtb3VudCA9IGdldEFtb3VudEluRm9yRXhhY3RPdXRwdXQoc3BlY2lmaWVkQW1vdW50LCB1bnNwZWNpZmllZCwgc3BlY2lmaWVkLCBwYXJhbXMuemVyb0Zvck9uZSk7CiAgICAgICAgICAgIHVuc3BlY2lmaWVkLnRha2UocG9vbE1hbmFnZXIsIGFkZHJlc3ModGhpcyksIHVuc3BlY2lmaWVkQW1vdW50LCB0cnVlKTsKICAgICAgICAgICAgc3BlY2lmaWVkLnNldHRsZShwb29sTWFuYWdlciwgYWRkcmVzcyh0aGlzKSwgc3BlY2lmaWVkQW1vdW50LCB0cnVlKTsKCiAgICAgICAgICAgIHJldHVybkRlbHRhID0gdG9CZWZvcmVTd2FwRGVsdGEoLXNwZWNpZmllZEFtb3VudC50b0ludDEyOCgpLCB1bnNwZWNpZmllZEFtb3VudC50b0ludDEyOCgpKTsKICAgICAgICB9CgogICAgICAgIHJldHVybiAoQmFzZUhvb2suYmVmb3JlU3dhcC5zZWxlY3RvciwgcmV0dXJuRGVsdGEsIDApOwogICAgfQoKICAgIC8vLyBAbm90aWNlIE5vIGxpcXVpZGl0eSB3aWxsIGJlIG1hbmFnZWQgYnkgdjQgUG9vbE1hbmFnZXIKICAgIGZ1bmN0aW9uIGJlZm9yZUFkZExpcXVpZGl0eShhZGRyZXNzLCBQb29sS2V5IGNhbGxkYXRhLCBJUG9vbE1hbmFnZXIuTW9kaWZ5TGlxdWlkaXR5UGFyYW1zIGNhbGxkYXRhLCBieXRlcyBjYWxsZGF0YSkKICAgICAgICBleHRlcm5hbAogICAgICAgIHB1cmUKICAgICAgICBvdmVycmlkZQogICAgICAgIHJldHVybnMgKGJ5dGVzNCkKICAgIHsKICAgICAgICByZXZlcnQoIk5vIHY0IExpcXVpZGl0eSBhbGxvd2VkIik7CiAgICB9CgogICAgZnVuY3Rpb24gZ2V0SG9va1Blcm1pc3Npb25zKCkgcHVibGljIHB1cmUgb3ZlcnJpZGUgcmV0dXJucyAoSG9va3MuUGVybWlzc2lvbnMgbWVtb3J5KSB7CiAgICAgICAgcmV0dXJuIEhvb2tzLlBlcm1pc3Npb25zKHsKICAgICAgICAgICAgYmVmb3JlSW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVySW5pdGlhbGl6ZTogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZUFkZExpcXVpZGl0eTogdHJ1ZSwgLy8gLS0gZGlzYWJsZSB2NCBsaXF1aWRpdHkgd2l0aCBhIHJldmVydCAtLSAvLwogICAgICAgICAgICBiZWZvcmVSZW1vdmVMaXF1aWRpdHk6IGZhbHNlLAogICAgICAgICAgICBhZnRlckFkZExpcXVpZGl0eTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyUmVtb3ZlTGlxdWlkaXR5OiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlU3dhcDogdHJ1ZSwgLy8gLS0gQ3VzdG9tIEN1cnZlIEhhbmRsZXIgLS0gIC8vCiAgICAgICAgICAgIGFmdGVyU3dhcDogZmFsc2UsCiAgICAgICAgICAgIGJlZm9yZURvbmF0ZTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyRG9uYXRlOiBmYWxzZSwKICAgICAgICAgICAgYmVmb3JlU3dhcFJldHVybkRlbHRhOiB0cnVlLCAvLyAtLSBFbmFibGVzIEN1c3RvbSBDdXJ2ZXMgLS0gIC8vCiAgICAgICAgICAgIGFmdGVyU3dhcFJldHVybkRlbHRhOiBmYWxzZSwKICAgICAgICAgICAgYWZ0ZXJBZGRMaXF1aWRpdHlSZXR1cm5EZWx0YTogZmFsc2UsCiAgICAgICAgICAgIGFmdGVyUmVtb3ZlTGlxdWlkaXR5UmV0dXJuRGVsdGE6IGZhbHNlCiAgICAgICAgfSk7CiAgICB9Cn0KCmNvbnRyYWN0IENvbnN0YW50U3VtQ3VydmUgaXMgQ3VzdG9tQ3VydmVCYXNlIHsKICAgIHVzaW5nIEN1cnJlbmN5U2V0dGxlVGFrZSBmb3IgQ3VycmVuY3k7CgogICAgY29uc3RydWN0b3IoSVBvb2xNYW5hZ2VyIF9tYW5hZ2VyKSBDdXN0b21DdXJ2ZUJhc2UoX21hbmFnZXIpIHt9CgogICAgZnVuY3Rpb24gZ2V0QW1vdW50T3V0RnJvbUV4YWN0SW5wdXQodWludDI1NiBhbW91bnRJbiwgQ3VycmVuY3ksIEN1cnJlbmN5LCBib29sKQogICAgICAgIGludGVybmFsCiAgICAgICAgcHVyZQogICAgICAgIG92ZXJyaWRlCiAgICAgICAgcmV0dXJucyAodWludDI1NiBhbW91bnRPdXQpCiAgICB7CiAgICAgICAgLy8gaW4gY29uc3RhbnQtc3VtIGN1cnZlLCB0b2tlbnMgdHJhZGUgZXhhY3RseSAxOjEKICAgICAgICBhbW91bnRPdXQgPSBhbW91bnRJbjsKICAgIH0KCiAgICBmdW5jdGlvbiBnZXRBbW91bnRJbkZvckV4YWN0T3V0cHV0KHVpbnQyNTYgYW1vdW50T3V0LCBDdXJyZW5jeSwgQ3VycmVuY3ksIGJvb2wpCiAgICAgICAgaW50ZXJuYWwKICAgICAgICBwdXJlCiAgICAgICAgb3ZlcnJpZGUKICAgICAgICByZXR1cm5zICh1aW50MjU2IGFtb3VudEluKQogICAgewogICAgICAgIC8vIGluIGNvbnN0YW50LXN1bSBjdXJ2ZSwgdG9rZW5zIHRyYWRlIGV4YWN0bHkgMToxCiAgICAgICAgYW1vdW50SW4gPSBhbW91bnRPdXQ7CiAgICB9CgogICAgLy8vIEBub3RpY2UgQWRkIGxpcXVpZGl0eSB0aHJvdWdoIHRoZSBob29rCiAgICAvLy8gQGRldiBOb3QgcHJvZHVjdGlvbi1yZWFkeSwgb25seSBzZXJ2ZXMgYW4gZXhhbXBsZSBvZiBob29rLW93bmVkIGxpcXVpZGl0eQogICAgZnVuY3Rpb24gYWRkTGlxdWlkaXR5KFBvb2xLZXkgY2FsbGRhdGEga2V5LCB1aW50MjU2IGFtb3VudDAsIHVpbnQyNTYgYW1vdW50MSkgZXh0ZXJuYWwgewogICAgICAgIHBvb2xNYW5hZ2VyLnVubG9jaygKICAgICAgICAgICAgYWJpLmVuY29kZUNhbGwodGhpcy5oYW5kbGVBZGRMaXF1aWRpdHksIChrZXkuY3VycmVuY3kwLCBrZXkuY3VycmVuY3kxLCBhbW91bnQwLCBhbW91bnQxLCBtc2cuc2VuZGVyKSkKICAgICAgICApOwogICAgfQoKICAgIC8vLyBAZGV2IEhhbmRsZSBsaXF1aWRpdHkgYWRkaXRpb24gYnkgdGFraW5nIHRva2VucyBmcm9tIHRoZSBzZW5kZXIgYW5kIGNsYWltaW5nIEVSQzY5MDkgdG8gdGhlIGhvb2sgYWRkcmVzcwogICAgZnVuY3Rpb24gaGFuZGxlQWRkTGlxdWlkaXR5KAogICAgICAgIEN1cnJlbmN5IGN1cnJlbmN5MCwKICAgICAgICBDdXJyZW5jeSBjdXJyZW5jeTEsCiAgICAgICAgdWludDI1NiBhbW91bnQwLAogICAgICAgIHVpbnQyNTYgYW1vdW50MSwKICAgICAgICBhZGRyZXNzIHNlbmRlcgogICAgKSBleHRlcm5hbCBzZWxmT25seSByZXR1cm5zIChieXRlcyBtZW1vcnkpIHsKICAgICAgICBjdXJyZW5jeTAuc2V0dGxlKHBvb2xNYW5hZ2VyLCBzZW5kZXIsIGFtb3VudDAsIGZhbHNlKTsKICAgICAgICBjdXJyZW5jeTAudGFrZShwb29sTWFuYWdlciwgYWRkcmVzcyh0aGlzKSwgYW1vdW50MCwgdHJ1ZSk7CgogICAgICAgIGN1cnJlbmN5MS5zZXR0bGUocG9vbE1hbmFnZXIsIHNlbmRlciwgYW1vdW50MSwgZmFsc2UpOwogICAgICAgIGN1cnJlbmN5MS50YWtlKHBvb2xNYW5hZ2VyLCBhZGRyZXNzKHRoaXMpLCBhbW91bnQxLCB0cnVlKTsKCiAgICAgICAgcmV0dXJuIGFiaS5lbmNvZGUoYW1vdW50MCwgYW1vdW50MSk7CiAgICB9Cn0K",
    },
]

const html = `<ul>
<li>Custom Curve on Uniswap v4</li>
</ul>
<p>Through custom accounting, developers can opt-out of the v3-concentrated-liquidity and implement their own curve. Custom curves are highly flexibile and possibilities include:</p>
<ul>
<li>constant-product curves (<a href="https://github.com/hensha256/v2-on-v4"><em>xy=k</em></a>, Uniswap v2)</li>
<li><a href="https://docs.curve.fi/pdf/stableswap-paper.pdf">StableSwap</a></li>
<li><a href="https://github.com/euler-mab/LAMMbert/blob/main/LAMMbert.pdf">LAMMbert</a></li>
<li>asymmetric curves</li>
<li>dynamic curves</li>
<li>step-wise curves</li>
</ul>
<hr>
<p>Custom curves are enabled through <code>Hooks.BEFORE_SWAP_FLAG</code> and <code>Hooks.BEFORE_SWAP_RETURNS_DELTA_FLAG</code></p>
<p><code>beforeSwap</code> calls <code>.take()</code> to create a debt (an IOU to the PoolManager), which is paid for by the Swapper</p>
<p><code>beforeSwap</code> calls <code>.settle()</code> to transfer custodied tokens to the PoolManager. This creates a credit (an IOU <em>from</em> the PoolManager), which is claimed by Swapper</p>
<p>The delta returned by <code>beforeSwap</code> signals to the PoolManager that deltas created by the <em>hook address</em> should be applied to the <code>msg.sender</code>, the swap router, instead of the <em>hook address</em></p>
<h1>Example: Constant-Sum Curve</h1>
<p>The constant-sum curve trades tokens exactly 1:1 without slippage. <code>CustomCurveBase</code> is a reusable contract for implementing your own curves!</p>
<pre><code class="language-solidity"><span class="hljs-comment">// SPDX-License-Identifier: MIT</span>
<span class="hljs-meta"><span class="hljs-keyword">pragma</span> <span class="hljs-keyword">solidity</span> ^0.8.20;</span>

<span class="hljs-keyword">import</span> {<span class="hljs-title">BaseHook</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-periphery/BaseHook.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Hooks</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/Hooks.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">IPoolManager</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/interfaces/IPoolManager.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">PoolKey</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/PoolKey.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">Currency</span>, <span class="hljs-title">CurrencyLibrary</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/Currency.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">toBeforeSwapDelta</span>, <span class="hljs-title">BeforeSwapDelta</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/types/BeforeSwapDelta.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">CurrencySettleTake</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/CurrencySettleTake.sol"</span>;
<span class="hljs-keyword">import</span> {<span class="hljs-title">SafeCast</span>} <span class="hljs-title"><span class="hljs-keyword">from</span></span> <span class="hljs-string">"v4-core/src/libraries/SafeCast.sol"</span>;

<span class="hljs-keyword">abstract</span> <span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">CustomCurveBase</span> <span class="hljs-keyword">is</span> <span class="hljs-title">BaseHook</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">CurrencyLibrary</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;
    <span class="hljs-keyword">using</span> <span class="hljs-title">CurrencySettleTake</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;
    <span class="hljs-keyword">using</span> <span class="hljs-title">SafeCast</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title"><span class="hljs-keyword">uint256</span></span>;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _poolManager</span>) <span class="hljs-title">BaseHook</span>(<span class="hljs-params">_poolManager</span>) </span>{}

    <span class="hljs-comment">/// <span class="hljs-doctag">NOTE:</span> In the inheriting contract, define a function to add liquidity...</span>

    <span class="hljs-comment">/// @notice Returns the amount of output tokens for an exact-input swap</span>
    <span class="hljs-comment">/// @param amountIn the amount of input tokens</span>
    <span class="hljs-comment">/// @param input the input token</span>
    <span class="hljs-comment">/// @param output the output token</span>
    <span class="hljs-comment">/// @param zeroForOne true if the input token is token0</span>
    <span class="hljs-comment">/// @return amountOut the amount of output tokens</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getAmountOutFromExactInput</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountIn, Currency input, Currency output, <span class="hljs-keyword">bool</span> zeroForOne</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">virtual</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>)</span>;

    <span class="hljs-comment">/// @notice Returns the amount of input tokens for an exact-output swap</span>
    <span class="hljs-comment">/// @param amountOut the amount of output tokens the user expects to receive</span>
    <span class="hljs-comment">/// @param input the input token</span>
    <span class="hljs-comment">/// @param output the output token</span>
    <span class="hljs-comment">/// @param zeroForOne true if the input token is token0</span>
    <span class="hljs-comment">/// @return amountIn the amount of input tokens required to produce amountOut</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getAmountInForExactOutput</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut, Currency input, Currency output, <span class="hljs-keyword">bool</span> zeroForOne</span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">virtual</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountIn</span>)</span>;

    <span class="hljs-comment">/// @dev Facilitate a custom curve via beforeSwap + return delta</span>
    <span class="hljs-comment">/// @dev input tokens are taken from the PoolManager, creating a debt paid by the swapper</span>
    <span class="hljs-comment">/// @dev output takens are transferred from the hook to the PoolManager, creating a credit claimed by the swapper</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeSwap</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span> key, IPoolManager.SwapParams <span class="hljs-keyword">calldata</span> params, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span>, BeforeSwapDelta, <span class="hljs-keyword">uint24</span></span>)
    </span>{
        <span class="hljs-keyword">bool</span> exactInput <span class="hljs-operator">=</span> params.amountSpecified <span class="hljs-operator">&lt;</span> <span class="hljs-number">0</span>;
        (Currency specified, Currency unspecified) <span class="hljs-operator">=</span>
            (params.zeroForOne <span class="hljs-operator">=</span><span class="hljs-operator">=</span> exactInput) ? (key.currency0, key.currency1) : (key.currency1, key.currency0);

        <span class="hljs-keyword">uint256</span> specifiedAmount <span class="hljs-operator">=</span> exactInput ? <span class="hljs-keyword">uint256</span>(<span class="hljs-operator">-</span>params.amountSpecified) : <span class="hljs-keyword">uint256</span>(params.amountSpecified);
        <span class="hljs-keyword">uint256</span> unspecifiedAmount;
        BeforeSwapDelta returnDelta;
        <span class="hljs-keyword">if</span> (exactInput) {
            <span class="hljs-comment">// in exact-input swaps, the specified token is a debt that gets paid down by the swapper</span>
            <span class="hljs-comment">// the unspecified token is credited to the PoolManager, that is claimed by the swapper</span>
            unspecifiedAmount <span class="hljs-operator">=</span> getAmountOutFromExactInput(specifiedAmount, specified, unspecified, params.zeroForOne);
            specified.take(poolManager, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), specifiedAmount, <span class="hljs-literal">true</span>);
            unspecified.settle(poolManager, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), unspecifiedAmount, <span class="hljs-literal">true</span>);

            returnDelta <span class="hljs-operator">=</span> toBeforeSwapDelta(specifiedAmount.toInt128(), <span class="hljs-operator">-</span>unspecifiedAmount.toInt128());
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-comment">// exactOutput</span>
            <span class="hljs-comment">// in exact-output swaps, the unspecified token is a debt that gets paid down by the swapper</span>
            <span class="hljs-comment">// the specified token is credited to the PoolManager, that is claimed by the swapper</span>
            unspecifiedAmount <span class="hljs-operator">=</span> getAmountInForExactOutput(specifiedAmount, unspecified, specified, params.zeroForOne);
            unspecified.take(poolManager, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), unspecifiedAmount, <span class="hljs-literal">true</span>);
            specified.settle(poolManager, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), specifiedAmount, <span class="hljs-literal">true</span>);

            returnDelta <span class="hljs-operator">=</span> toBeforeSwapDelta(<span class="hljs-operator">-</span>specifiedAmount.toInt128(), unspecifiedAmount.toInt128());
        }

        <span class="hljs-keyword">return</span> (BaseHook.beforeSwap.<span class="hljs-built_in">selector</span>, returnDelta, <span class="hljs-number">0</span>);
    }

    <span class="hljs-comment">/// @notice No liquidity will be managed by v4 PoolManager</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">beforeAddLiquidity</span>(<span class="hljs-params"><span class="hljs-keyword">address</span>, PoolKey <span class="hljs-keyword">calldata</span>, IPoolManager.ModifyLiquidityParams <span class="hljs-keyword">calldata</span>, <span class="hljs-keyword">bytes</span> <span class="hljs-keyword">calldata</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">external</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes4</span></span>)
    </span>{
        <span class="hljs-keyword">revert</span>(<span class="hljs-string">"No v4 Liquidity allowed"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getHookPermissions</span>(<span class="hljs-params"></span>) <span class="hljs-title"><span class="hljs-keyword">public</span></span> <span class="hljs-title"><span class="hljs-keyword">pure</span></span> <span class="hljs-title"><span class="hljs-keyword">override</span></span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params">Hooks.Permissions <span class="hljs-keyword">memory</span></span>) </span>{
        <span class="hljs-keyword">return</span> Hooks.Permissions({
            beforeInitialize: <span class="hljs-literal">false</span>,
            afterInitialize: <span class="hljs-literal">false</span>,
            beforeAddLiquidity: <span class="hljs-literal">true</span>, <span class="hljs-comment">// -- disable v4 liquidity with a revert -- //</span>
            beforeRemoveLiquidity: <span class="hljs-literal">false</span>,
            afterAddLiquidity: <span class="hljs-literal">false</span>,
            afterRemoveLiquidity: <span class="hljs-literal">false</span>,
            beforeSwap: <span class="hljs-literal">true</span>, <span class="hljs-comment">// -- Custom Curve Handler --  //</span>
            afterSwap: <span class="hljs-literal">false</span>,
            beforeDonate: <span class="hljs-literal">false</span>,
            afterDonate: <span class="hljs-literal">false</span>,
            beforeSwapReturnDelta: <span class="hljs-literal">true</span>, <span class="hljs-comment">// -- Enables Custom Curves --  //</span>
            afterSwapReturnDelta: <span class="hljs-literal">false</span>,
            afterAddLiquidityReturnDelta: <span class="hljs-literal">false</span>,
            afterRemoveLiquidityReturnDelta: <span class="hljs-literal">false</span>
        });
    }
}

<span class="hljs-class"><span class="hljs-keyword">contract</span> <span class="hljs-title">ConstantSumCurve</span> <span class="hljs-keyword">is</span> <span class="hljs-title">CustomCurveBase</span> </span>{
    <span class="hljs-keyword">using</span> <span class="hljs-title">CurrencySettleTake</span> <span class="hljs-title"><span class="hljs-keyword">for</span></span> <span class="hljs-title">Currency</span>;

    <span class="hljs-function"><span class="hljs-keyword">constructor</span>(<span class="hljs-params">IPoolManager _manager</span>) <span class="hljs-title">CustomCurveBase</span>(<span class="hljs-params">_manager</span>) </span>{}

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getAmountOutFromExactInput</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountIn, Currency, Currency, <span class="hljs-keyword">bool</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut</span>)
    </span>{
        <span class="hljs-comment">// in constant-sum curve, tokens trade exactly 1:1</span>
        amountOut <span class="hljs-operator">=</span> amountIn;
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getAmountInForExactOutput</span>(<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountOut, Currency, Currency, <span class="hljs-keyword">bool</span></span>)
        <span class="hljs-title"><span class="hljs-keyword">internal</span></span>
        <span class="hljs-title"><span class="hljs-keyword">pure</span></span>
        <span class="hljs-title"><span class="hljs-keyword">override</span></span>
        <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">uint256</span> amountIn</span>)
    </span>{
        <span class="hljs-comment">// in constant-sum curve, tokens trade exactly 1:1</span>
        amountIn <span class="hljs-operator">=</span> amountOut;
    }

    <span class="hljs-comment">/// @notice Add liquidity through the hook</span>
    <span class="hljs-comment">/// @dev Not production-ready, only serves an example of hook-owned liquidity</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addLiquidity</span>(<span class="hljs-params">PoolKey <span class="hljs-keyword">calldata</span> key, <span class="hljs-keyword">uint256</span> amount0, <span class="hljs-keyword">uint256</span> amount1</span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> </span>{
        poolManager.unlock(
            <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encodeCall</span>(<span class="hljs-built_in">this</span>.handleAddLiquidity, (key.currency0, key.currency1, amount0, amount1, <span class="hljs-built_in">msg</span>.<span class="hljs-built_in">sender</span>))
        );
    }

    <span class="hljs-comment">/// @dev Handle liquidity addition by taking tokens from the sender and claiming ERC6909 to the hook address</span>
    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">handleAddLiquidity</span>(<span class="hljs-params">
        Currency currency0,
        Currency currency1,
        <span class="hljs-keyword">uint256</span> amount0,
        <span class="hljs-keyword">uint256</span> amount1,
        <span class="hljs-keyword">address</span> sender
    </span>) <span class="hljs-title"><span class="hljs-keyword">external</span></span> <span class="hljs-title">selfOnly</span> <span class="hljs-title"><span class="hljs-keyword">returns</span></span> (<span class="hljs-params"><span class="hljs-keyword">bytes</span> <span class="hljs-keyword">memory</span></span>) </span>{
        currency0.settle(poolManager, sender, amount0, <span class="hljs-literal">false</span>);
        currency0.take(poolManager, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount0, <span class="hljs-literal">true</span>);

        currency1.settle(poolManager, sender, amount1, <span class="hljs-literal">false</span>);
        currency1.take(poolManager, <span class="hljs-keyword">address</span>(<span class="hljs-built_in">this</span>), amount1, <span class="hljs-literal">true</span>);

        <span class="hljs-keyword">return</span> <span class="hljs-built_in">abi</span>.<span class="hljs-built_in">encode</span>(amount0, amount1);
    }
}
</code></pre>`

export default html

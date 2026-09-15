# 0-Sky macOS daemons

> Authorized use only. Apple Security Research Devices only.

These are the three per-device macOS LaunchAgent definitions required by 0-Sky:

- exact-UDID usbmux/iproxy forwarding;
- the protected CrypStore queue worker; and
- the native C device-bridge supervisor.

The `.plist.in` files are sanitized templates. They contain no device UDID, private-key
path, pairing token, or machine-specific path. Do not load them directly. Run the
compiled `0sky` release, which verifies the connected SRD and renders exact-UDID
LaunchAgents under `~/Library/LaunchAgents`.

The worker is a compressed/keyed Python 3.12 bytecode loader. The bridge supervisor
is a stripped arm64 Mach-O executable. Python dependencies and support assets remain
embedded in the main `0sky` release.

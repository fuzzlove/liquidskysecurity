# 0-sky JB - @liquidsky - Joseph McPeters

> **Authorized use only, not for illegal use. Jailbreaking may void Apple
> warranty.**

Proprietary LiquidSky research build for authorized Apple Security Research
Devices only.

Target iOS: **17–27**

Donate: <https://account.venmo.com/u/Joseph-McPeters>

Run `./0sky --help` for options. The default display is a compact percentage
flow with a LiquidSky ASCII launch banner. Set `NO_COLOR=1` for plain ASCII.

```sh
./0sky --check
./0sky
```

The native program contains its Python runtime dependencies, macOS requirements
checker, daemon/bridge helpers, and all required installation images in its
compressed and obfuscated embedded payload. No separate DMG or online Python
package download is required. The normal workflow checks or repairs the macOS
companion as required.

Readable macOS orchestration source is not shipped in the extracted runtime:
it is replaced during packaging by compressed, keyed Python 3.12 bytecode
loaders and covered by regenerated integrity manifests.

The default run verifies the core secure-access environment and then installs
or verifies the bundled remote-display, secure-storage, research-app, and
file-management components. Pass `--skip-components` for the core environment
only. Default output intentionally exposes only high-level progress.

This executable is intended only for an authorized Apple Security Research
Device. Workflow failures use E130-E138; read the preceding detailed message to
identify the missing dependency, target-selection, pairing, or install issue.

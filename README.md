# pebble-katerwatch

A Pebble Alloy project — embedded JavaScript on the watch, powered by Moddable
XS, alongside C.

## Building & running

With [Task](https://taskfile.dev) installed:

```sh
task debug                            # build and install on the emery emulator
task nuke                             # kill, clean, and wipe emulator state
```

Or run the Pebble CLI directly:

```sh
pebble build                          # build for all targetPlatforms
pebble install --emulator emery       # install on the emery emulator
pebble install --phone <ip>           # install to a paired phone
```

Install Task: `brew install go-task/tap/go-task` (see the
[installation guide](https://taskfile.dev/installation/) for other platforms).

## Target platforms

Alloy targets the modern Pebble hardware: **emery** (Pebble Time 2) and
**gabbro** (Pebble Round 2). Other platforms are currently not supported.

## Project layout

```
src/c/mdbl.c                   C glue around the Moddable runtime
src/embeddedjs/main.js         JavaScript that runs on the watch
src/embeddedjs/manifest.json   Moddable manifest
src/pkjs/index.js              PebbleKit JS (phone-side) code
package.json                   Project metadata (UUID, platforms, resources)
Taskfile.yml                   CLI tasks (e.g. `task debug`, `task nuke`)
wscript                        Build rules — usually no need to edit
```

## Documentation

Full SDK docs and tutorials: <https://developer.repebble.com>

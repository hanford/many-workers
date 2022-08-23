Running into an error trying to run multiple workers at once:

```
❯ pnpm dev

> proxy@1.0.0 dev /Users/hanford/dev/many-workers
> miniflare

[mf:wrn] Mounts are experimental. There may be breaking changes in the future.
[mf:inf:api] Worker reloaded! (164B)
[mf:err] MiniflareCoreError [ERR_MOUNT]: Error mounting "site"
    at EventTarget.#init (/Users/hanford/dev/many-workers/node_modules/.pnpm/@miniflare+core@2.7.1/node_modules/@miniflare/core/src/index.ts:583:19)
    at EventTarget.getPlugins (/Users/hanford/dev/many-workers/node_modules/.pnpm/@miniflare+core@2.7.1/node_modules/@miniflare/core/src/index.ts:994:5)
    at createServer (/Users/hanford/dev/many-workers/node_modules/.pnpm/@miniflare+http-server@2.7.1/node_modules/@miniflare/http-server/src/index.ts:354:19)
    at startServer (/Users/hanford/dev/many-workers/node_modules/.pnpm/@miniflare+http-server@2.7.1/node_modules/@miniflare/http-server/src/index.ts:455:18)
    at main (/Users/hanford/dev/many-workers/node_modules/.pnpm/miniflare@2.7.1/node_modules/miniflare/src/cli.ts:110:7)
[mf:err] Cause: MiniflareCoreError [ERR_NO_SCRIPT]: No script defined, either:
- Pass it as a positional argument, if you're using the CLI
    $ miniflare dist/worker.js
- Set the script or scriptPath option, if you're using the API
    new Miniflare({ scriptPath: "dist/worker.js" })
- Set main in package.json
    { "main": "dist/worker.js" }

    at throwNoScriptError (/Users/hanford/dev/many-workers/node_modules/.pnpm/@miniflare+core@2.7.1/node_modules/@miniflare/core/src/index.ts:213:9)
    at EventTarget.#init (/Users/hanford/dev/many-workers/node_modules/.pnpm/@miniflare+core@2.7.1/node_modules/@miniflare/core/src/index.ts:611:7)
    at EventTarget.getPlugins (/Users/hanford/dev/many-workers/node_modules/.pnpm/@miniflare+core@2.7.1/node_modules/@miniflare/core/src/index.ts:994:5)
    at EventTarget.#init (/Users/hanford/dev/many-workers/node_modules/.pnpm/@miniflare+core@2.7.1/node_modules/@miniflare/core/src/index.ts:580:13)
    at EventTarget.getPlugins (/Users/hanford/dev/many-workers/node_modules/.pnpm/@miniflare+core@2.7.1/node_modules/@miniflare/core/src/index.ts:994:5)
    at createServer (/Users/hanford/dev/many-workers/node_modules/.pnpm/@miniflare+http-server@2.7.1/node_modules/@miniflare/http-server/src/index.ts:354:19)
    at startServer (/Users/hanford/dev/many-workers/node_modules/.pnpm/@miniflare+http-server@2.7.1/node_modules/@miniflare/http-server/src/index.ts:455:18)
    at main (/Users/hanford/dev/many-workers/node_modules/.pnpm/miniflare@2.7.1/node_modules/miniflare/src/cli.ts:110:7)
MiniflareCoreError [ERR_MOUNT]: Error mounting "site"
    at EventTarget.#init (/Users/hanford/dev/many-workers/node_modules/.pnpm/@miniflare+core@2.7.1/node_modules/@miniflare/core/src/index.ts:583:19)
    at EventTarget.getPlugins (/Users/hanford/dev/many-workers/node_modules/.pnpm/@miniflare+core@2.7.1/node_modules/@miniflare/core/src/index.ts:994:5)
    at createServer (/Users/hanford/dev/many-workers/node_modules/.pnpm/@miniflare+http-server@2.7.1/node_modules/@miniflare/http-server/src/index.ts:354:19)
    at startServer (/Users/hanford/dev/many-workers/node_modules/.pnpm/@miniflare+http-server@2.7.1/node_modules/@miniflare/http-server/src/index.ts:455:18)
    at main (/Users/hanford/dev/many-workers/node_modules/.pnpm/miniflare@2.7.1/node_modules/miniflare/src/cli.ts:110:7)
 ELIFECYCLE  Command failed with exit code 1.
```

To repro, clone the repo and run the following:

```
$ pnpm install
$ pnpm dev
```

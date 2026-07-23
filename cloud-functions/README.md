# EdgeOne Makers Cloud Functions migration package

`api/[[default]].js` is a fetch-style adapter and never listens on a port. It calls the same `server/core/router.js` core used by `npm run dev:proxy`; market parsing remains solely in `server/market`.

Before cloud deployment, package this function together with `server/core`, `server/market`, and `server/utils` as a single function artifact, then run `npm ci` inside this directory. Do not upload the mini-program outputs, backups, logs, debug fixtures, docs, or Railway configuration.

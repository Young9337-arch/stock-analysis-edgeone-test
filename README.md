# Stock Analysis EdgeOne Makers test deployment

This repository contains only the Cloud Functions deployment unit. It deliberately excludes the Taro mini-program, outputs, backups, logs, debug fixtures, Docker and Railway files.

`cloud-functions/api/[[default]].js` uses the official EdgeOne Makers Node.js handler signature. `shared/server` is the deployed router and market implementation snapshot, included so the cloud build has no dependency on files outside this repository.

No production mini-program API URL is configured here. This repository is for an EdgeOne test deployment only.

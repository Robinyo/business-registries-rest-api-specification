#!/usr/bin/env node
'use strict';
require('shelljs/global');
var path = require('path');

set('-e');
set('-v');

var branch = process.env.TRAVIS_BRANCH && process.env.TRAVIS_BRANCH.toLowerCase();
if (branch && branch !== 'gh-pages') {
  var branchPath = path.join('.tmp', 'preview', branch, '/');
  mkdir('-p', branchPath);
  exec('npm run swagger bundle -- -o ' + branchPath + 'swagger.json');
  cp('web/index.html', branchPath);
  exec('deploy-to-gh-pages --update .tmp');
  // exec('GITHUB_TOKEN=$GH_TOKEN github-status-reporter --user Robinyo --repo business-registries-rest-api-specification --branch ' + branch + ' --state success --target-url="https://github.com/ato-team/business-registries-rest-api-specification/preview/' + branch + '/" --description="Link to preview" --context "Preview"');
}

#!/usr/local/bin node
'use strict';
const { spawnSync } = require('child_process');
const argv = require('yargs').argv;

// mode可选patch，minor，major

spawnSync(
  `git add ./; git commit -m "${argv.message ||
    'feat: default message'}";git push; npm version ${argv.mode ||
    'patch'} && npm publish --access=public;git push;`,
  [],
  {
    shell: true,
    stdio: 'inherit'
  }
);

// example
// node scripts/autopublish --message='feat: egg-cluster add sticky mode'

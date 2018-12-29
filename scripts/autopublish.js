const { spawnSync } = require('child_process')
const process = require('process')

spawnSync(
  `git add ./; git commit -m "${process.env.COMMIT_MSG ||
    'default msg'}";git push; npm version patch && npm publish --access=public;git push;`,
  [],
  {
    shell: true,
    stdio: 'inherit'
  }
)

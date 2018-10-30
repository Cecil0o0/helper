const { spawn } = require('child_process')
const process = require('process')
console.log(process.env.COMMIT_MSG)

spawn(
  `git add ./; git commit -m "${process.env.COMMIT_MSG ||
    'default msg'}";git push; npm version patch && npm publish --access=public;`,
  [],
  {
    shell: true,
    stdio: 'inherit'
  }
)

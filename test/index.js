const { promisify } = require(__dirname + '/../src')

const readFile = promisify(require('fs').readFile)

readFile(__dirname + '/myfile.js', 'utf8').then(contents => console.log(contents))

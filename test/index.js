const { Anyify, RegExps } = require(__dirname + '/../src');

const readFile = Anyify.promisify(require('fs').readFile);

readFile(__dirname + '/myfile.js', 'utf8').then(contents => console.log(contents));

console.log('测试//www.bai.com啥大事的//www.google.com'.match(RegExps.URL));

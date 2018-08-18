const { promisify } = require(__dirname + '/../src')

promisify(function(a, cb) {
  cb(null, a)
})(2).then(data => console.log(data))

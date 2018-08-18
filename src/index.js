// nodeStandardCallback
function promisify(func) {
  return function() {
    let args = Array.prototype.slice.call(arguments)
    return new Promise((resolve, reject) => {
      try {
        func(...args, function(err, ...data) {
          if (err) return reject(err)
          resolve(data)
        })
      } catch (e) {
        reject(e)
      }
    })
  }
}

module.exports = {
  promisify
}

module.exports = exports = search

var request = require('request')
var Q = require('Q')

var blackList = [
  'zero-blog',
  'zero-chat',
  'zero-config',
  'zero-crossings',
  'zero-framework',
  'zero-s3',
  'zero-fill'
]

function search() {
  var defer = Q.defer();
  var url = 'https://registry.npmjs.org/-/all?startkey="zero-a"&endkey="zero-z"';

  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      delete data._updated

      // remove blacklist packages
      blackList.forEach(function(packageName) {
        delete data[packageName]
      })

      var packages = []

      // convert to an array
      for (var x in data) {
        if (data.hasOwnProperty(x)) {
          packages.push(data[x])
        }
      }

      defer.resolve(packages)
    } else {
      defer.reject(error)
    }
  })

  return defer.promise
}

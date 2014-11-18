module.exports = exports = search

var request = require('request')
var Q = require('Q')

var blackList = [
  'zero-blog',
  'zero-chat',
  'zero-config',
  'zero-crossings',
  'zero-framework',
  'zero-s3'
]

function search() {
  var defer = Q.defer();
  var url = 'https://registry.npmjs.org/-/all?startkey="zero-a"&endkey="zero-z"';

  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);

      blackList.forEach(function(packageName) {
        delete data[packageName]
      })

      defer.resolve(data)
    } else {
      defer.reject(error)
    }
  })

  return defer.promise
}

module.exports = exports = search

var request = require('request')
var Q = require('Q')

// TODO, need to add a blacklist
function search() {
  var defer = Q.defer();
  var url = 'https://registry.npmjs.org/-/all?startkey="zero-a"&endkey="zero-z"';

  request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      defer.resolve(JSON.parse(body))
    } else {
      defer.reject(error)
    }
  })

  return defer.promise
}

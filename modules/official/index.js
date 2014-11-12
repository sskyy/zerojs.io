var zeroSearch = require('./zero-search')

var official = {
  theme : {
    directory : 'public',
    mock : {},
    index : "/official/index.html"
  },
  route : {
    '/zero-packages': function(req, res) {

      // TODO: support pagination
      zeroSearch()
        .then(function(data) {
          res.json(data)
        })
    }
  }
}

module.exports = official

const server = require('../')

module.exports = (req, res) => {
  server.trigger('request', [req, res])
}


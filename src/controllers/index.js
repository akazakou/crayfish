const { responseCode } = require('./response');

module.exports = async (server) => {
  server.route(responseCode);
}
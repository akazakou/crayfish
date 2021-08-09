const { responseCode } = require('./response');
const { configReader } = require('./config');

module.exports = async (server) => {
  server.route(responseCode);
  server.route(configReader);
}
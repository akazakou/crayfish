const { responseCode } = require('./response');
const { configReader } = require('./config');
const { healthStatus } = require('./health');

module.exports = async (server) => {
  server.route(responseCode);
  server.route(configReader);
  server.route(healthStatus);
}
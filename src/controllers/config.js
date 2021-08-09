const { readFileSync } = require('fs');
const { join } = require('path');

module.exports = {
  configReader: {
    method: 'GET',
    path: '/config/{fileName*}',
    handler: (request, h) => {
      const { fileName } = request.params;
      const content = readFileSync(join(...[ __dirname, '..', '..', 'config', fileName ])).toString();
      return h.response(content).header('content-type', 'text/plain');
    },
  }
}
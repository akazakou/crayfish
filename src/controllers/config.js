const { readFileSync } = require('fs');
const { join } = require('path');

module.exports = {
  configReader: {
    method: 'GET',
    path: '/config/{fileName*}',
    handler: (request, h) => {
      const { fileName } = request.params;
      return h.response(readFileSync(join(...[ __dirname, '..', '..', 'config', fileName ])).toString());
    },
  }
}
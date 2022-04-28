module.exports = {
  home: {
    method: 'GET',
    path: '/',
    handler: (request, h) => h.response({ page: 'home', status: 'ok' }).code(200),
  }
}
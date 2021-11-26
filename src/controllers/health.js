module.exports = {
  healthStatus: {
    method: 'GET',
    path: '/probe/liveness',
    handler: (request, h) => h.response({ status: 'ok', timestamp: Date.now() }).code(200),
  }
}
module.exports = {
  responseCode: {
    method: 'GET',
    path: '/response/{code}',
    handler: (request, h) => {
      const code = request.params.code
      return h.response({ code }).code(Number(code))
    },
  }
}
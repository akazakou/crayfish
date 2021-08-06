const Hapi = require('@hapi/hapi')

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  })

  server.route({
    method: 'GET',
    path: '/response/{code}',
    handler: (request, h) => {
      const code = request.params.code
      return h.response({ code }).code(Number(code))
    },
  })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init().catch(e => console.error(e))
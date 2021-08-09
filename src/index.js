const Hapi = require('@hapi/hapi')
const initControllers = require('./controllers')

const init = async () => {

  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  })

  await initControllers(server);

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init().catch(e => console.error(e))
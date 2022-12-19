const build = require('./app');

const server = build({
  logger: {
    level: 'info',
  }
})

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    server.log.error(err)
    process.exit(1)
  }
})

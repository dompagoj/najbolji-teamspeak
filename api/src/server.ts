import net from 'net'
import { TSServer } from './teamspeak/teamspeak'
import { handleSocketConnection, handleConnectionError } from './socket/connection-handler'
import { connections } from './socket/connections'

async function main() {
  const server = net.createServer()
  await TSServer.configure()

  server
    .on('connection', handleSocketConnection)
    .on('close', () => {
      console.log('Server closed!')
      process.exit(1)
    })
    .on('error', handleConnectionError)
    .listen(1337, 'localhost', () => {
      console.log('Server started on port 1337...')
    })
}

main().catch(async err => {
  console.error(err)

  process.exit()
})

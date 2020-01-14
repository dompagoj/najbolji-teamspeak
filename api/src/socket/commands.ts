import { Socket } from 'net'

import { TSServer } from '../teamspeak/teamspeak'

enum Commands {
  GET_ONLINE_CLIENT_LIST = 0x00,
  GET_CLIENT = 0x01,
  GET_DB_CLIENT_LIST = 0x02
}

type Handler = { [key: number]: (socket: Socket, params: Buffer) => void }

export const COMMAND_HANDLERS: Handler = {
  [Commands.GET_CLIENT](socket, params) {
    const clientId = params.readUInt32LE(0)
    socket.write(`Hello there client with id ${clientId}`)
  },
  async [Commands.GET_ONLINE_CLIENT_LIST](socket, params) {
    const teamspeak = TSServer.getInstance()

    const clients = await teamspeak.clientList()
    socket.write(JSON.stringify(clients))
  },
  async [Commands.GET_DB_CLIENT_LIST](socket) {
    console.log('sending db clients...')
    const teamspeak = TSServer.getInstance()
    const clients = await teamspeak.clientDBList()
    socket.write(JSON.stringify(clients || []))
  }
}

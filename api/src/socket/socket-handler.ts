import { Socket } from 'net'
import { connections } from './connections'
import { generateRandomBytes } from '../utils'
import { Commands } from './commands'
import { TSServer } from '../teamspeak/teamspeak'

export class SocketHandler {
  private socket: Socket

  constructor(socket: Socket) {
    socket.id = generateRandomBytes()
    connections.add(socket)
    this.socket = socket
  }

  public handleClose = (hadError: boolean) => {
    console.log('Close!')
    try {
      connections.remove(this.socket)
    } catch(e) {
      console.info('Connection already closed!')
    }
  }

  public handleEnd = () => {
    console.log('End!')
  }

  public handleData = async (data: Buffer) => {
    console.log('data: ', data)
    const action = data.readUInt8(0)
    const type = data.readUInt8(1)
    const payload = data.slice(2)

    const teamspeak = TSServer.getInstance()

    switch (action) {
      case Commands.GET_CLIENT_LIST:
        const clients = await teamspeak.clientList()
        this.socket.write(JSON.stringify(clients))
        break
      case Commands.GET_CLIENT:
        const clientId = payload.readUInt32LE(0)
        this.socket.write(`Hello there client with id ${clientId}`)
        break

      default:
        console.error('Unknown command!')
    }
  }
}

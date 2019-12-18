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
    connections.remove(this.socket)
  }
  public handleEnd = () => {
    console.log('End!')
  }
  public handleData = async (data: Buffer) => {
    console.log(data)
    // console.log(JSON.parse(data.toString()))
    const action = data.readUInt8(0)
    const type = data.readUInt8(1)
    const payload = data.slice(2)

    const teamspeak = TSServer.getInstance()

    switch (action) {
      case Commands.GET_CLIENT_LIST:
        const clients = await teamspeak.clientList()
        this.socket.write(JSON.stringify(clients))
        break

      default:
        console.error('Unknown command!')
    }
  }
}

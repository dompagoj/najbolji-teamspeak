import { Socket } from 'net'
import { connections } from './connections'
import { generateRandomString } from '../utils'
import { COMMAND_HANDLERS } from './commands'

export class SocketHandler {
  private socket: Socket

  constructor(socket: Socket) {
    socket.id = generateRandomString()
    connections.add(socket)
    this.socket = socket
  }

  public handleClose = (hadError: boolean) => {
    try {
      console.log('Removing connection...')
      connections.remove(this.socket)
    } catch (e) {
      console.info('Connection already closed!')
    }
  }

  public handleEnd = () => {
    console.log('End!')
  }

  public handleData = async (data: Buffer) => {
    console.log('data: ', data)
    const action = data.readUInt8(0)
    const params = data.slice(1)

    const handler = COMMAND_HANDLERS[action]

    if (handler) {
      handler(this.socket, params)
    }
  }
}

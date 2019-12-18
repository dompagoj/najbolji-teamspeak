import { Socket } from 'net'
import { connections } from './connections'
import { generateRandomBytes } from '../utils'
import { Commands } from './commands'

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
  public handleData = (data: Buffer) => {
    console.log(data)
    // console.log(JSON.parse(data.toString()))
    const action = data.readUInt16BE(0)
    const type = data.readUInt8(2)
    const payload = data.slice(3).readUInt8(0)
    console.log('action: ', action)
    console.log('type: ', type)
    console.log('payload: ', payload)
  }
}
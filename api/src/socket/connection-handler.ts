import { Socket } from 'net'
import { SocketHandler } from './socket-handler'

export async function handleSocketConnection(socket: Socket) {
  const socketHandler = new SocketHandler(socket)

  socket.on('close', socketHandler.handleClose)
  socket.on('data', socketHandler.handleData)
  socket.on('end', socketHandler.handleEnd)
}

export async function handleConnectionError(err: Error) {
  console.error('Server error: ', err.message)
}

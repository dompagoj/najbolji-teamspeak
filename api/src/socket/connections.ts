import { Socket } from 'net'

type Clients = { [key: string]: Socket }

class Connections {
  public clients: Clients = {}
  public numberOfConnections = 0
  private deleteFromClients = (id: string) => delete this.clients[id]

  public add(socket: Socket) {
    this.clients[socket.id] = socket
    this.numberOfConnections++
  }

  public remove(param: Socket | string) {
    if (!param) return console.log('Socket is undefined, cannot remove')

    this.numberOfConnections--
    if (typeof param === 'string') {
      return this.deleteFromClients(param)
    }
    return this.deleteFromClients(param.id)
  }

  public clientsAsArray() {
    return Object.values(this.clients)
  }
}

export const connections = new Connections()
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Connections {
    constructor() {
        this.clients = {};
        this.numberOfConnections = 0;
        this.deleteFromClients = (id) => delete this.clients[id];
    }
    add(socket) {
        this.clients[socket.id] = socket;
        this.numberOfConnections++;
    }
    remove(param) {
        if (!param)
            return console.log('Socket is undefined, cannot remove');
        this.numberOfConnections--;
        if (typeof param === 'string') {
            return this.deleteFromClients(param);
        }
        return this.deleteFromClients(param.id);
    }
    clientsAsArray() {
        return Object.values(this.clients);
    }
}
exports.connections = new Connections();

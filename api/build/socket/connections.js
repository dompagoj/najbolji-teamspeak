"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Connections {
    constructor() {
        this.clients = {};
        this.deleteFromClients = (id) => delete this.clients[id];
    }
    add(socket) {
        this.clients[socket.id] = socket;
    }
    remove(param) {
        if (!param)
            return console.log('Socket is undefined, cannot remove');
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = require("./connections");
const utils_1 = require("../utils");
class SocketHandler {
    constructor(socket) {
        console.log('Socket in constructor: ', socket);
        socket.id = utils_1.generateRandomBytes();
        connections_1.connections.add(socket);
        this.socket = socket;
    }
    handleClose(hadError) {
        console.log('Handle close!', hadError);
        console.log('this.socket: ', !!this.socket);
        connections_1.connections.remove(this.socket);
        console.log('Clients length: ', connections_1.connections.clientsAsArray()[0].id);
    }
    handleEnd() {
        console.log('End!');
    }
    handleData(data) {
        console.log('Data!', data);
        console.log('this.socket: ', !!this.socket);
    }
}
exports.SocketHandler = SocketHandler;

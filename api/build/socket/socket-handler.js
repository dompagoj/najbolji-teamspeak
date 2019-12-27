"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connections_1 = require("./connections");
const utils_1 = require("../utils");
const commands_1 = require("./commands");
const teamspeak_1 = require("../teamspeak/teamspeak");
class SocketHandler {
    constructor(socket) {
        this.handleClose = (hadError) => {
            console.log('Close!');
            try {
                connections_1.connections.remove(this.socket);
            }
            catch (e) {
                console.info('Connection already closed!');
            }
        };
        this.handleEnd = () => {
            console.log('End!');
        };
        this.handleData = async (data) => {
            console.log('data: ', data);
            const action = data.readUInt8(0);
            const type = data.readUInt8(1);
            const payload = data.slice(2);
            const teamspeak = teamspeak_1.TSServer.getInstance();
            switch (action) {
                case commands_1.Commands.GET_CLIENT_LIST:
                    const clients = await teamspeak.clientList();
                    this.socket.write(JSON.stringify(clients));
                    break;
                case commands_1.Commands.GET_CLIENT:
                    const clientId = payload.readUInt32LE(0);
                    this.socket.write(`Hello there client with id ${clientId}`);
                    break;
                default:
                    console.error('Unknown command!');
            }
        };
        socket.id = utils_1.generateRandomBytes();
        connections_1.connections.add(socket);
        this.socket = socket;
    }
}
exports.SocketHandler = SocketHandler;

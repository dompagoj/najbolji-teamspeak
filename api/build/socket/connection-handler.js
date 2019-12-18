"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_handler_1 = require("./socket-handler");
async function handleSocketConnection(socket) {
    const socketHandler = new socket_handler_1.SocketHandler(socket);
    socket.on('close', socketHandler.handleClose);
    socket.on('data', socketHandler.handleData);
    socket.on('end', socketHandler.handleEnd);
}
exports.handleSocketConnection = handleSocketConnection;
async function handleConnectionError(err) {
    console.error('Server error: ', err.message);
}
exports.handleConnectionError = handleConnectionError;

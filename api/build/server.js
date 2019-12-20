"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const teamspeak_1 = require("./teamspeak/teamspeak");
const connection_handler_1 = require("./socket/connection-handler");
async function main() {
    const server = net_1.default.createServer();
    await teamspeak_1.TSServer.configure();
    server
        .on('connection', connection_handler_1.handleSocketConnection)
        .on('close', () => {
        console.log('Server closed!');
        process.exit(1);
    })
        .on('error', connection_handler_1.handleConnectionError)
        .listen(1337, 'localhost', () => {
        console.log('Server started on port 1337...');
    });
}
main().catch(async (err) => {
    console.error(err);
    process.exit();
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const teamspeak_1 = require("./teamspeak/teamspeak");
async function main() {
    const server = net_1.default.createServer();
    await teamspeak_1.TSServer.configure();
    const teamspeak = teamspeak_1.TSServer.getInstance();
    console.log('clients: ', await teamspeak.clientList());
}
main().catch(async (err) => {
    console.error(err);
    process.exit();
});

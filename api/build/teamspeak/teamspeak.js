"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts3_nodejs_library_1 = require("ts3-nodejs-library");
const config_1 = require("../config");
class TSServer {
    static async configure() {
        this.teamspeak = await ts3_nodejs_library_1.TeamSpeak.connect({
            host: config_1.config.tsServerIp,
            username: config_1.config.tsUsername,
            password: config_1.config.tsPassword,
        });
    }
    static getInstance() { return this.teamspeak; }
}
exports.TSServer = TSServer;

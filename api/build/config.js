"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    tsServerIp: process.env.TS_SERVER_IP,
    tsPassword: process.env.TS_PW,
    tsUsername: process.env.TS_USERNAME,
    env: {
        value: process.env.NODE_ENV,
        isDev() {
            return this.value === 'dev' || this.value === 'develop' || this.value === 'development';
        },
        isProd() {
            return this.value === 'production' || this.value === 'prod';
        }
    }
};

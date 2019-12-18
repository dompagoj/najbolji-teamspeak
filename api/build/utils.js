"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
function generateRandomBytes() {
    return crypto_1.randomBytes(8).toString('hex');
}
exports.generateRandomBytes = generateRandomBytes;

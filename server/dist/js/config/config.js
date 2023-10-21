"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.ATLAS_URI = void 0;
// config.ts
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.ATLAS_URI = process.env.ATLAS_URI || "";
exports.PORT = process.env.PORT || 5000;

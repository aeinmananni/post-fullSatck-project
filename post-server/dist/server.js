"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
require("dotenv-safe/config");
const port = Number(((_a = process.env) === null || _a === void 0 ? void 0 : _a.PORT) || 3030);
app_1.default.listen(port, () => `Server Running on Port : ${port}`);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const loginSlice_1 = __importDefault(require("../components/loginSlice"));
const signUpSlice_1 = __importDefault(require("../components/signUpSlice"));
const store = (0, toolkit_1.configureStore)({
    reducer: {
        login: loginSlice_1.default,
        SignUp: signUpSlice_1.default
    }
});
exports.default = store;

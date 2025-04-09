"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = exports.setUserName = exports.loginSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
exports.loginSlice = (0, toolkit_1.createSlice)({
    name: 'login',
    initialState: '',
    reducers: {
        setUserName: (state, action) => {
            return action.payload;
        },
        logOut: (state) => {
            return '';
        }
    }
});
_a = exports.loginSlice.actions, exports.setUserName = _a.setUserName, exports.logOut = _a.logOut;
exports.default = exports.loginSlice.reducer;

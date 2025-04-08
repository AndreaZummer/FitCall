"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSlice = exports.setUserName = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const setUserName = (userName) => {
    return {
        type: 'login/setUserName',
        payload: userName
    };
};
exports.setUserName = setUserName;
exports.loginSlice = (0, toolkit_1.createSlice)({
    name: 'login',
    initialState: '',
    reducers: {
        setUserName: (state, action) => {
            return action.payload;
        },
        logOut: (state, action) => {
            return '';
        }
    }
});
exports.default = exports.loginSlice.reducer;

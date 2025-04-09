"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmPassword = exports.setPassword = exports.resetPasswords = exports.setTerms = exports.signUpSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
exports.signUpSlice = (0, toolkit_1.createSlice)({
    name: 'signUp',
    initialState: {
        password: '',
        confirmPassword: '',
        terms: false
    },
    reducers: {
        setPassword: (state, action) => {
            return { ...state, password: action.payload };
        },
        confirmPassword: (state, action) => {
            return { ...state, confirmPassword: action.payload };
        },
        setTerms: (state) => {
            return { ...state, terms: state.terms ? false : true };
        },
        resetPasswords: (state) => {
            return { password: '', confirmPassword: '', terms: false };
        }
    }
});
_a = exports.signUpSlice.actions, exports.setTerms = _a.setTerms, exports.resetPasswords = _a.resetPasswords, exports.setPassword = _a.setPassword, exports.confirmPassword = _a.confirmPassword;
exports.default = exports.signUpSlice.reducer;

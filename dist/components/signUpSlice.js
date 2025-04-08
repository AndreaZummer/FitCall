"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpSlice = exports.resetPasswords = exports.setTerms = exports.confirmPassword = exports.setPassword = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const setPassword = (password) => {
    return {
        type: 'signUp/setPassword',
        payload: password
    };
};
exports.setPassword = setPassword;
const confirmPassword = (password) => {
    return {
        type: 'signUp/confirmPassword',
        payload: password
    };
};
exports.confirmPassword = confirmPassword;
const setTerms = () => {
    return {
        type: 'signUp/setTerms',
    };
};
exports.setTerms = setTerms;
const resetPasswords = () => {
    return {
        type: 'signUp/resetPassword'
    };
};
exports.resetPasswords = resetPasswords;
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
        setTerms: (state, action) => {
            return { ...state, terms: state.terms ? false : true };
        },
        resetPasswords: (state, action) => {
            return { password: '', confirmPassword: '', terms: false };
        }
    }
});
exports.default = exports.signUpSlice.reducer;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    finalWorkout: [],
    intervalVsRepeat: null,
    selectedType: []
};
exports.homeSlice = (0, toolkit_1.createSlice)({
    name: 'home',
    initialState,
    reducers: {}
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const loginSlice_1 = __importDefault(require("../components/loginSlice"));
const signUpSlice_1 = __importDefault(require("../components/signUpSlice"));
const offerSlice_1 = __importDefault(require("../components/offerSlice"));
const filterExerciseSlice_1 = __importDefault(require("../components/filterExerciseSlice"));
const filterOfExercisesSlice_1 = __importDefault(require("../components/filterOfExercisesSlice"));
const store = (0, toolkit_1.configureStore)({
    reducer: {
        login: loginSlice_1.default,
        signUp: signUpSlice_1.default,
        offer: offerSlice_1.default,
        filterExercise: filterExerciseSlice_1.default,
        filterOfExercises: filterOfExercisesSlice_1.default
    }
});
exports.default = store;

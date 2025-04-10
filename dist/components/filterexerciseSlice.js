"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFilter = exports.deleteEquipment = exports.deleteDifficulty = exports.deleteBodyPart = exports.addTypeOfExercise = exports.addTime = exports.addEquipment = exports.addDifficulty = exports.addBodyPart = exports.filterExerciseSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    bodyPart: [],
    difficulty: [],
    equipment: [],
    time: 0,
    typeOfExercise: null
};
exports.filterExerciseSlice = (0, toolkit_1.createSlice)({
    name: 'filterExercise',
    initialState,
    reducers: {
        addBodyPart: (state, action) => {
            return {
                ...state,
                bodyPart: [...state.bodyPart, action.payload]
            };
        },
        addDifficulty: (state, action) => {
            return {
                ...state,
                difficulty: [...state.difficulty, action.payload]
            };
        },
        addEquipment: (state, action) => {
            return {
                ...state,
                equipment: [...state.equipment, action.payload]
            };
        },
        addTime: (state, action) => {
            return {
                ...state,
                time: action.payload
            };
        },
        addTypeOfExercise: (state, action) => {
            return {
                ...state,
                typeOfExercise: action.payload
            };
        },
        deleteBodyPart: (state, action) => {
            return {
                ...state,
                bodyPart: state.bodyPart.filter((bp) => {
                    return bp !== action.payload;
                })
            };
        },
        deleteDifficulty: (state, action) => {
            return {
                ...state,
                difficulty: state.difficulty.filter((diff) => {
                    return diff !== action.payload;
                })
            };
        },
        deleteEquipment: (state, action) => {
            return {
                ...state,
                equipment: state.equipment.filter((equi) => {
                    return equi !== action.payload;
                })
            };
        },
        deleteFilter: (state) => {
            return {
                bodyPart: [],
                difficulty: [],
                equipment: [],
                time: 0,
                typeOfExercise: null
            };
        }
    }
});
_a = exports.filterExerciseSlice.actions, exports.addBodyPart = _a.addBodyPart, exports.addDifficulty = _a.addDifficulty, exports.addEquipment = _a.addEquipment, exports.addTime = _a.addTime, exports.addTypeOfExercise = _a.addTypeOfExercise, exports.deleteBodyPart = _a.deleteBodyPart, exports.deleteDifficulty = _a.deleteDifficulty, exports.deleteEquipment = _a.deleteEquipment, exports.deleteFilter = _a.deleteFilter;
exports.default = exports.filterExerciseSlice.reducer;

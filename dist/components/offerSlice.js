"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExercise = exports.deleteWorkout = exports.generateSurpriseWorkout = exports.offerSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    finalWorkout: [],
    intervalVsRepeat: null,
    selectedType: []
};
exports.offerSlice = (0, toolkit_1.createSlice)({
    name: 'offer',
    initialState,
    reducers: {
        generateSurpriseWorkout: (state, action) => {
            return { ...state,
                finalWorkout: action.payload.finalWorkout,
                intervalVsRepeat: action.payload.intervalVsRepeat
            };
        },
        deleteExercise: (state, action) => {
            return { ...state,
                finalWorkout: action.payload
            };
        },
        deleteWorkout: (state) => {
            return {
                finalWorkout: [],
                intervalVsRepeat: null,
                selectedType: []
            };
        }
    }
});
_a = exports.offerSlice.actions, exports.generateSurpriseWorkout = _a.generateSurpriseWorkout, exports.deleteWorkout = _a.deleteWorkout, exports.deleteExercise = _a.deleteExercise;
exports.default = exports.offerSlice.reducer;

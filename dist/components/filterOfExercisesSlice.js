"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeSelectedType = exports.removeSelected = exports.removeAllSelected = exports.addSelected = exports.filterOfExercisesSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    selected: [],
    selectedType: []
};
exports.filterOfExercisesSlice = (0, toolkit_1.createSlice)({
    name: 'filterOfExercises',
    initialState,
    reducers: {
        addSelected: (state, action) => {
            state.selected.push(action.payload.selected);
            state.selectedType.push(action.payload.selectedType);
        },
        removeSelected: (state, action) => {
            return {
                selected: state.selected.filter((exercise) => {
                    return action.payload.selected !== exercise;
                }),
                selectedType: state.selectedType.slice(0, action.payload.selectedIndex).concat(state.selectedType.slice(action.payload.selectedIndex, -1))
            };
        },
        removeSelectedType: (state, action) => {
            return {
                ...state,
                selectedType: state.selectedType.slice(0, action.payload.indexToDelete).concat(state.selectedType.slice(action.payload.indexToDelete, -1))
            };
        },
        removeAllSelected: (state) => {
            return {
                selected: [],
                selectedType: []
            };
        }
    }
});
_a = exports.filterOfExercisesSlice.actions, exports.addSelected = _a.addSelected, exports.removeAllSelected = _a.removeAllSelected, exports.removeSelected = _a.removeSelected, exports.removeSelectedType = _a.removeSelectedType;
exports.default = exports.filterOfExercisesSlice.reducer;

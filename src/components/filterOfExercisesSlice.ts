import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type filterOfExercisesType = {
    selected: number[], 
    selectedType: ("interval" | "opakovania")[];
}
    

const initialState: filterOfExercisesType = {
    selected: [],
    selectedType: []
};

export const filterOfExercisesSlice = createSlice({
    name: 'filterOfExercises',
    initialState,
    reducers: {
        addSelected: (state, action: PayloadAction<{selected: number, selectedType: "interval" | "opakovania"}>) => {
            state.selected.push(action.payload.selected)
            state.selectedType.push(action.payload.selectedType)
        },
        removeSelected: (state, action: PayloadAction<{selected: number, selectedIndex: number}>) => {
            return {
                selected: state.selected.filter((exercise) => {
                    return action.payload.selected !== exercise
                }),
                selectedType: state.selectedType.slice(0, action.payload.selectedIndex).concat(state.selectedType.slice(action.payload.selectedIndex +1))
            }
        },
        removeSelectedType: (state, action: PayloadAction<{indexToDelete: number}>) => {
            return {
                ...state,
                selectedType: state.selectedType.slice(0, action.payload.indexToDelete).concat(state.selectedType.slice(action.payload.indexToDelete +1))
            }
        },
        removeAllSelected: (state) => {
            return {
                selected: [],
                selectedType: []
            }
        }
    }
})

export const {addSelected, removeAllSelected, removeSelected, removeSelectedType} = filterOfExercisesSlice.actions;
export default filterOfExercisesSlice.reducer;
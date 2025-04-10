import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterType {
    bodyPartFilter: ("brucho" | "ruky" | "nohy" | "zadok" | "kondička")[],
    difficultyFilter: ("ľahké" | "stredné" | "ťažké")[],
    equipmentFilter: ("činky" | "expander" | "kettlebell" | "slider" )[],
}

const initialState: FilterType = {
    bodyPartFilter: [],
    difficultyFilter: [],
    equipmentFilter: [],
}

export const filterResultsSlice = createSlice({
    name: 'filterResults',
    initialState,
    reducers: {
        addBodyPart: (state, action: PayloadAction<("brucho" | "ruky" | "nohy" | "zadok" | "kondička")>) => {
            return {
                ...state,
                bodyPartFilter: [...state.bodyPartFilter, action.payload]
            }
        },
        addDifficulty: (state, action: PayloadAction<("ľahké" | "stredné" | "ťažké")>) => {
            return {
                ...state,
                difficultyFilter: [...state.difficultyFilter, action.payload]
            }
        },
        addEquipment: (state, action: PayloadAction<("činky" | "expander" | "kettlebell" | "slider" )>) => {
            return {
                ...state,
                equipmentFilter: [...state.equipmentFilter, action.payload]
            }
        },
        deleteBodyPart: (state, action: PayloadAction<("brucho" | "ruky" | "nohy" | "zadok" | "kondička")>) => {
            return {
                ...state,
                bodyPartFilter: state.bodyPartFilter.filter((bp) => {
                    return bp!== action.payload
                }) 
            }
        },
        deleteDifficulty: (state, action: PayloadAction<("ľahké" | "stredné" | "ťažké")>) => {
            return {
                ...state,
                difficultyFilter: state.difficultyFilter.filter((diff) => {
                    return diff!== action.payload
                }) 
            }
        },
        deleteEquipment: (state, action: PayloadAction<("činky" | "expander" | "kettlebell" | "slider")>) => {
            return {
                ...state,
                equipmentFilter: state.equipmentFilter.filter((equi) => {
                    return equi!== action.payload
                })
            }
        },
        deleteAll: (state) => {
            return {
                bodyPartFilter: [],
                difficultyFilter: [],
                equipmentFilter: []
            }
        }
    }
})

export const {addBodyPart, addDifficulty, addEquipment, deleteBodyPart, deleteDifficulty, deleteEquipment, deleteAll} = filterResultsSlice.actions;
export default filterResultsSlice.reducer;
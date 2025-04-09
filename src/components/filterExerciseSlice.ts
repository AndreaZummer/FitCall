import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterType {
    bodyPart: ("brucho" | "ruky" | "nohy" | "zadok" | "kondička")[],
    difficulty: ("ľahké" | "stredné" | "ťažké")[],
    equipment: ("činky" | "expander" | "kettlebell" | "slider" | "bez pomôcok")[],
    time: number,
    typeOfExercise: "interval" | "opakovania" | null 
}

const initialState: FilterType = {
    bodyPart: [],
    difficulty: [],
    equipment: [],
    time: 0,
    typeOfExercise: null 
}

export const filterExerciseSlice = createSlice({
    name: 'filterExercise',
    initialState,
    reducers: {
        addBodyPart: (state, action: PayloadAction<("brucho" | "ruky" | "nohy" | "zadok" | "kondička")>) => {
            return {
                ...state,
                bodyPart: [...state.bodyPart, action.payload]
            }
        },
        addDifficulty: (state, action: PayloadAction<("ľahké" | "stredné" | "ťažké")>) => {
            return {
                ...state,
                difficulty: [...state.difficulty, action.payload]
            }
        },
        addEquipment: (state, action: PayloadAction<("činky" | "expander" | "kettlebell" | "slider" | "bez pomôcok")>) => {
            return {
                ...state,
                equipment: [...state.equipment, action.payload]
            }
        },
        addTime: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                time: action.payload
            }
        },
        addTypeOfExercise: (state, action: PayloadAction<("interval" | "opakovania" | null)>) => {
            return {
                ...state,
                typeOfExercise: action.payload
            }
        },
        deleteBodyPart: (state, action: PayloadAction<("brucho" | "ruky" | "nohy" | "zadok" | "kondička")>) => {
            return {
                ...state,
                bodyPart: state.bodyPart.filter((bp) => {
                    return bp!== action.payload
                }) 
            }
        },
        deleteDifficulty: (state, action: PayloadAction<("ľahké" | "stredné" | "ťažké")>) => {
            return {
                ...state,
                difficulty: state.difficulty.filter((diff) => {
                    return diff!== action.payload
                }) 
            }
        },
        deleteEquipment: (state, action: PayloadAction<("činky" | "expander" | "kettlebell" | "slider" | "bez pomôcok")>) => {
            return {
                ...state,
                equipment: state.equipment.filter((equi) => {
                    return equi!== action.payload
                })
            }
        },
        deleteFilter: (state) => {
            return {
                bodyPart: [],
                difficulty: [],
                equipment: [],
                time: 0,
                typeOfExercise: null 
            }
        }
    }
})

export const { addBodyPart, addDifficulty, addEquipment, addTime, addTypeOfExercise, deleteBodyPart, deleteDifficulty, deleteEquipment, deleteFilter} = filterExerciseSlice.actions;
export default filterExerciseSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Exercise } from "../entities";

interface OfferType {
    finalWorkout: Exercise[],
    intervalVsRepeat: "interval" | "opakovania" | null;
    selectedType: string[]
}

const initialState: OfferType = {
    finalWorkout: [],
    intervalVsRepeat: null,
    selectedType: []
}

export const offerSlice= createSlice({
    name: 'offer',
    initialState,
    reducers: {
        generateSurpriseWorkout: (state, action: PayloadAction<{finalWorkout: Exercise[], intervalVsRepeat: ("interval" | "opakovania")}>) => {
            return {...state,
                finalWorkout: action.payload.finalWorkout,
                intervalVsRepeat: action.payload.intervalVsRepeat
            }
        },
        deleteExercise: (state, action: PayloadAction<Exercise[]>) => {
            return {...state,
                finalWorkout: action.payload
            }
        },
        deleteWorkout: (state) => {
            return {
                finalWorkout: [],
                intervalVsRepeat: null,
                selectedType: []
            }
        }

    }
})

export const {generateSurpriseWorkout, deleteWorkout, deleteExercise} = offerSlice.actions;
export default offerSlice.reducer;
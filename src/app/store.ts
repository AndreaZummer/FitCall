import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../components/loginSlice";
import signUpReducer from "../components/signUpSlice";
import offerReducer from "../components/offerSlice";
import filterExerciseReducer from "../components/filterExerciseSlice";
import filterOfExercisesReducer from "../components/filterOfExercisesSlice";
import searchReducer from "../components/searchSlice";

const store = configureStore({
    reducer: {
        login: loginReducer,
        signUp: signUpReducer,
        offer: offerReducer,
        filterExercise: filterExerciseReducer,
        filterOfExercises: filterOfExercisesReducer,
        search: searchReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
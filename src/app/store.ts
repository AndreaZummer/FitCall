import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../components/loginSlice";
import signUpReducer from "../components/signUpSlice";
import offerReducer from "../components/offerSlice";
import filterExerciseReducer from "../components/filterExerciseSlice";

const store = configureStore({
    reducer: {
        login: loginReducer,
        signUp: signUpReducer,
        offer: offerReducer,
        filterExercise: filterExerciseReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
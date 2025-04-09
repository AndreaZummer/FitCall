import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../components/loginSlice";
import signUpReducer from "../components/signUpSlice";
import offerReducer from "../components/offerSlice";

const store = configureStore({
    reducer: {
        login: loginReducer,
        SignUp: signUpReducer,
        offer: offerReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
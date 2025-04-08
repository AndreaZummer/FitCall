import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../components/loginSlice";
import signUpReducer from "../components/signUpSlice"

const store = configureStore({
    reducer: {
        login: loginReducer,
        SignUp: signUpReducer
    }
})

export default store;
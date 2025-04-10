import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const signUpSlice = createSlice({
    name: 'signUp',
    initialState: {
        password: '',
        confirmPassword: '',
        terms: false
    },
    reducers: {
        setPassword: (state, action: PayloadAction<string>) => {
            return {...state, password: action.payload}
        },
        confirmPassword: (state, action: PayloadAction<string>) => {
            return {...state, confirmPassword: action.payload}
        },
        setTerms: (state) => {
            return {...state, terms: state.terms? false : true}
        },
        resetPasswords: (state) => {
            return {password: '', confirmPassword: '', terms: false}
        }
    }
})

export const {setTerms, resetPasswords, setPassword, confirmPassword} = signUpSlice.actions;
export default signUpSlice.reducer;
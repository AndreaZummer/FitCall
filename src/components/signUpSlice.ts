import { createSlice } from "@reduxjs/toolkit";

export const setPassword = (password: string) => {
    return {
        type: 'signUp/setPassword',
        payload: password
    }
}
export const confirmPassword = (password: string) => {
    return {
        type: 'signUp/confirmPassword',
        payload: password
    }
}
export const setTerms = () => {
    return {
        type: 'signUp/setTerms',
    }
}
export const resetPasswords= () => {
    return {
        type: 'signUp/resetPassword'
    }
}

export const signUpSlice = createSlice({
    name: 'signUp',
    initialState: {
        password: '',
        confirmPassword: '',
        terms: false
    },
    reducers: {
        setPassword: (state,action) => {
            return {...state, password: action.payload}
        },
        confirmPassword: (state,action) => {
            return {...state, confirmPassword: action.payload}
        },
        setTerms: (state, action) => {
            return {...state, terms: state.terms? false : true}
        },
        resetPasswords: (state, action) => {
            return {password: '', confirmPassword: '', terms: false}
        }
    }
})

export default signUpSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
// Action creator
export const setUserName = (userName: string) => {
    return {
        type: 'login/setUserName',
        payload: userName
    }
}

export const loginSlice = createSlice({
    name: 'login',
    initialState: '',
    reducers: {
        setUserName: (state, action) => {
            return action.payload
        },
        logOut: (state, action) => {
            return ''
        }
    }
})

export default loginSlice.reducer;
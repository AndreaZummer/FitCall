import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: '',
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            return action.payload
        },
        logOut: (state) => {
            return ''
        }
    }
})

export const {setUserName, logOut} = loginSlice.actions;
export default loginSlice.reducer;
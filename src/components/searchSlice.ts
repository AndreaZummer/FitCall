import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: {
        setSearch: (state, action:PayloadAction<string>) => {
            return action.payload
        },
        deleteSearch: (state) => {
            return ''
        }
    }    
})

export const {setSearch, deleteSearch} = searchSlice.actions
export default searchSlice.reducer;
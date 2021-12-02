import {createSlice} from "@reduxjs/toolkit";

export const mySlice = createSlice({
    name: 'theme',
    initialState: {
        value: 'DEFAULT'
    },
    reducers : {
        changeTheme : (state, action) => {
            state.value = action.payload
        }
    }
})

export const {changeTheme} = mySlice.actions
export default mySlice.reducer
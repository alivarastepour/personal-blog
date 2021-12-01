import {createSlice} from "@reduxjs/toolkit";

export const mySlice = createSlice({
    name: 'theme',
    initialState: {
        value: 'DEFAULT'
    },
    reducers : {
        changeTheme : (state, newValue) => {
            state.value = newValue
        }
    }
})

export const {changeTheme} = mySlice.actions
export default mySlice.reducer
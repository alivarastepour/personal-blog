import {createSlice} from "@reduxjs/toolkit";

export const mySlice = createSlice({
    name: 'theme',
    initialState: {
        value: localStorage.getItem('theme')
    },
    reducers : {
        changeTheme : (state, action) => {
            state.value = action.payload;
            localStorage.setItem('theme', action.payload);
        }
    }
})

export const {changeTheme} = mySlice.actions
export default mySlice.reducer
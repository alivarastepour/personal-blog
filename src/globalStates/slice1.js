import {createSlice} from "@reduxjs/toolkit";


export const myslice1 = createSlice({
    name: 'location',
    initialState:{
        value: fetch('https://geo.ipify.org/api/v2/country?apiKey=at_vWj6GggURobnxNbvqBwg8heA5ewma').then(a => a.json())
    }
})
export default myslice1.reducer
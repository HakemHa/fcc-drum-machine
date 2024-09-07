import { createSlice } from "@reduxjs/toolkit";

const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const initialState = {
    sounds: {
        a: 0,
    },
    keys: keys,
}

export const markSlice = createSlice({
    name: "changeSounds",
    initialState,
    reducers: {
        changeAudio: (state, action) => {
            console.log("Called", action)
            return state;
        }
    }
})

export const { changeText } = markSlice.actions;

export default markSlice.reducer;
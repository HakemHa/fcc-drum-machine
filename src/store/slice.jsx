import { createSlice } from "@reduxjs/toolkit";

const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const kitPath = "./src/assets/"
const heaterKit = {};
heaterKit[keys[0]] = new Audio(kitPath + "heaterKit/Heater-1.mp3");
heaterKit[keys[1]] = new Audio(kitPath + "heaterKit/Heater-2.mp3");
heaterKit[keys[2]] = new Audio(kitPath + "heaterKit/Heater-3.mp3");
heaterKit[keys[3]] = new Audio(kitPath + "heaterKit/Heater-4_1.mp3");
heaterKit[keys[4]] = new Audio(kitPath + "heaterKit/Heater-6.mp3");
heaterKit[keys[5]] = new Audio(kitPath + "heaterKit/Dsc_Oh.mp3");
heaterKit[keys[6]] = new Audio(kitPath + "heaterKit/Kick_n_Hat.mp3");
heaterKit[keys[7]] = new Audio(kitPath + "heaterKit/RP4_KICK_1.mp3");
heaterKit[keys[8]] = new Audio(kitPath + "heaterKit/Cev_H2.mp3");
const smoothPianoKit = {};
smoothPianoKit[keys[0]] = new Audio(kitPath + "smoothPianoKit/Chord_1.mp3");
smoothPianoKit[keys[1]] = new Audio(kitPath + "smoothPianoKit/Chord_2.mp3");
smoothPianoKit[keys[2]] = new Audio(kitPath + "smoothPianoKit/Chord_3.mp3");
smoothPianoKit[keys[3]] = new Audio(kitPath + "smoothPianoKit/Give_us_a_light.mp3");
smoothPianoKit[keys[4]] = new Audio(kitPath + "smoothPianoKit/Dry_Ohh.mp3");
smoothPianoKit[keys[5]] = new Audio(kitPath + "smoothPianoKit/Bld_H1.mp3");
smoothPianoKit[keys[6]] = new Audio(kitPath + "smoothPianoKit/punchy_kick_1.mp3");
smoothPianoKit[keys[7]] = new Audio(kitPath + "smoothPianoKit/side_stick_1.mp3");
smoothPianoKit[keys[8]] = new Audio(kitPath + "smoothPianoKit/Brk_Snr.mp3");
const initialState = {
    sounds: heaterKit,
    keys: keys,
}

export const drumSlice = createSlice({
    name: "changeSounds",
    initialState,
    reducers: {
        changeAudio: (state, action) => {
            return {
                ...state,
                sounds: state[sounds][0] == heaterKit[0] ? smoothPianoKit : heaterKit,
            };
        }
    }
})

export const { changeAudio } = drumSlice.actions;

export default drumSlice.reducer;
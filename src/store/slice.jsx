import { createSlice } from "@reduxjs/toolkit";

const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const kitPath = "./src/assets/"
const heaterKit = {};
heaterKit[keys[0]] = ["Heater 1", new Audio(kitPath + "heaterKit/Heater-1.mp3")];
heaterKit[keys[1]] = ["Heater 2", new Audio(kitPath + "heaterKit/Heater-2.mp3")];
heaterKit[keys[2]] = ["Heater 3", new Audio(kitPath + "heaterKit/Heater-3.mp3")];
heaterKit[keys[3]] = ["Heater 4", new Audio(kitPath + "heaterKit/Heater-4_1.mp3")];
heaterKit[keys[4]] = ["Clap", new Audio(kitPath + "heaterKit/Heater-6.mp3")];
heaterKit[keys[5]] = ["Open HH", new Audio(kitPath + "heaterKit/Dsc_Oh.mp3")];
heaterKit[keys[6]] = ["Kick n' Hat", new Audio(kitPath + "heaterKit/Kick_n_Hat.mp3")];
heaterKit[keys[7]] = ["Kick", new Audio(kitPath + "heaterKit/RP4_KICK_1.mp3")];
heaterKit[keys[8]] = ["Closed HH", new Audio(kitPath + "heaterKit/Cev_H2.mp3")];
const smoothPianoKit = {};
smoothPianoKit[keys[0]] = ["Chord 1", new Audio(kitPath + "smoothPianoKit/Chord_1.mp3")];
smoothPianoKit[keys[1]] = ["Chord 2", new Audio(kitPath + "smoothPianoKit/Chord_2.mp3")];
smoothPianoKit[keys[2]] = ["Chord 3", new Audio(kitPath + "smoothPianoKit/Chord_3.mp3")];
smoothPianoKit[keys[3]] = ["Shaker", new Audio(kitPath + "smoothPianoKit/Give_us_a_light.mp3")];
smoothPianoKit[keys[4]] = ["Open HH", new Audio(kitPath + "smoothPianoKit/Dry_Ohh.mp3")];
smoothPianoKit[keys[5]] = ["Closed HH", new Audio(kitPath + "smoothPianoKit/Bld_H1.mp3")];
smoothPianoKit[keys[6]] = ["Punchy Kick", new Audio(kitPath + "smoothPianoKit/punchy_kick_1.mp3")];
smoothPianoKit[keys[7]] = ["Side Stick", new Audio(kitPath + "smoothPianoKit/side_stick_1.mp3")];
smoothPianoKit[keys[8]] = ["Snare", new Audio(kitPath + "smoothPianoKit/Brk_Snr.mp3")];
const initialState = {
    sounds: heaterKit,
    keys: keys,
    volume: 0.5,
    on: true,
    status: "",
}

export const drumSlice = createSlice({
    name: "changeSounds",
    initialState,
    reducers: {
        changeAudio: (state, action) => {
            let getStatus = () => {
                if (state['sounds']['Q'][0] === heaterKit['Q'][0]) {
                    return "Smooth Piano Kit";
                }
                else {
                    return "Heater Kit";
                }
            };
            return {
                ...state,
                sounds: state['sounds']['Q'][0] === heaterKit['Q'][0] ? smoothPianoKit : heaterKit,
                status: getStatus(),
            };
        },
        changeVolume: (state, action) => {
            return {
                ...state,
                volume: action.payload,
                status: `Volume: ${Math.round(action.payload*100)}%`,
            }
        },
        switchOn: (state, action) => {
            return {
                ...state,
                on: !state['on'],
            }
        },
        emptyStatus: (state, action) => {
            if (!action.payload) {
                return {
                    ...state,
                    status: "",
                }
            }
            if (action.payload === state['volume']) {
                return {
                    ...state,
                    status: "",
                }
            }
            else {
                return state;
            }
        },
        changeStatus: (state, action) => {
            return {
                ...state,
                status: action.payload,
            }
        }
    }
})

export const { changeAudio, changeVolume, switchOn, emptyStatus, changeStatus } = drumSlice.actions;

export default drumSlice.reducer;
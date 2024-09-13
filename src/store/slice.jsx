import { createSlice } from "@reduxjs/toolkit";
//Heater Kit
import Heater_Heater1 from "../assets/heaterKit/Heater-1.mp3";
import Heater_Heater2  from "../assets/heaterKit/Heater-2.mp3";
import  Heater_Heater3 from "../assets/heaterKit/Heater-3.mp3";
import Heater_Heater4 from "../assets/heaterKit/Heater-4_1.mp3";
import Heater_Clap from "../assets/heaterKit/Heater-6.mp3";
import Heater_OpenHH from "../assets/heaterKit/Dsc_Oh.mp3";
import Heater_KicknHat from "../assets/heaterKit/Kick_n_Hat.mp3";
import Heater_Kick from "../assets/heaterKit/RP4_KICK_1.mp3";
import Heater_ClosedHH from "../assets/heaterKit/Cev_H2.mp3";
//Smooth Piano Kit
import Piano_Chord1 from "../assets/smoothPianoKit/Chord_1.mp3";
import Piano_Chord2 from "../assets/smoothPianoKit/Chord_2.mp3";
import Piano_Chord3 from "../assets/smoothPianoKit/Chord_3.mp3";
import Piano_Shaker from "../assets/smoothPianoKit/Give_us_a_light.mp3";
import Piano_OpenHH from "../assets/smoothPianoKit/Dry_Ohh.mp3";
import Piano_ClosedHH from "../assets/smoothPianoKit/Bld_H1.mp3";
import Piano_PunchyKick from "../assets/smoothPianoKit/punchy_kick_1.mp3";
import Piano_SideStick from "../assets/smoothPianoKit/side_stick_1.mp3";
import Piano_Snare from "../assets/smoothPianoKit/Brk_Snr.mp3";



const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const heaterKit = {};
heaterKit[keys[0]] = ["Heater 1", new Audio(Heater_Heater1)];
heaterKit[keys[1]] = ["Heater 2", new Audio(Heater_Heater2)];
heaterKit[keys[2]] = ["Heater 3", new Audio(Heater_Heater3)];
heaterKit[keys[3]] = ["Heater 4", new Audio(Heater_Heater4)];
heaterKit[keys[4]] = ["Clap", new Audio(Heater_Clap)];
heaterKit[keys[5]] = ["Open HH", new Audio(Heater_OpenHH)];
heaterKit[keys[6]] = ["Kick n' Hat", new Audio(Heater_KicknHat)];
heaterKit[keys[7]] = ["Kick", new Audio(Heater_Kick)];
heaterKit[keys[8]] = ["Closed HH", new Audio(Heater_ClosedHH)];
const smoothPianoKit = {};
smoothPianoKit[keys[0]] = ["Chord 1", new Audio(Piano_Chord1)];
smoothPianoKit[keys[1]] = ["Chord 2", new Audio(Piano_Chord2)];
smoothPianoKit[keys[2]] = ["Chord 3", new Audio(Piano_Chord3)];
smoothPianoKit[keys[3]] = ["Shaker", new Audio(Piano_Shaker)];
smoothPianoKit[keys[4]] = ["Open HH", new Audio(Piano_OpenHH)];
smoothPianoKit[keys[5]] = ["Closed HH", new Audio(Piano_ClosedHH)];
smoothPianoKit[keys[6]] = ["Punchy Kick", new Audio(Piano_PunchyKick)];
smoothPianoKit[keys[7]] = ["Side Stick", new Audio(Piano_SideStick)];
smoothPianoKit[keys[8]] = ["Snare", new Audio(Piano_Snare)];
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
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "./store/slice"
//import "./styles/Button.css"

function Button(props) {
    let configs = useSelector(state => state.configs);
    let dispatch = useDispatch();
    let sounds = configs.sounds;
    let volume = configs.volume;
    let on = configs.on;
    let playSound = () => {
        if (on) {
            let logVolume = -Math.log10((-(9*volume)/100.0)+0.1)-1;
            sounds[props.value][1].volume = logVolume;
            sounds[props.value][1].play();
            sounds[props.value][1].currentTime = 0;
            dispatch(changeStatus(sounds[props.value][0])); 
        }
    }
    return (
        <button name={props.value} type="button" onClick={playSound}>{props.value}</button>
    )
}

export default Button
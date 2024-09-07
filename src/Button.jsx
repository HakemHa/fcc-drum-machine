import { useDispatch, useSelector } from "react-redux";
import { changeAudio } from "./store/slice";
//import "./styles/Button.css"

function Button(props) {
    let sounds = useSelector(state => state.configs.sounds);
    let playSound = () => {
        sounds[props.value].play();
        sounds[props.value].currentTime = 0;
    }
    return (
        <button name={props.value} type="button" onClick={playSound}>{props.value}</button>
    )
}

export default Button
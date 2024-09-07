import { useDispatch, useSelector } from "react-redux";
//import "./styles/Button.css"

function Button(props) {
    let sounds = useSelector(state => state.configs.sounds);
    let volume = useSelector(state => state.configs.volume);
    let playSound = () => {
        let logVolume = -Math.log10((-(9*volume)/100.0)+0.1)-1;
        sounds[props.value].volume = logVolume;
        sounds[props.value].play();
        sounds[props.value].currentTime = 0;
    }
    return (
        <button name={props.value} type="button" onClick={playSound}>{props.value}</button>
    )
}

export default Button
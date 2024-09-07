import { useDispatch, useSelector } from "react-redux";
//import "./styles/Button.css"

function Button(props) {
    let sounds = useSelector(state => state.configs.sounds);
    let dispatch = useDispatch();
    let playSound = () => {
        let action = {type: "changeSounds", ok: "OK"}
        console.log(dispatch(action));
    }
    return (
        <button name={props.value} type="button" onClick={playSound}>{props.value}</button>
    )
}

export default Button
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "./store/slice"
import "./styles/Button.css"
import React from "react";

function Button(props) {
    React.useEffect(() => {
        let button = document.querySelector(`button[name="${props.value}"]`);
        let downHandler = (k) => {
            console.log("ok");
            k = k.key;
            if (k.toUpperCase() === props.value) {
                button.classList.add("button-active");
            }
        }
        let keyPressHandler = (k) => {
            k = k.key;
            if (k.toUpperCase() === props.value) {
                button.classList.toggle("button-active");
                button.click();
            }
        };
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", keyPressHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", keyPressHandler);
        };
    }, []);
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
    };
    let changeColor = (e) => {
        e.target.classList.add("orange-press");
        setTimeout(()=>{e.target.classList.remove("orange-press")}, 100);
    };
    return (
        <button name={props.value} type="button" className="sound-button" onClick={(e) => {playSound(); changeColor(e);}}>{props.value}</button>
    )
}

export default Button
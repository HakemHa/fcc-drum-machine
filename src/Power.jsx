import { useDispatch, useSelector } from "react-redux";
import { emptyStatus, switchOn } from "./store/slice";
import Switch from "./Switch"
import "./styles/Power.css";

function Power() {
    let on = useSelector(state => state.configs.on);
    let dispatch = useDispatch();
    let turnOnOff = () => {
        dispatch(switchOn());
        if (on) {
            dispatch(emptyStatus());
            document.querySelectorAll("button").forEach((e) => {
                if (!e.classList.contains('power')) {
                    e.disabled = true;
                }
                }
            );
        }
        else {
            document.querySelectorAll("button:disabled").forEach((e) => {
                e.disabled = false;
            });
        }
        return
    }
    return (
        <div className="switch-container">
            <p>Power</p>
            <Switch onClick={turnOnOff} className="power"/>
        </div>
    )
}

export default Power
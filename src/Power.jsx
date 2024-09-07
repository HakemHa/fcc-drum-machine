import { useDispatch, useSelector } from "react-redux";
import { emptyStatus, switchOn } from "./store/slice";
import Switch from "./Switch"

function Power() {
    let on = useSelector(state => state.on);
    let dispatch = useDispatch();
    let turnOnOff = () => {
        dispatch(switchOn());
        if (!on) {
            dispatch(emptyStatus());
        }
        return
    }
    return (
        <div className="switch-container">
            <p>Power</p>
            <Switch onClick={turnOnOff}/>
        </div>
    )
}

export default Power
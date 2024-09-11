import { useDispatch, useSelector } from "react-redux";
import { changeAudio } from "./store/slice";
import Switch from "./Switch";
import "./styles/Bank.css";

function Bank() {
    let on = useSelector(state => state.configs.on);
    let dispatch = useDispatch();
    let switchBank = () => {
        if (on) {
            dispatch(changeAudio());
        }
        return
    }
    return (
        <div className="switch-container bank">
            <p>Bank</p>
            <Switch onClick={switchBank} default="off" />
        </div>
    )
}

export default Bank
import { useDispatch, useSelector } from "react-redux";
import { changeAudio } from "./store/slice";
import Switch from "./Switch"

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
        <div className="switch-container">
            <p>Bank</p>
            <Switch onClick={switchBank} />
        </div>
    )
}

export default Bank
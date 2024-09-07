import { useSelector, useDispatch} from "react-redux";
import { changeVolume, emptyStatus } from './store/slice';

function VolumeSlider() {
    let configs = useSelector(state => state.configs);
    let volume = (configs.volume*100).toString();
    let on = configs.on;
    let dispatch = useDispatch();
    let setVolume = (e) => {
        if (on) {
            let newVolume = parseFloat(e.target.value)/100;
            dispatch(changeVolume(newVolume));
            setTimeout(() => {dispatch(emptyStatus(newVolume))}, 2000);
        }
    }
    return (
        <div className="slide-container">
            <input type="range" min="0" max="100" value={volume} onChange={setVolume} className="slider" />
        </div>
    )
}

export default VolumeSlider;
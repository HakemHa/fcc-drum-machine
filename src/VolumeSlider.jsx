import { useSelector, useDispatch} from "react-redux";
import { changeVolume } from './store/slice';

function VolumeSlider() {
    let volume = useSelector(state => (state.configs.volume*100).toString());
    let dispatch = useDispatch();
    let setVolume = (e) => {
        let newVolume = parseFloat(e.target.value)/100;
        dispatch(changeVolume(newVolume));
    }
    return (
        <div className="slide-container">
            <input type="range" min="0" max="100" value={volume} onChange={setVolume} className="slider" />
        </div>
    )
}

export default VolumeSlider;
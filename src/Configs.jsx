import Power from "./Power";
import Display from "./Display";
import VolumeSlider from "./VolumeSlider";
import Bank from "./Bank";
import "./styles/Configs.css";

function Configs () {
    return (
        <div className="configs">
            <Power />
            <Display />
            <VolumeSlider />
            <Bank />
        </div>
    )
}

export default Configs
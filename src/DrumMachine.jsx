import Logo from './Logo';
import Buttons from './Buttons';
import Configs from './Configs';
import './styles/DrumMachine.css'

function DrumMachine() {
    return (
        <div className="machine">
            <div className="logo-container">
                <Logo />
            </div>
            <div className="buttons-container">
                <Buttons />
                <Configs />
            </div>
        </div>
    )
}

export default DrumMachine
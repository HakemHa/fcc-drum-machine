import Logo from './Logo';
import Buttons from './Buttons';
import Configs from './Configs';
//import './styles/DrumMachine.css'

function DrumMachine() {
    return (
        <div>
            <div>
                <Logo />
            </div>
            <div>
                <Buttons />
                <Configs />
            </div>
        </div>
    )
}

export default DrumMachine
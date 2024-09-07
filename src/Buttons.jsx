import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
//import "./styles/Buttons.css"

function Buttons() {
    let keys = useSelector(state => state.configs.keys);
    let buttons = [];
    for (let i=0; i<keys.length;i++) {
        buttons.push(<Button key={keys[i]} value={keys[i]}/>)
    }
    return (
        <div className="buttons">
            {buttons}
        </div>
    )
}

export default Buttons
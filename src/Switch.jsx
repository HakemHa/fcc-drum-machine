import "./styles/Switch.css";

function Switch(props) {
    let alternate = (e) => {
        let onOff = e.target;
        if(e.target.localName == "button") {
            onOff = e.target.children[0];
        }
        if(onOff.classList.contains("switch-on")) {
            onOff.classList.remove("switch-on");
            onOff.classList.add("switch-off");
        }
        else {
            onOff.classList.remove("switch-off");
            onOff.classList.add("switch-on");
        }
        return;
    }
    return (
        <button className={`switch ${props.className || ""}`} onClick={(e) => {alternate(e); props.onClick()}}>
            <div className={props.default || "switch-on"}></div>
        </button>
    )
}

export default Switch
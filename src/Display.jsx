import { useSelector } from "react-redux";

function Display() {
    let status = useSelector(state => state.configs.status);
    return (
        <div className="display-container">
            <p className="display-value">{status}</p>
        </div>
    )
}

export default Display;
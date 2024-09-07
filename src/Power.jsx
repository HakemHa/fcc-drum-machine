import Switch from "./Switch"

function Power() {
    let turnOnOff = () => {
        return
    }
    return (
        <div className="switch-container">
            <p>Power</p>
            <Switch onClick={turnOnOff}/>
        </div>
    )
}

export default Power
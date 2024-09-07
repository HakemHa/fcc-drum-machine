function Switch(props) {
    return (
        <button className="switch" onClick={props.onClick}>
            <div className="switch-state">clickme</div>
        </button>
    )
}

export default Switch
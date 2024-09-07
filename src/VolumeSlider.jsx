function VolumeSlider() {
    return (
        <div className="slide-container">
            <input type="range" min="0" max="100" value="50" className="slider" />
        </div>
    )
}

export default VolumeSlider;
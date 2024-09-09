import { useDispatch, useSelector } from "react-redux";
import DrumMachine from "./DrumMachine";
import "./styles/App.css"

function App() {

  return (
    <div className="main-container">
      <DrumMachine />
    </div>
  )
}

export default App

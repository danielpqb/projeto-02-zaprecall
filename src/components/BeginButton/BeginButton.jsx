import ReactDOM from "react-dom"
import App from "../App"
import Screen02 from "../Screen02/Screen02"
import './style.css'

export default function BeginButton() {
    return (
        <div className="beginButton" onClick={() => { ReactDOM.render(<App screen={<Screen02 />} />, document.querySelector('.root')) }}>
            Iniciar Recall!
        </div>
    )
}
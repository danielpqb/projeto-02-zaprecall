import './style.css'

export default function BeginButton({ setScreen }) {
    return (
        <div className="beginButton" onClick={() => { setScreen(false) }}>
            Iniciar Recall!
        </div>
    )
}
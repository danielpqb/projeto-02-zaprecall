export default function BeginButton() {
    function changeScreen() {
        return
    }
    return (
        <div className="beginButton" onClick={() => { changeScreen(2) }}>
            Iniciar Recall!
        </div>
    )
}
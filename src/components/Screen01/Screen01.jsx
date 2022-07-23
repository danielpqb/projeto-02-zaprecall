import BeginButton from "../BeginButton/BeginButton"
import ZapRecallIcon from "../ZapRecallIcon/ZapRecallIcon"
import ZapRecallLogo from "../ZapRecallLogo/ZapRecallLogo"
import './style.css'

export default function Screen01() {
    return (
        <div className="screen01">
            <ZapRecallIcon />
            <ZapRecallLogo />
            <select className="chooseDeck" onChange='{changeDeck}' required>
                <option className="placeholder" value="0" selected hidden disabled>Escolha seu deck</option>
                <option value="1">React</option>
                <option value="2">QQQQQ</option>
            </select>
            <input className="zapGoal" placeholder="Digite sua meta de zaps...">

            </input>
            <BeginButton />
        </div>
    )
}
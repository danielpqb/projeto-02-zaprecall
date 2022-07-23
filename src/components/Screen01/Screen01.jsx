import BeginButton from "../BeginButton/BeginButton"
import ZapRecallIcon from "../ZapRecallIcon/ZapRecallIcon"
import ZapRecallLogo from "../ZapRecallLogo/ZapRecallLogo"
import './style.css'

export default function Screen01() {
    return (
        <div className="screen01">
            <ZapRecallIcon />
            <ZapRecallLogo />
            <BeginButton />
        </div>
    )
}
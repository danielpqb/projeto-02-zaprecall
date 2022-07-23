import ZapRecallIcon from "../ZapRecallIcon/ZapRecallIcon"
import ZapRecallLogo from "../ZapRecallLogo/ZapRecallLogo"
import './style.css'

export default function Header() {
    return (
        <div className="header">
            <ZapRecallIcon />
            <ZapRecallLogo />
        </div>
    )
}
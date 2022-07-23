import ZapRecallIcon from "../ZapRecallIcon"
import ZapRecallLogo from "../ZapRecallLogo"
import './style.css'

export default function Header() {
    return (
        <div className="header">
            <ZapRecallIcon />
            <ZapRecallLogo />
        </div>
    )
}
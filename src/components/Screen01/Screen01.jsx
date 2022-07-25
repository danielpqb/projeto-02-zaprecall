import React from "react"
import BeginButton from "../BeginButton/BeginButton"
import ZapRecallIcon from "../ZapRecallIcon/ZapRecallIcon"
import ZapRecallLogo from "../ZapRecallLogo/ZapRecallLogo"
import './style.css'

export default function Screen01({ deckChoice, setDeckChoice, setScreen }) {
    function handleChange(e) {
        console.log(e.target.value)
        setDeckChoice(e.target.value)
    }

    return (
        <div className="screen01">
            <ZapRecallIcon />
            <ZapRecallLogo />
            <select className="chooseDeck" value={deckChoice} onChange={handleChange} required>
                <option className="placeholder" defaultValue={1} hidden disabled>Escolha seu deck</option>
                <option value="1">React</option>
                <option value="2">Testando 2</option>
                <option value="3">Testando 3</option>
                <option value="4">Testando 4</option>
            </select>
            <input className="zapGoal" placeholder="Digite sua meta de zaps...">

            </input>
            <BeginButton setScreen={setScreen} deckChoice={deckChoice} />
        </div>
    )
}
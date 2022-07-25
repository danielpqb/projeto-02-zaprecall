import React from 'react'
import '../assets/css/reset.css'
import '../assets/css/style.css'
import Screen01 from './Screen01/Screen01'
import Screen02 from './Screen02/Screen02'

export default function App() {
    const [screen, setScreen] = React.useState(true)
    const [deckChoice, setDeckChoice] = React.useState(0)

    return (
        <div className="app">
            {screen ? <Screen01 setScreen={setScreen} deckChoice={deckChoice} setDeckChoice={setDeckChoice} /> : <Screen02 deckChoice={deckChoice} />}
        </div>
    )
}
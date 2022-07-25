import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Question from "../Question/Question"
import React from "react"
import './style.css'

export default function Screen02({ deckChoice }) {
    const [answersFlag, setAnswersFlag] = React.useState([])
    const [tallerFooter, setTallerFooter] = React.useState('')
    const [isPerfect, setIsPerfect] = React.useState(true)

    console.log('deckChoice:', deckChoice)

    let deck = []
    switch (deckChoice) {
        case 1:
            console.log('case 1')
            deck = [
                { question: '1', answer: '1' },
                { question: '2', answer: '2' },
                { question: '3', answer: '3' },
                { question: '4', answer: '4' },
                { question: '5', answer: 'interagindo com a DOM para colocar componentes React na mesma.' },
                { question: '6', answer: 'gerenciar os pacotes necessários e suas dependências.' },
                { question: '7', answer: 'passar diferentes informações para componentes.' },
                { question: '8', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.' },
            ]
            break
        case 2:
            console.log('case 2')
            break
        case 3:
            console.log('case 3')
            break
        case 4:
            console.log('case 4')
            break
        default:
            console.log('default')
            deck = [
                { question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript.' },
                { question: 'O React é __', answer: 'uma biblioteca JavaScript para construção de interfaces.' },
                { question: 'Componentes devem iniciar com __', answer: 'letra maiúscula.' },
                { question: 'Podemos colocar __ dentro do JSX', answer: 'expressões' },
                { question: 'O ReactDOM nos ajuda __', answer: 'interagindo com a DOM para colocar componentes React na mesma.' },
                { question: 'Usamos o npm para __', answer: 'gerenciar os pacotes necessários e suas dependências.' },
                { question: 'Usamos props para __', answer: 'passar diferentes informações para componentes.' },
                { question: 'Usamos estado (state) para __', answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.' },
            ]
            break
    }


    deck.sort(() => { return Math.random() - 0.5 })
    const questions = deck.filter((value, index) => { return index < 4 })

    return (
        <div className="screen02">
            <Header />
            {questions.map((question, index) => {
                return (<Question
                    question={question.question}
                    answer={question.answer}
                    id={index + 1}
                    key={index}
                    setAnswersFlag={setAnswersFlag}
                    answersFlag={answersFlag}
                    setTallerFooter={setTallerFooter}
                    setIsPerfect={setIsPerfect} />)
            })}
            <Footer
                answersFlag={answersFlag}
                tallerFooter={tallerFooter}
                isPerfect={isPerfect} />
        </div>
    )
}
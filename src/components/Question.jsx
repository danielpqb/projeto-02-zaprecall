import React from "react"

export default function Question(props) {
    const [questionStateClass, setQuestionStateClass] = React.useState('')

    function changeQuestionStateClass() {
        switch (questionStateClass) {
            case '':
                setQuestionStateClass('opened')
                break
            case 'opened':
                setQuestionStateClass('revealed')
                break
            case 'revealed':
                setQuestionStateClass('answered')
                break
            default:
                setQuestionStateClass('')
                break
        }
    }

    const [questionContent, setQuestionContent] = React.useState()

    return (
        <div className={"question " + questionStateClass} onClick={() => { changeQuestionStateClass() }}>
            {"Pergunta " + props.id}
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}
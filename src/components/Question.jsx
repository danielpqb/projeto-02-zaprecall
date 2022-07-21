import React from "react"

export default function Question(props) {
    const [questionStateClass, setQuestionStateClass] = React.useState('')

    function RecallFlag(props) {
        return (
            <div className={"recallFlag " + props.flag}>
                {props.content}
            </div>
        )
    }

    return (
        <div className={"question " + questionStateClass} id={props.id}>
            {
                questionStateClass === '' &&
                <>
                    {"Pergunta " + props.id}
                    <ion-icon name="play-outline" onClick={() => { setQuestionStateClass('opened') }}></ion-icon>
                </>
            }
            {
                questionStateClass === 'opened' &&
                <>
                    {props.question}
                    <ion-icon name="refresh-outline" onClick={() => { setQuestionStateClass('revealed') }}></ion-icon>
                </>
            }
            {
                questionStateClass === 'revealed' &&
                <>
                    {props.answer}
                    <div className="recallFlags">
                        <RecallFlag flag='red' content='Não lembrei' onClick={() => { setQuestionStateClass('answered') }} />
                        <RecallFlag flag='orange' content='Quase não lembrei' onClick={() => { setQuestionStateClass('answered') }} />
                        <RecallFlag flag='green' content='Zap!' onClick={() => { setQuestionStateClass('answered') }} />
                    </div>
                </>
            }
            {
                questionStateClass === 'answered' &&
                <>
                    {"Pergunta " + props.id}
                </>
            }
        </div>
    )
}
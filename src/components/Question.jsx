import React from "react"

export default function Question(props) {
    const [questionStateClass, setQuestionStateClass] = React.useState('')

    function changeQuestionStateClass() {
        function RecallFlag(props) {
            return (
                <div className={"recallFlag " + props.flag}>
                    {props.content}
                </div>
            )
        }
        switch (questionStateClass) {
            case '':
                setQuestionStateClass('opened')
                setQuestionContent(
                    <>
                        {props.question}
                        <ion-icon name="refresh-outline" onClick={() => { changeQuestionStateClass() }}></ion-icon>
                    </>)
                break
            case 'opened':
                setQuestionStateClass('revealed')
                setQuestionContent(
                    <>
                        {props.answer}
                        <div className="recallFlags">
                            <RecallFlag flag='red' content='Não lembrei' onClick={() => { changeQuestionStateClass() }} />
                            <RecallFlag flag='orange' content='Quase não lembrei' onClick={() => { changeQuestionStateClass() }} />
                            <RecallFlag flag='green' content='Zap!' onClick={() => { changeQuestionStateClass() }} />
                        </div>
                    </>)
                break
            case 'revealed':
                setQuestionStateClass('answered')
                setQuestionContent(
                    <>
                        {"Pergunta " + props.id}
                    </>)
                break
            default:
                return
        }
        console.log(questionStateClass)
    }

    const [questionContent, setQuestionContent] = React.useState(
        <>
            {"Pergunta " + props.id}
            <ion-icon name="play-outline" onClick={() => { changeQuestionStateClass() }}></ion-icon>
        </>
    )

    return (
        <div className={"question " + questionStateClass} id={props.id}>
            {questionContent}
        </div>
    )
}
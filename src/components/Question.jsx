import React from "react"

function RecallFlag({ color, content, setQuestionStateClass, setAnswersFlag, answersFlag, questionId, setFlag, setTallerFooter, setIsPerfect }) {
    function selectFlagIcon(color) {
        switch (color) {
            case 'red':
                return 'close-circle'
            case 'orange':
                return 'help-circle'
            case 'green':
                return 'checkmark-circle'
            default:
                break
        }
    }

    return (
        <div
            className={"recallFlag " + color}
            onClick={() => {
                setFlag(' ' + color + 'Flag')
                setQuestionStateClass(' answered')
                setAnswersFlag(() => { return [...answersFlag, { questionId: questionId, icon: selectFlagIcon(color), flag: ' ' + color + 'Flag' }] })
                if (answersFlag.length >= 3) {
                    setTallerFooter(' footerTaller')
                }
                if (color === 'red') {
                    setIsPerfect(false)
                }
            }}>
            {content}
        </div>
    )
}

export default function Question({ question, answer, id, answersFlag, setAnswersFlag, setTallerFooter, setIsPerfect }) {
    const [questionStateClass, setQuestionStateClass] = React.useState('')
    const [flag, setFlag] = React.useState('')

    function selectFlagIcon(flag) {
        switch (flag) {
            case ' redFlag':
                return 'close-circle'
            case ' orangeFlag':
                return 'help-circle'
            case ' greenFlag':
                return 'checkmark-circle'
            default:
                break
        }
    }

    return (
        <div className={"question" + questionStateClass + flag} id={id}>
            {
                questionStateClass === '' &&
                <>
                    {"Pergunta " + id}
                    <ion-icon
                        name="play-outline"
                        onClick={() => { setQuestionStateClass(' opened') }}>
                    </ion-icon>
                </>
            }
            {
                questionStateClass === ' opened' &&
                <>
                    {question}
                    <ion-icon
                        name="refresh-outline"
                        onClick={() => { setQuestionStateClass(' revealed') }}>
                    </ion-icon>
                </>
            }
            {
                questionStateClass === ' revealed' &&
                <>
                    {answer}
                    <div className="recallFlags">
                        <RecallFlag
                            color='red'
                            content='Não lembrei'
                            setQuestionStateClass={setQuestionStateClass}
                            answersFlag={answersFlag}
                            setAnswersFlag={setAnswersFlag}
                            questionId={id}
                            setFlag={setFlag}
                            setTallerFooter={setTallerFooter}
                            setIsPerfect={setIsPerfect} />
                        <RecallFlag
                            color='orange'
                            content='Quase não lembrei'
                            setQuestionStateClass={setQuestionStateClass}
                            answersFlag={answersFlag}
                            setAnswersFlag={setAnswersFlag}
                            questionId={id}
                            setFlag={setFlag}
                            setTallerFooter={setTallerFooter}
                            setIsPerfect={setIsPerfect} />
                        <RecallFlag
                            color='green'
                            content='Zap!'
                            setQuestionStateClass={setQuestionStateClass}
                            answersFlag={answersFlag}
                            setAnswersFlag={setAnswersFlag}
                            questionId={id}
                            setFlag={setFlag}
                            setTallerFooter={setTallerFooter}
                            setIsPerfect={setIsPerfect} />
                    </div>
                </>
            }
            {
                questionStateClass === ' answered' &&
                <>
                    {"Pergunta " + id}
                    <ion-icon name={selectFlagIcon(flag)}></ion-icon>
                </>
            }
        </div>
    )
}
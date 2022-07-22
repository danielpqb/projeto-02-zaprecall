import React from "react"

function RecallFlag({ color, content, setQuestionStateClass, setAnswersFlag, answersFlag, questionId, setFlag, flag }) {
    return (
        <div
            className={"recallFlag " + color}
            onClick={() => {
                setFlag(' ' + color + 'Flag')
                setQuestionStateClass(' answered')
                setAnswersFlag([...answersFlag, { flag: flag, questionId: questionId }])
            }}>
            {content}
        </div>
    )
}

export default function Question({ question, answer, id, answersFlag, setAnswersFlag }) {
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
                            flag={flag}
                            setFlag={setFlag} />
                        <RecallFlag
                            color='orange'
                            content='Quase não lembrei'
                            setQuestionStateClass={setQuestionStateClass}
                            answersFlag={answersFlag}
                            setAnswersFlag={setAnswersFlag}
                            questionId={id}
                            flag={flag}
                            setFlag={setFlag} />
                        <RecallFlag
                            color='green'
                            content='Zap!'
                            setQuestionStateClass={setQuestionStateClass}
                            answersFlag={answersFlag}
                            setAnswersFlag={setAnswersFlag}
                            questionId={id}
                            flag={flag}
                            setFlag={setFlag} />
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
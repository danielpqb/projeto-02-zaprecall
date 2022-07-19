import Header from "./Header"
import Footer from "./Footer"
import Question from "./Question"

export default function Screen02() {
    const questions = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ]

    return (
        <div className="screen02">
            <Header />
            {questions.map((question) => { return (<Question id={question.id} />) })}
            <Footer />
        </div>
    )
}
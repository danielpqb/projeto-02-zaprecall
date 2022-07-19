export default function Question(props) {
    return (
        <div className="question" onClick={() => { }}>
            Pergunta {props.id}
            <ion-icon name="play-outline"></ion-icon>
        </div>
    )
}
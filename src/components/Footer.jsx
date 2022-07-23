export default function Footer({ answersFlag, tallerFooter, isPerfect }) {

    function FooterIcons() {
        return (
            <div className="footerIcons">
                {answersFlag.map((question, index) => {
                    return <ion-icon name={question.icon} key={index}></ion-icon>
                })}
            </div>
        )
    }

    function FooterHeader() {
        return (
            <div className="footerHeader" >
                {
                    isPerfect === true ?
                        <>
                            <b>🥳</b> Parabéns!
                        </>
                        :
                        <>
                            <b>😥</b> Putz...
                        </>
                }
            </div>
        )
    }

    function FooterMessage() {
        return (
            <div className="footerMessage" >
                {
                    isPerfect === true ?
                        <>
                            Você não esqueceu de nenhum flashcard!
                        </>
                        :
                        <>
                            Ainda faltam alguns...
                            Mas não desanime!
                        </>
                }
            </div>
        )
    }

    return (
        <div className={"footer" + tallerFooter} >
            <div className="footerGameOver">
                {
                    answersFlag.length >= 4 &&
                    <>
                        <FooterHeader />
                        <FooterMessage />
                    </>
                }
            </div>
            <div className="footerStats">
                {answersFlag.length + '/4 CONCLUÍDOS'}
                <FooterIcons />
            </div>
            <div className="footerRestartGame">

            </div>
        </div >
    )
}
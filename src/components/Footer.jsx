import React from "react"

export default function Footer() {
    const [answeredQnt, setAnsweredQnt] = React.useState(0)

    return (
        <div className="footer">
            {answeredQnt}/8 CONCLUÍDOS
        </div>
    )
}
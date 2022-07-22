import React from "react"

export default function Footer({ answersFlag }) {
    return (
        <div className="footer">
            {answersFlag.length}/8 CONCLUÍDOS
        </div>
    )
}
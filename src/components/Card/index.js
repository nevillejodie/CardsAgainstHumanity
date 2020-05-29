import React from 'react'
import css from "./card.module.css"

const Card = ({cardColour, text}) => {
    let cardClass = ""
    if (cardColour === "white") {
        cardClass = css.whiteCard
    } else if (cardColour === "black") {
        cardClass = css.blackCard
    }
    return (
        <div className={`${css.card} ${cardClass}`}>
            <p>{text}</p>
        </div>
    )
}

export default Card
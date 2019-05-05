import React from "react";

const Card = ({ flippedCards, matchedCards, text, onFlip, cardNo }) => {
    const isMatched = matchedCards.includes(cardNo);
    const isFlipped = flippedCards.includes(cardNo) || isMatched;
    const onHandleFlip = () => {
        if (isMatched) {
            return;
        }
        onFlip(cardNo, text, !isFlipped);
    };
    return (
        <div
            onClick={onHandleFlip}
            className={`card-div ${isFlipped ? "flipped" : ""} ${
                isMatched ? "matched" : ""
            }`}
        >
            <div className={`content-holder`}>{text}</div>
        </div>
    );
};

export default Card;

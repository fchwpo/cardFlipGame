import React, { Component } from "react";
import Card from "./Card";
import { Score } from "./Score";

export class CardMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flippedCards: [],
            matchedCards: [],
            score: 0,
            userName: ""
        };
        this.randomNumbers = Array.from({ length: 9 }, () =>
            Math.floor(Math.random() * 100)
        );
        this.randomNumbers = [
            ...this.randomNumbers,
            ...this.randomNumbers
        ].sort(() => Math.random() - 0.5);
    }
    onHandleCardFlip = (cardNo, value, flipped) => {
        const curState = this.state;
        let matchedCards = [...curState.matchedCards];
        let flippedCards = [];
        if (flipped && curState.flippedCards.length === 1) {
            const card1Val = curState.flippedCards[0].substr(
                0,
                curState.flippedCards[0].indexOf(".")
            );
            const card2Val = value;
            card1Val == card2Val
                ? matchedCards.push(...curState.flippedCards, cardNo) &&
                  (curState.score += 5)
                : curState.score-- && (flippedCards.length = 0);
        } else {
            flippedCards = flipped
                ? [...this.state.flippedCards, cardNo]
                : [...this.state.flippedCards].filter(v => v !== cardNo);
        }
        this.setState({
            flippedCards,
            matchedCards
        });
    };
    componentDidUpdate() {
        console.log("Score :" + this.state.score);
        if (this.state.matchedCards.length === this.randomNumbers.length) {
            alert(`Hey you won the game. Your score is ${this.state.score}`);
            this.setState({
                matchedCards: [],
                flippedCards: [],
                score: []
            });
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="cards-holder">
                    {this.randomNumbers.map((text, index) => (
                        <Card
                            text={text}
                            cardNo={`${text}.${index}`}
                            flippedCards={this.state.flippedCards}
                            onFlip={this.onHandleCardFlip}
                            matchedCards={this.state.matchedCards}
                        />
                    ))}
                </div>
                <Score score={this.state.score} />
            </React.Fragment>
        );
    }
}

export default CardMatch;

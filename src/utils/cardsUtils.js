import React from "react";

class cardsUtils extends React.Component {
    constructor() {
        super();
        this.rndCarte = this.rndCarte.bind(this)
        this.transformCardIntoInt = this.transformCardIntoInt.bind(this)
    }
    rndCarte() {

        var rndNumTemp = Math.floor(Math.random() * 53);

        if (rndNumTemp > 52) { rndNumTemp = rndNumTemp - 10 }
        else if (rndNumTemp < 1) { rndNumTemp = rndNumTemp + 10 }

        return this.cardArray[rndNumTemp - 1]
    }

    transformCardIntoInt(cardValue) {
        if (cardValue === "K" || cardValue === "Q" || cardValue === "J" || cardValue === "A" || cardValue === "0") {
            cardValue = "10"
        }

        return parseInt(cardValue)
    }



    render() {
        return (
            <div>

            </div>
        )
    }
}
export default cardsUtils
import React from "react";
import cardsUtils from "../utils/cardsUtils.js"



class Cartes extends React.Component {


  render() {
    return (
      <div className="cartes">
        {this.props.cardList.map(
          function (carteFaceValue) {
            const url = "https://deckofcardsapi.com/static/img/" + carteFaceValue + "." + "png"
            // determine la carte en fonction de la valeur de carteFaceValue
            return (
              <img src={url} style={{ height: 150, width: 100 }} />
            )
          })}
      </div>
    );
  }
}




export default Cartes;

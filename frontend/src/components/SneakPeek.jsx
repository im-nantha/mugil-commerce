import React from "react";
import SneakPeekCardsData from "../data/SneakPeekData.json";

function SneakPeekCards(props) {
  return (
    <div className="mugil-sp-cards">
      <img src={props.productImage} alt="image" />
      <p className="sneak-peak-overlay">{props.productType}</p>
    </div>
  );
}

function SneakPeek() {
  return (
    <section className="mugil-sneak-peek">
      <h2 className="sneak-peek-title">Sneak Peek</h2>
      <div className="mugil-sp-card-wrapper">
        {SneakPeekCardsData.map((item, index) => (
          <SneakPeekCards
            key={index}
            productType={item.productType}
            productImage={item.productImage}
          />
        ))}
      </div>
    </section>
  );
}

export default SneakPeek;

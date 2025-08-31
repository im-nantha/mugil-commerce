import React from "react";
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll.js';
import "./SneakPeek.scss"

function SneakPeekCards(props) {
  const [ref, isVisible] = useFadeInOnScroll();
  return (
    <div ref={ref} className={`mugil-sp-cards fade-in ${isVisible ? 'visible' : ''}`}>
      <img src={props.productImage} alt="image" />
      <p className="sneak-peak-overlay">{props.productType}</p>
    </div>
  );
}

function SneakPeek({SneakPeakTitle,SneakPeekCardsData}) {
  return (
    <section className="mugil-sneak-peek">
      <h2 className="sneak-peek-title">{SneakPeakTitle}</h2>
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

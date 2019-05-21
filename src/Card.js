import { SUITS } from './constants';
import React from "react";
import "./card.scss";

const Card = ({ suitId, value }) => {
  const suitIcon = getIconBySuitId(suitId)
  return (
    <div className="card">
      <p className="card-value top-left">10</p>
      <div className="suit-icon-container">
        <i className="suit-icon">{suitIcon}</i>
      </div>
      <p className="card-value bottom-right">10</p>
    </div>
  );
};

function getIconBySuitId(id) {
  if (id === SUITS.CLUBS) {
    return "♣";
  };
  if (id === SUITS.DIAMONDS) {
    return "♢";
  };
  if (id === SUITS.HEARTS) {
    return "♡";
  };
  if (id === SUITS.SPADES) {
    return "♠";
  };
};

export default Card;

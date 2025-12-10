import React from "react";
import "../styles/Card.css";
import type { MagicCard } from "../types/MagicCard";

function Card({ card }: { card: MagicCard }) {
  return (
    <>
      <div className="card">
        <p className="card-title">{card.name}</p>
        <img src={card.image_url} alt={card.name} />
        <div className="card-footer">
          <p className="card-price">Cardmarket price : {card.price_eur.toFixed(2)}€</p>
          <div className="quantity-selection">
            <button>+</button>
            <input type="number" />
            <button>-</button>
          </div>
        </div>
        <button>Add to cart</button>
      </div>
    </>
  );
}

export default Card;

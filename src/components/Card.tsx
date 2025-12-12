import { useState } from "react";
import { useShoppingContext } from "../context/ShoppingProvider";
import "../styles/Card.css";
import type { MagicCard } from "../types/MagicCard";

function Card({ card }: { card: MagicCard }) {
  const [quantity, setQuantity] = useState<number>(0);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(event.target.value) || 0
    value = Math.min(Math.max(value,0), 99);
    setQuantity(value);
  }

  const handleIncrement = () =>{
    setQuantity((prev) => Math.min(prev + 1, 99));
  }
  const handleDecrement = () =>{
    setQuantity((prev) => Math.max(prev - 1, 0));
  }

  const {addToCart} = useShoppingContext();

  const handleAddToCart = () => {
    if(quantity === 0){
      alert("Please select a quantity greater than 0");
      return;
    }
    addToCart(card.scryfall_id, quantity, card.price_eur);
    setQuantity(0);
  }

  return (
    <>
      <div className="card">
        <p className="card-title">{card.name}</p>
        <img src={card.image_url} alt={card.name} />
        <div className="card-footer">
          <p className="card-price">Cardmarket price : {card.price_eur.toFixed(2)}€</p>
          <div className="quantity-selection">
            <button onClick={handleIncrement}>+</button>
            <input type="number" onChange={handleQuantityChange} value={quantity} />
            <button onClick={handleDecrement}>-</button>
          </div>
        </div>
        <button onClick={handleAddToCart}>Add to cart</button>
      </div>
    </>
  );
}

export default Card;

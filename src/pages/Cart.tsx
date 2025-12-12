import { useShoppingContext } from "../context/ShoppingProvider";
import Card from "../components/Card";
import type { MagicCard } from "../types/MagicCard";

export default function Cart() {
  const { cart, sets } = useShoppingContext();

  const findCard = (scryfall_id: string): MagicCard | undefined => {
    for (const setCode in sets) {
      const card = sets[setCode].find((c) => c.scryfall_id === scryfall_id);
      if (card) return card;
    }
  };

  if (cart.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className="bg-cart-page">
      <h1>Shopping Cart</h1>
      {cart.map((item) => {
        const card = findCard(item.scryfall_id);
        if (!card) return null;
        return (
          <div key={item.scryfall_id}>
            <p>{card.name}</p>
            <p>Qty: {item.quantity}</p>
            <p>Price: €{(item.price_eur * item.quantity).toFixed(2)}</p>
          </div>
        );
      })}
    </div>
  );
}

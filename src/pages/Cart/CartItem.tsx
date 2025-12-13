import type { CartItemProps } from "../../types/CartItem";
import "../../styles/CartItem.css"

export function CartItem({
  cartItem,
  card,
  onRemove,
  onQuantityChange,
}: CartItemProps) {
  return (
    <div className="cartItem">
      <img src={card.image_url} alt={card.name} />
      <p>{card.name}</p>
      <p>{card.price_eur.toFixed(2)}€ each</p>
      <div>
        Quantity : {cartItem.quantity}
        <button
          onClick={() =>
            onQuantityChange(cartItem.scryfall_id, cartItem.quantity + 1)
          }
        >
          +
        </button>
        <button
          onClick={() =>
            onQuantityChange(cartItem.scryfall_id, cartItem.quantity - 1)
          }
          disabled={cartItem.quantity <= 1}
        >
          -
        </button>
      </div>
      <p>Subtotal : {(card.price_eur * cartItem.quantity).toFixed(2)}€</p>
      <button onClick={() => onRemove(cartItem.scryfall_id)}>Remove</button>
    </div>
  );
}

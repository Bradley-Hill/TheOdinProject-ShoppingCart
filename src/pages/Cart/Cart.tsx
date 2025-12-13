import { useShoppingContext } from "../../context/ShoppingProvider";
import { CartItem } from "./CartItem";
import type { MagicCard } from "../../types/MagicCard";
import CartSidebar from "./CartSidebar";
import "../../styles/Cart.css";

export default function Cart() {
  const { cart, sets, removeFromCart, clearCart, updateCartItemQuantity } =
    useShoppingContext();

  const findCard = (scryfall_id: string): MagicCard | undefined => {
    for (const setCode in sets) {
      const card = sets[setCode].find((c) => c.scryfall_id === scryfall_id);
      if (card) return card;
    }
  };

  return (
    <div className="bg-cart-page">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cartItems">
          {cart.map((item) => {
            const card = findCard(item.scryfall_id);
            if (!card) return null;
            return (
              <CartItem
                key={item.scryfall_id}
                cartItem={item}
                card={card}
                onRemove={removeFromCart}
                onQuantityChange={(scryfall_id, quantity) => {
                  if (quantity <= 0) {
                    removeFromCart(scryfall_id);
                  } else {
                    updateCartItemQuantity(scryfall_id, quantity);
                  }
                }}
              />
            );
          })}
        </div>
      )}
      <CartSidebar cart={cart} onClearCart={clearCart} />
    </div>
  );
}

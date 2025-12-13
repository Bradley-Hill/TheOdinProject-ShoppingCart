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

  const handleExportList = async () => {
    const exportText = cart.map((item)=>{
      const card = findCard(item.scryfall_id)
      return `${item.quantity} ${card?.name || "Unknown Card"}`
    })
    .join("\n");

    try{
      await navigator.clipboard.writeText(exportText)
      alert("Decklist copied to clipboard!")
    } catch(err){
      console.error("Failed to copy to clipboard:", err);
      alert("Failed to copy decklist to clipboard.");
    }
  }

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
      <CartSidebar cart={cart} onClearCart={clearCart} onExportList={handleExportList} />
    </div>
  );
}

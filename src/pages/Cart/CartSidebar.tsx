import type { CartItem, CartSidebarProps } from "../../types/CartItem";

export function CartSidebar({cart, onClearCart}: CartSidebarProps) {
  const total = cart.reduce(
    (sum:number, item:CartItem) => sum + item.price_eur * item.quantity,
    0
  );

  const handleClearCart = () => {
    if (window.confirm("Are you sure you want to clear the cart?")) {
      onClearCart();
    }
  };

  const handleExportList = () => {
    console.log("Export list feature coming soon!");
    // TODO: Implement export list functionality
  };

  const handlePurchase = () => {
    window.open("https://www.cardmarket.com", "_blank");
  };

  return (
    <div className="cartSidebar">
      <div className="cartTotal">
        <h2>Total : {total.toFixed(2)} EUR</h2>
        <p>Items: {cart.length}</p>
      </div>
      <div className="cartActions">
        <button className="btn-purchase" onClick={handlePurchase}>
          Purchase on Cardmarket
        </button>
        <button className="btn-export" onClick={handleExportList}>
          Export List
        </button>
        <button className="btn-clear-cart" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default CartSidebar;

import { Link } from "react-router-dom";
import Logo from "../assets/deckbuilder_icon.svg";
import { useShoppingContext } from "../context/ShoppingProvider";
import "../styles/Navbar.css";

function Navbar() {
  const { cart } = useShoppingContext();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="Website Logo" className="logo" />
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shopping">Shop</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/cart" className="cart-link">
          Cart{" "}
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </Link>
      </div>
    </nav>
  );
}
export default Navbar;

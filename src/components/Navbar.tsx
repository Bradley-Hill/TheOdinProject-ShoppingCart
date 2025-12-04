import { Link } from "react-router-dom";
import "./Navbar.css"


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">Logo</Link>
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
      <div className="navbar-left">
        <Link to="/cart" className="cart-link">Cart</Link>
      </div>
    </nav>
  );
}
export default Navbar;

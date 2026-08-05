import { Link } from "react-router-dom";
import "./App.css";

function Nav({ cart }) {
  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>

        <li className="cart-nav">
          <Link to="/cart">
            🛒 Cart ({totalItems})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
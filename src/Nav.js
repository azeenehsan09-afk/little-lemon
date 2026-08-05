import { Link } from "react-router-dom";
import "./App.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li><Link to="/reservation">Reservations</Link></li>
         <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
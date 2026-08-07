import Logo from "./images/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <img className="foot" src={Logo} alt="Little Lemon logo" />

      <div>
        <h4>Doormat Navigation</h4>
        <ul>
         <li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/menu">Menu</Link></li>
<li><Link to="/reservation">Reservations</Link></li>
<li><Link to="/order">Order Online</Link></li>
<li><Link to="/login">Login</Link></li>
        </ul>
      </div>

      <div>
         <h4>Contact</h4>
        <ul>
          <li>📍 123 Mediterranean Street, Chicago, IL</li>
          <li>📞 +1 (312) 555-1234</li>
          <li>✉️ info@littlelemon.com</li>
        </ul>
      </div>

      <div>
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter (X)
            </a>
          </li>
        </ul>
      </div>

    </footer>
  );
}
export default Footer;

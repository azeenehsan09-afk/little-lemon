import Logo from "./images/Logo.png";

function Footer() {
  return (
    <footer>
      <img className="foot" src={Logo} alt="Little Lemon logo" />

      <div>
        <h4>Doormat Navigation</h4>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservation">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
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

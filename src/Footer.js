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
          <li>Address</li>
          <li>Phone Number</li>
          <li>Email</li>
        </ul>
      </div>

      <div>
        <h4>Social Media Links</h4>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
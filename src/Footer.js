import Logo from "./images/Logo.png";
function Footer() {
  return (
    <footer>
<img src={Logo} alt="Little Lemon logo" />
<p>Doormat Navigation</p>
 <nav>
<ul>
    <li><a href="/home">Home</a></li>
     <li><a href="/about">About </a></li>
      <li><a href="/menu">Menu</a></li>
       <li><a href="/reservation">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
         <li><a href="/login">Login</a></li>
</ul>
    </nav>


    <p>Contact</p>
 <nav>
<ul>
    <li><a href="#address">Address</a></li>
     <li><a href="#phoneNumber">Phone Number </a></li>
      <li><a href="#email">Email</a></li>
</ul>
    </nav>



    <p>Social Media links </p>
 <nav>
<ul>
    <li><a href="#address">Address</a></li>
     <li><a href="#phoneNumber">Phone Number </a></li>
      <li><a href="#email">Email</a></li>
</ul>
    </nav>
    </footer>
  );
}

export default Footer;
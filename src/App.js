import { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./main";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="container">
      <header className="top-header">
        <Header />
        <Nav cart={cart} />
      </header>

      <Main
        cart={cart}
        setCart={setCart}
      />

      <Footer />
    </div>
  );
}

export default App;
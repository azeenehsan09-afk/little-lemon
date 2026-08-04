import Header from "./Header";
import Nav from "./Nav";
import Main from "./main";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="top-header">
        <Header />
        <Nav />
      </header>

      <Main />

      <Footer />
    </div>
  );
}

export default App;
import "./App.css";
import greekSalad from "./images/greek salad.jpg";
import bruschetta from "./images/restauranfood.jpg";
import lemonDessert from "./images/lemon dessert.jpg";
import grilledSalmon from "./images/greeksalmon.jpg";
import pizza from "./images/pizza.jpg";
import pasta from "./images/pasta.jpg";
function Menu() {
  const menuItems = [
  {
    image: greekSalad,
    name: "Greek Salad",
    price: "$12.99",
    description:
      "Fresh lettuce, tomatoes, cucumbers, olives, feta cheese, and our house dressing.",
  },
  {
    image: bruschetta,
    name: "Bruschetta",
    price: "$7.99",
    description:
      "Grilled bread topped with garlic, tomatoes, basil, and olive oil.",
  },
  {
    image: lemonDessert,
    name: "Lemon Dessert",
    price: "$5.99",
    description:
      "A homemade lemon cake served with fresh cream.",
  },
  {
    image: grilledSalmon,
    name: "Grilled Salmon",
    price: "$18.99",
    description:
      "Fresh salmon served with roasted vegetables.",
  },
  {
    image: pizza,
    name: "Margherita Pizza",
    price: "$14.99",
    description:
      "Classic mozzarella, tomatoes, basil and olive oil.",
  },
  {
    image: pasta,
    name: "Chicken Pasta",
    price: "$16.99",
    description:
      "Creamy pasta with grilled chicken and parmesan.",
  },
];

  return (
    <main className="menu-page">
      <section className="menu-hero">
        <h1>Our Menu</h1>
        <p>Discover our delicious Mediterranean specialties.</p>
      </section>

      <section className="menu-grid">
        {menuItems.map((item) => (
          <article className="menu-card" key={item.name}>
  <img src={item.image} alt={item.name} />

  <h2>{item.name}</h2>

  <span className="price">{item.price}</span>

  <p>{item.description}</p>
</article>
        ))}
      </section>
    </main>
  );
}

export default Menu;
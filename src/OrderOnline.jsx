import "./App.css";
import greekSalad from "./images/greek salad.jpg";
import bruschetta from "./images/restauranfood.jpg";
import lemonDessert from "./images/lemon dessert.jpg";
import grilledSalmon from "./images/greeksalmon.jpg";
import pizza from "./images/pizza.jpg";
import pasta from "./images/pasta.jpg";
function OrderOnline() {
  const foods = [
    {
         image: greekSalad,
      name: "Greek Salad",
      price: "$12.99",
      description: "Fresh vegetables, olives, feta cheese and house dressing.",
     
    },
    {
         image: bruschetta,
      name: "Bruschetta",
      price: "$7.99",
      description: "Grilled bread with tomatoes, garlic and basil.",
      
    },
    {
         image: pizza,
      name: "Margherita Pizza",
      price: "$14.99",
      description: "Classic mozzarella, tomatoes and fresh basil.",
     
    },
    {
        image:pasta,
      name: "Chicken Pasta",
      price: "$16.99",
      description: "Creamy pasta with grilled chicken and parmesan.",

    },
    {
        image:grilledSalmon,
      name: "Grilled Salmon",
      price: "$18.99",
      description: "Served with roasted vegetables and lemon butter.",
      
    },
    {
        image:lemonDessert,
      name: "Lemon Dessert",
      price: "$5.99",
      description: "Homemade lemon cake with whipped cream.",
      image: greekSalad,
    },
  ];

  return (
    <main className="order-page">
      <section className="order-header">
        <h1>Order Online</h1>
        <p>
          Enjoy your favorite Mediterranean dishes from the comfort of your home.
        </p>
      </section>

      <section className="order-grid">
        {foods.map((food) => (
          <article className="order-card" key={food.name}>
  <img src={food.image} alt={food.name} />

  <div className="order-content">
    <h2>{food.name}</h2>

    <span className="order-price">
      {food.price}
    </span>

    <p>{food.description}</p>

    <button className="order-btn">
      Order Now
    </button>
  </div>
</article>
        ))}
      </section>
    </main>
  );
}

export default OrderOnline;
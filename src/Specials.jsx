import food from "./images/restauranfood.jpg";
import food2 from "./images/lemon dessert.jpg";
import food3 from "./images/greek salad.jpg";

function Specials() {
  return (
<section className="specials">

        <div className="specials-header">
          <h2>Weekly Specials!</h2>
        </div>


        <div className="cards">

          <article className="card">
            <img className="main" src={food3} alt="Greek Salad" />
            <div className="card-title">
            <h3>Greek Salad</h3>
            <span>$12.99</span>
            </div>
            <p>
              Fresh vegetables with feta cheese and herbs.
            </p>
            <button className="online-btn">
            🛵 Order a Delivery →
          </button>
          </article>


          <article className="card">
            <img className="main" src={food} alt="Bruschetta" />
            <div className="card-title">
            <h3>Bruschetta</h3>
 <span>$8.99</span>
 </div>
            <p>
              Crispy bread with tomatoes and basil.
            </p>
           
             <button className="online-btn">
            🛵 Order a Delivery →
          </button>
          </article>


          <article className="card">
            <img className="main" src={food2} alt="Lemon Dessert" />
            <div className="card-title">
    <h3>Lemon Dessert</h3>
    <span>$6.99</span>
  </div>

            <p>
              Sweet traditional lemon dessert.
            </p>
            
             <button className="online-btn">
            🛵 Order a Delivery →
          </button>
          </article>

        </div>
      </section>
  );
}

export default Specials;
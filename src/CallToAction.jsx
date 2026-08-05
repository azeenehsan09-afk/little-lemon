import food from "./images/restauranfood.jpg";
import { Link } from "react-router-dom";
 function CallToAction() {
  return (
 <section className="hero">
            <div>
<h1>Little Lemon</h1>
<h2>Chicago</h2>
<p>Mediterranean restaurant serving traditional recipes.</p>

   <Link to="/reservation">
  <button className="reserve-button">Reserve a Table</button>
</Link>
</div>
<aside>
 <img className="main" src={food} alt="Little Lemon restaurant food" />
</aside>
</section>

  );
}

export default CallToAction;
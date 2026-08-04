
import Avatar from "./images/avatar.jpg";
import Avatar2 from "./images/Avatar2.jpg";
function CustomerSays() {
  return (
<section className="testimonials.">

       <div className="testimonials-header">
    <h2>Testimonials</h2>
  </div>


<div className="test-cards">

          <article className="card">
            <img className="main" src={Avatar} alt="Avatar" />
            <div className="card-title">
            <h3>Sarah</h3>
            <span>★★★★★</span>

            </div>
            <p>
              The food was fresh and the service was excellent!
            </p>
          </article>


          <article className="card">
            <img className="main" src={Avatar2} alt="Avatar" />
            <div className="card-title">
            <h3>John</h3>
            <span>★★★★★</span>
            
            </div>
            <p>
              A wonderful dining experience. Highly recommended.
            </p>
          </article>


          <article className="card">
            <img className="main" src={Avatar} alt="Avatar" />
            <div className="card-title">
            <h3>Emily</h3>
            <span>★★★★★</span>
            
            </div>
            <p>
               A wonderful dining experience.
            </p>
          </article>
        </div>
        </section>

  );
}

export default CustomerSays;
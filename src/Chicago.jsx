
import chefs1 from "./images/Mario and Adrian A.jpg";
import chefs2 from "./images/Mario and Adrian b.jpg";
function Chicago() {
  return (
<section className="about" id="about">

  <div className="about-text">
    <h2>Little Lemon</h2>
    <h3>Chicago</h3>

    <p>
     Little Lemon began as a family dream to share authentic Mediterranean flavors with the Chicago community. Today, we continue that tradition by preparing every meal with fresh ingredients, timeless recipes, 
     and genuine hospitality.
    </p>
  </div>

  <div className="about-images">
    <img className="img1" src={chefs1} alt="Chef preparing food" />
    <img className="img2" src={chefs2} alt="Little Lemon chefs" />
  </div>

</section>
  );
}

export default Chicago;
import "./App.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-container">
        <h1>About Little Lemon</h1>

        <p>
          Little Lemon is a family-owned Mediterranean restaurant located in
          the heart of Chicago. We are passionate about serving fresh,
          flavorful dishes made from high-quality ingredients.
        </p>

        <p>
          Our chefs combine traditional Mediterranean recipes with modern
          techniques to create an unforgettable dining experience. Whether
          you're joining us for lunch, dinner, or dessert, we aim to make
          every visit special.
        </p>

        <div className="about-features">
          <div className="feature-card">
            <h2>Fresh Ingredients</h2>
            <p>Locally sourced produce and premium ingredients every day.</p>
          </div>

          <div className="feature-card">
            <h2>Family Recipes</h2>
            <p>Authentic Mediterranean dishes passed down through generations.</p>
          </div>

          <div className="feature-card">
            <h2>Friendly Service</h2>
            <p>Creating memorable dining experiences for every guest.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
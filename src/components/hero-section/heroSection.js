import "./heroSection.css";

function HeroSection() {
  return (
    <main className="hero-section">
      <section className="hero-section--text">
        <h2 className="hero-section--text__heading">
          We are dedicated to the discovery and exposure of{" "}
          <span className="hero-section--text__emphasized-text">
            talented athletes{" "}
          </span>
          emerging from Africa.
        </h2>

        <a href="/">
          <button className="btn hero-section--btn">Get Early Access</button>
        </a>
      </section>

      <img
        src="https://raw.githubusercontent.com/awobekuD/Outlierz/a3915ea25b1461cb72da6f9ced7cbe92a4e50463/outlierz-app/images/Hero%20image.svg"
        alt=""
        className="hero-section--image"
      />
    </main>
  );
}

export default HeroSection;

import "./fifthSection.css";

function FifthSection() {
  return (
    <div>
      <section className="fifth-section">
        <img
          src="https://github.com/awobekuD/Outlierz/blob/master/outlierz-app/images/Fifth%20section%20image.png?raw=true"
          alt=""
          className="fifth-section--image"
        />

        <div className="fifth-section--text">
          <h4 className="sections-headings">
            We bring the very best Africa has to offer to your fingertips
          </h4>
          <p className="sections-body">
            The Outlyer platform has been designed to present recruiters a
            detailed archive of properly profiled talented players that have
            been singled out from a large pool of players.
          </p>
        </div>
      </section>

      <div className="sub-fifth-section-image-container">
        <img
          src="https://github.com/awobekuD/Outlierz/blob/master/outlierz-app/images/Sixth%20section.png?raw=true"
          alt=""
          className="sub-fifth-section-image"
        />
      </div>
    </div>
  );
}

export default FifthSection;

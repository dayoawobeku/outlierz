import "./thirdSection.css";

function ThirdSection() {
  return (
    <section className="third-section">
      <img
        src="https://github.com/awobekuD/Outlierz/blob/master/outlierz-app/images/Third%20section%20image.png?raw=true"
        className="third-section--image"
        alt=""
      />

      <div className="third-section--text">
        <h4 className="sections-headings">
          Use our tools to evaluate players, create/share reports on your finds.
        </h4>
        <p className="sections-body">
          Once you sign up, you become a member of the family. Our experienced
          and 5 star chefs get on with your kitchen business
        </p>
      </div>
    </section>
  );
}

export default ThirdSection;

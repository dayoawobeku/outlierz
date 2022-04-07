import "./secondSection.css";
import { secondSectionImg } from "../../images/images";

function SecondSection() {
  return (
    <section className="second-section">
      <div className="second-section--text">
        <h4 className="sections-headings">
          Be the first to discover exceptional talent
        </h4>
        <p className="sections-body">
          Once you sign up, you become a member of the family. Our experienced
          and 5 star chefs get on with your kitchen business
        </p>
      </div>

      <img src={secondSectionImg} alt="" className="second-section--image" />
    </section>
  );
}

export default SecondSection;

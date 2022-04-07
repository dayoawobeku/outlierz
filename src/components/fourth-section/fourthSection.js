import "./fourthSection.css";
import { fourthSectionImg } from "../../images/images";

function FourthSection() {
  return (
    <section className="fourth-section">
      <div className="fourth-section--text">
        <h4 className="sections-headings">
          Grow your connections in our ecosystem of like minds.
        </h4>
        <p className="sections-body">
          Once you sign up, you become a member of the family. Our experienced
          and 5 star chefs get on with your kitchen business
        </p>
      </div>

      <img src={fourthSectionImg} alt="" className="fourth-section--image" />
    </section>
  );
}

export default FourthSection;

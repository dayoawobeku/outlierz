import "./firstSection.css";
import { firstSectionImgSvg } from "../../images/images";

function FirstSection() {
  return (
    <section className="first-section">
      <img src={firstSectionImgSvg} alt="" className="first-section--image" />

      <div className="first-section--text">
        <h4 className="sections-headings">
          We bring the very best Africa has to offer to your fingertips
        </h4>
        <p className="sections-body">
          The Outlyer platform has been designed to present recruiters a
          detailed archive of properly profiled talented players that have been
          singled out from a large pool of players.
          <p className="sections-body__sub-paragraph">
            Our unique approach involves scouting through several Competitions,
            Teams and Athletes looking for out for ‘Outliers’ who we monitor,
            build profiles on and present to recruiters via our platform
          </p>
        </p>
      </div>
    </section>
  );
}

export default FirstSection;

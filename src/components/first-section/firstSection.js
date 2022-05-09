import "./firstSection.css";
import { firstSectionImgSvg } from "../../images/images";

function FirstSection() {
  return (
    <section className='first-section'>
      <img src={firstSectionImgSvg} alt='' className='first-section--image' />

      <div className='first-section--text'>
        <h4 className='sections-headings'>
          We bring the very best Africa has to offer to your fingertips
        </h4>
        <p className='sections-body'>
          We believe that Africa has a lot to offer in terms of raw talent,
          however, the majority of the talent goes unnoticed. We have decided to
          solve this problem by creating The OUTLIER PLATFORM which has been
          designed to present detailed profiles of some of the most talented
          footballers emerging from Africa to recruiters all around the world at
          the click of a button.
        </p>
        <p className='sections-body sections-body__sub-paragraph'>
          Our unique approach involves scouting through several Competitions,
          Teams and Athletes looking for out for ‘Outliers’ who we monitor,
          build profiles on and present to recruiters via our platform
        </p>
        <p className='sections-body sections-body__sub-paragraph'>
          Think of us as a Wyscout (an active archive) for emerging talent.
        </p>
      </div>
    </section>
  );
}

export default FirstSection;

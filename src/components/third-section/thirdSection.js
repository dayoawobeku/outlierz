import "./thirdSection.css";
import { thirdSectionImg } from "../../images/images";

function ThirdSection() {
  return (
    <section className='third-section'>
      <img src={thirdSectionImg} className='third-section--image' alt='' />

      <div className='third-section--text'>
        <h4 className='sections-headings'>
          Use our tools to evaluate players, create/share reports on your finds.
        </h4>
        <p className='sections-body'>
          Share your findings with your team/associates at the click of a
          button. Discovered a prospect you like? You can easily use our tool to
          create reports on the player, attach all the player profile (which
          will include all details you need), and export in PDF format.
        </p>
      </div>
    </section>
  );
}

export default ThirdSection;

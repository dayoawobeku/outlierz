import "./fifthSection.css";
import { fifthSectionImg } from "../../images/images";

function FifthSection() {
  return (
    <div>
      <section className='fifth-section'>
        <img src={fifthSectionImg} alt='' className='fifth-section--image' />

        <div className='fifth-section--text'>
          <h4 className='sections-headings'>
            Scout players using all relevant and up-to-date data
          </h4>
          <p className='sections-body'>
            We get you the complete view of all players we profile (match
            videos, stats, highlights and more) in our constantly updated player
            database, we want you to have all the information you need to make a
            decision.
          </p>
        </div>
      </section>

      {/* <div className='sub-fifth-section-image-container'>
        <img src={sixthSectionImg} alt='' className='sub-fifth-section-image' />
      </div> */}
    </div>
  );
}

export default FifthSection;

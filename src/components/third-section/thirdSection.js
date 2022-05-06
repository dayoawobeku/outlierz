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
          Create your portfolio of shortlisted players and get notifications,
          updates, request specific information, track performance and inquire
          about players in your shortlist.
        </p>
      </div>
    </section>
  );
}

export default ThirdSection;

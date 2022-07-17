import "./seventhSection.css";
import { seventhSectionImg } from "../../images/images";

function SeventhSection() {
  return (
    <div>
      <section className='seventh-section'>
        <div className='seventh-section--text'>
          <h4 className='sections-headings'>Monitor your prospects</h4>
          <p className='sections-body'>
            Create your portfolio of shortlisted players and get notifications/
            updates/ request specific information/ track performance and inquire
            about players in your shortlist.
          </p>
        </div>

        <img src={seventhSectionImg} alt='' className='seventh-section--image' />
      </section>

    </div>
  );
}

export default SeventhSection;

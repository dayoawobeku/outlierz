import "./fourthSection.css";
import { fourthSectionImg } from "../../images/images";

function FourthSection() {
  return (
    <section className='fourth-section'>
      <div className='fourth-section--text'>
        <h4 className='sections-headings'>
          Grow your connections in our ecosystem of like minds.
        </h4>
        <p className='sections-body'>
          We are building an ecosystem specifically for emerging talent and
          recruiters all around the world that are interested in emerging
          talent. Connect with like minds here, expand the reach of your network
          and discover new opportunities.
        </p>
      </div>

      <img src={fourthSectionImg} alt='' className='fourth-section--image' />
    </section>
  );
}

export default FourthSection;

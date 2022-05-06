import "./secondSection.css";
import { secondSectionImg } from "../../images/images";

function SecondSection() {
  return (
    <section className='second-section'>
      <div className='second-section--text'>
        <h4 className='sections-headings'>
          Be the first to discover exceptional talent
        </h4>
        <p className='sections-body'>
          Stay ahead of the rest; we will help you find the next Sadio Mane ever
          before the world knows about him. Set your interests and we will
          constantly feed you with profiles that match your needs specifically
          or you can also search for players that match your criteria by using
          filters on our platform.
        </p>
      </div>

      <img src={secondSectionImg} alt='' className='second-section--image' />
    </section>
  );
}

export default SecondSection;

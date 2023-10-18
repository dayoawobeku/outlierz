import './secondSection.css';
import { secondSectionImg } from '../../utils/images';

function SecondSection() {
  return (
    <section className='second-section'>
      <div className='second-section--text'>
        <h4 className='sections-headings'>
          Be the first to discover exceptional talent
        </h4>
        <p className='sections-body'>
          We believe that Africa has a lot to offer in terms of raw talent,
          however, the majority of the talent goes unnoticed. Our mission is to
          revolutionize football scouting in Africa by harnessing the power of
          technology, video, and data to identify and showcase the
          continent&apos;s brightest rising stars in football.
        </p>

        <br />
        <p className='sections-body'>
          By signing up to our platform, football talent recruiters gain access
          to our robust database of some of the best football talent in Africa
        </p>
      </div>

      <img src={secondSectionImg} alt='' className='second-section--image' />
    </section>
  );
}

export default SecondSection;

import './thirdSection.css';
import { thirdSectionImg } from '../../utils/images';

function ThirdSection() {
  return (
    <section className='third-section'>
      <img src={thirdSectionImg} className='third-section--image' alt='' />

      <div className='third-section--text'>
        <h4 className='sections-headings'>
          Use our tools to evaluate players, create/share reports on your finds.
        </h4>
        <p className='sections-body'>
          Recruiters can sieve through player profiles, see all necessary
          details, watch videos (full match matches, highlights, specific gane
          moments), view all kinds of stats, match reports and performance
          analysis on each player on our platform.
        </p>
      </div>
    </section>
  );
}

export default ThirdSection;

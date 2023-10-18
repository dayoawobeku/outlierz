import './heroSection.css';
import { heroImgSvg } from '../../utils/images';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();
  return (
    <main className='hero-section'>
      <section className='hero-section--text'>
        <h1 className='hero-section--text__heading !text-7xl'>
          We are dedicated to the discovery and exposure of{' '}
          <span className='hero-section--text__emphasized-text'>
            talented athletes{' '}
          </span>
          emerging from Africa.
        </h1>

        <button
          className='btn hero-section--btn'
          // onClick={() => navigate('search')}
          >
          Get Early Access
        </button>
      </section>

      <img src={heroImgSvg} alt='' className='hero-section--image' />
    </main>
  );
}

export default HeroSection;

import './footer.css';
import {
  appStore,
  googlePlay,
  instagram,
  twitter,
  youtube,
} from '../../utils/images';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer--links'>
        <div>
          <h6 className='footer--links__heading'>Support</h6>
          <a href='/'>
            <p className='footer--links__body'>Help Center</p>
          </a>
          <a href='/'>
            <p className='footer--links__body'>Safety Center</p>
          </a>
        </div>
        <div>
          <h6 className='footer--links__heading'>Support</h6>
          <a href='/'>
            <p className='footer--links__body'>Help Center</p>
          </a>
          <a href='/'>
            <p className='footer--links__body'>Safety Center</p>
          </a>
        </div>
        <div>
          <h6 className='footer--links__heading'>Legal</h6>
          <a href='/'>
            <p className='footer--links__body'>Cookies Policy</p>
          </a>
          <a href='/'>
            <p className='footer--links__body'>Privacy Policy</p>
          </a>
          <a href='/'>
            <p className='footer--links__body'>Terms of Service</p>
          </a>
        </div>

        <div className='ml-8rem'>
          <h6 className='footer--links__heading'>
            Coming soon on your mobile device
          </h6>
          <div className='footer--downloads'>
            <a href='/'>
              <img
                src={googlePlay}
                alt='google-store-download'
                className='footer--downloads__google-store'
              />
            </a>
            <a href='/'>
              <img src={appStore} alt='apple-store-download' />
            </a>
          </div>
        </div>
      </div>

      <div className='footer--social-icons'>
        <a href='/'>
          <img src={instagram} alt='instagram-link' />
        </a>
        <a href='/'>
          <img src={twitter} alt='twitter-link' />
        </a>
        <a href='/'>
          <img src={youtube} alt='youtube-link' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

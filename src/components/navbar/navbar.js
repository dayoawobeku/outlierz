import { useState } from 'react';
import logo from 'assets/images/logo.png';
import './navbar.css'; 

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className='navbar  text-black flex justify-between backdrop-blur-sm'>
      <a href='/'>
        <img src={logo} alt='outlierz-logo' className='logo' width={120} />
      </a>

      <nav
        className={isMobile ? 'nav-lis-mobile' : 'nav-lis'}
        onClick={() => setIsMobile(false)}>
        <ul className='nav-lis__lis '>
          {/* <li>
            <a className='' href='/'>
              Agents
            </a>
          </li>
          <li>
            <a className='' href='/'>
              Prices
            </a>
          </li> */}
          <li>
            <a className='' href='/'>
              Get Started
            </a>
          </li>
        </ul>
        {/* <div className='nav-actions '> */}
          {/* <a href="/" className="nav-sign-in">
            Sign In
          </a> */}
          {/* <a href='/' className='btn nav-register bg-[#023047]'>
            Register
          </a> */}
        {/* </div> */}
      </nav>

      <button className='btn-mobile' onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <i className='im im-x-mark dark:bg-white'></i>
        ) : (
          <i className='im im-menu dark:bg-white'></i>
        )}
      </button>
    </div>
  );
}

export default Navbar;

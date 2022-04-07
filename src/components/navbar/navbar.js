import { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <navbar className="navbar">
      <a href="/">
        <img
          src="https://raw.githubusercontent.com/awobekuD/Outlierz/bfce3f9fed92cbf157872ba1a06270b06c922ce3/outlierz-app/images/LOGO.svg"
          alt="outlierz-logo"
          className="logo"
        />
      </a>

      <nav
        className={isMobile ? "nav-lis-mobile" : "nav-lis"}
        onClick={() => setIsMobile(false)}
      >
        <ul className="nav-lis__lis">
          <li>
            <a href="/">Agents</a>
          </li>
          <li>
            <a href="/">Prices</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
        <div className="nav-actions">
          <a href="/" className="nav-sign-in">
            Sign In
          </a>
          <a href="/" className="btn nav-register">
            Register
          </a>
        </div>
      </nav>

      <button className="btn-mobile" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <i className="im im-x-mark"></i>
        ) : (
          <i className="im im-menu"></i>
        )}
      </button>
    </navbar>
  );
}

export default Navbar;

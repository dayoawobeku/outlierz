import { useState } from "react";
import logo from "../../images/logo.png";
import "./navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="navbar">
      <a href="/">
        <img src={logo} alt="outlierz-logo" className="logo" width={120} />
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
    </div>
  );
}

export default Navbar;

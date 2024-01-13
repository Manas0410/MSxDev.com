import { Link } from "react-router-dom";
import "./headerStyles/header.css";
function Header() {
  return (
    <div className="header-box">
      <div className="header-left">
        <img src="./logo.svg" className="site-logo" />
        <a className="header-items">Home</a>
        <a className="header-items">Services</a>
        <a className="header-items">About</a>
        <a className="header-items">Demo</a>
      </div>
      {/* <div className="header-middle">
       
      </div> */}
      <div className="header-right">
        <Link to={"./contact"}>
          <button className="button">Contact Us</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;

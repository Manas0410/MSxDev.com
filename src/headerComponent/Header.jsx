import { Link, useNavigate } from "react-router-dom";
import "./headerStyles/header.css";
function Header() {
  const Navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header-box">
      <div className="container-fluid">
        <img src="./logo.svg" className="site-logo" alt="MSxDev" />
        <button
          className="navbar-toggler navbar-dark bg-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div
                className="nav-link active header-items"
                aria-current="page"
                href="#"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Home
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link active header-items"
                aria-current="page"
                href="#"
                onClick={() => {
                  Navigate("/services");
                }}
              >
                Services
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active header-items"
                aria-current="page"
                href="#"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active header-items"
                aria-current="page"
                href="#"
              >
                Demo
              </a>
            </li>
          </ul>
          <form className="d-flex contact-us">
            <button
              className="button"
              onClick={() => {
                Navigate("/contact");
              }}
            >
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;

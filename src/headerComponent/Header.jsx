import { Link } from "react-router-dom";
import "./headerStyles/header.css";
function Header() {
  return (
    // <div className="header-box">
    //   <div className="header-left">
    //     <img src="./logo.svg" className="site-logo" />
    //     <a className="header-items">Home</a>
    //     <a className="header-items">Services</a>
    //     <a className="header-items">About</a>
    //     <a className="header-items">Demo</a>
    //   </div>
    //   {/* <div className="header-middle">
       
    //   </div> */}
    //   <div className="header-right">
    //     <Link to={"./contact"}>
    //       <button className="button">Contact Us</button>
    //     </Link>
    //   </div>
    // </div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light header-box">
      <div class="container-fluid">
        <img src="./logo.svg" className="site-logo" />
        <button class="navbar-toggler navbar-dark bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active header-items" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active header-items" aria-current="page" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active header-items" aria-current="page" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active header-items" aria-current="page" href="#">Demo</a>
            </li>
          </ul>
          <form class="d-flex contact-us">
            <Link to={"./contact"}>
              <button className="button">Contact Us</button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;

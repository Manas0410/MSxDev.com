import "./style/footer.css";
const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              {/* <a href="index.html"><img src="https://logo-download.com/wp-content/data/images/2021/08/Levi_Strauss__Co.-Logo.png" alt="" class="img-fluid logo-footer" /></a> */}
              <div class="footer-about">
                <p>Dummy data </p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="useful-link">
                <h2>Useful Links</h2>
                <img
                  src="./assets/images/about/home_line.png"
                  alt=""
                  class="img-fluid"
                />
                <div class="use-links">
                  <li>
                    <a href="index.html">
                      <i class="fa-solid fa-angles-right"></i> Home
                    </a>
                  </li>
                  <li>
                    <a href="about.html">
                      <i class="fa-solid fa-angles-right"></i> About Us
                    </a>
                  </li>
                  <li>
                    <a href="gallery.html">
                      <i class="fa-solid fa-angles-right"></i> Gallery
                    </a>
                  </li>
                  <li>
                    <a href="contact.html">
                      <i class="fa-solid fa-angles-right"></i> Contact
                    </a>
                  </li>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="social-links">
                <h2>Follow Us</h2>
                <img src="./assets/images/about/home_line.png" alt="" />
                <div class="social-icons">
                  <li>
                    <a href="">
                      <i class="fa-brands fa-facebook-f">
                        <img
                          src="./Facebook_icon.svg.png"
                          alt="facebook"
                          className="bannerIcon"
                        />{" "}
                      </i>{" "}
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fa-brands fa-instagram">
                        <img
                          src="./insta.png"
                          alt="facebook"
                          className="bannerIcon"
                        />
                      </i>{" "}
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fa-brands fa-linkedin-in">
                        <img
                          src="./LinkedIn.png"
                          alt="facebook"
                          className="bannerIcon"
                        />
                      </i>{" "}
                      Linkedin
                    </a>
                  </li>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="address">
                <h2>Address</h2>
                <img
                  src="./assets/images/about/home_line.png"
                  alt=""
                  class="img-fluid"
                />
                <div class="address-links">
                  <li class="address1">
                    <i class="fa-solid fa-location-dot"></i> Kolathur
                    ramankulam- Malappuram Dt Kerala 679338
                  </li>
                  <li>
                    <a href="">
                      <i class="fa-solid fa-phone"></i> +91 90904500112
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i class="fa-solid fa-envelope"></i> mail@1234567.com
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section id="copy-right">
        <div class="copy-right-sec">
          <i class="fa-solid fa-copyright"></i>
          2024 Powerd By <a href="#"></a>
        </div>
      </section>
    </>
  );
};

export default Footer;

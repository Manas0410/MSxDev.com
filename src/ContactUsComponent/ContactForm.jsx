import "./contactForm.css";
const ContactForm = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="container">
          <div className="heading text-center">
            <h2>
              Contact
              <span> Us </span>
            </h2>
            <p>
              If you want to contact us ,You can fill the below form with your
              details.
              <br />
              We will connect with you as soon as possible
            </p>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="title">
                <h3>Contact detail</h3>
                <p>You can also contact us at , </p>
              </div>
              <div className="content">
                <div className="info">
                  <i className="fas fa-mobile-alt">
                    <span class="material-symbols-outlined">phone_iphone</span>
                  </i>
                  <h4 className="d-inline-block">
                    PHONE :
                    <br />
                    <span>+91 7007022949</span>
                  </h4>
                </div>
                <div className="info">
                  <i className="far fa-envelope">
                    <span class="material-symbols-outlined">mail</span>
                  </i>
                  <h4 className="d-inline-block">
                    EMAIL :
                    <br />
                    <span>msxdev01@gmail.com</span>
                  </h4>
                </div>
                {/* <div className="info">
                  <i className="fas fa-map-marker-alt"></i>
                  <h4 className="d-inline-block">
                    ADDRESS :<br />
                    <span>6743 last street , Abcd, Xyz</span>
                  </h4>
                </div> */}
              </div>
            </div>
            <div className="col-md-7">
              <form action="https://formspree.io/f/xpzvwzwl" method="POST">
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      name="userName"
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      name="mail"
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      name="number"
                      type="number"
                      className="form-control"
                      placeholder="Your Contact number"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    id="comment"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>

                <button className="btn btn-block" type="submit" value="send">
                  Send Now!
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactForm;

import "./styles/aboutUs.css";
const AboutUsBanner = ({ aboutref }) => {
  return (
    <div classNameName="aboutContainer" ref={aboutref}>
      <section className="section_all bg-light" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row justify-content-center text-center">
                <div className="col-md-10 col-lg-8">
                  <div className="header-section">
                    <h2 className="title">
                      About <span style={{ color: "#FC5E01" }}>Us</span>{" "}
                    </h2>
                    <p className="description">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur malesuada fermentum purus, eu volutpat nisi
                      laoreet id. Phasellus fringilla accumsan metus, at tempor
                      est hendrerit et.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row vertical_content_manage mt-5">
            <div className="col-lg-6">
              <div className="about_header_main mt-3">
                <div className="about_icon_box">
                  <p className="text_custom font-weight-bold">
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
                <h4 className="about_heading text-capitalize font-weight-bold mt-4">
                  Lorem Ipsum is simply dummy text of the printing industry.
                </h4>
                <p className="text-muted mt-5 description">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classNameical Latin
                  literature from 45 BC, making it over 2000 years old.
                </p>

                <p className="text-muted mt-3 description">
                  {" "}
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="img_about mt-3">
                <img
                  src="https://i.ibb.co/qpz1hvM/About-us.jpg"
                  alt=""
                  className="img-fluid mx-auto d-block"
                />
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-4">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fas fa-pencil-alt"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-4 font-weight-bold">
                    Creative Design
                  </h5>
                  <p className="edu_desc mt-3 mb-0 text-muted description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fab fa-angellist"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-4 font-weight-bold">
                    We make Best Result
                  </h5>
                  <p className="edu_desc mb-0 mt-3 text-muted description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="about_content_box_all mt-3">
                <div className="about_detail text-center">
                  <div className="about_icon">
                    <i className="fas fa-paper-plane"></i>
                  </div>
                  <h5 className="text-dark text-capitalize mt-4 font-weight-bold">
                    best platform{" "}
                  </h5>
                  <p className="edu_desc mb-0 mt-3 text-muted description">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUsBanner;

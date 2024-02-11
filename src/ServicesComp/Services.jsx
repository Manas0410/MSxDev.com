import ServiceCard from "../Utilities/serviceCard/ServiceCard";
import "./style/Service.css";

const Service = () => {
  return (
    <section className="section-services">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-10 col-lg-8">
            <div className="header-section">
              <h2 className="title">
                Exclusive <span style={{ color: "#FC5E01" }}>Services</span>{" "}
              </h2>
              <p className="description">
                Discover tailored solutions for your digital journey. Our
                comprehensive services encompass website development,
                consultation, and seamless deployment, specializing in portfolio
                showcases, e-commerce solutions, and expert guidance for your
                online success.
              </p>
              <p
                style={{ color: "#ff4500" }}
                className="text_custom font-weight-bold"
              >
                We give an online plateform to your business ideas
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="single-service">
              <div className="content">
                <span className="icon">
                  <i className="fab fa-battle-net"></i>
                </span>
                <h3 className="title">Portfolio Website </h3>
                <p className="description">
                  Build a stunning online portfolio to showcase your work and
                  attract clients with our professional portfolio website
                  services.
                </p>
                <a href="#" className="learn-more">
                  Learn More
                </a>
              </div>
              <span className="circle-before"></span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-service">
              <div className="content">
                <span className="icon">
                  <i className="fab fa-asymmetrik"></i>
                </span>
                <h3 className="title">E-commerce Website</h3>
                <p className="description">
                  Launch your online store with ease. We offer tailored
                  e-commerce website solutions to help you sell your products
                  online effectively.
                </p>
                <a href="#" className="learn-more">
                  Learn More
                </a>
              </div>
              <span className="circle-before"></span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-service">
              <div className="content">
                <span className="icon">
                  <i className="fab fa-artstation"></i>
                </span>
                <h3 className="title">E-commerce Store</h3>
                <p className="description">
                  Elevate your online retail presence with a customized
                  e-commerce store. We create user-friendly platforms to boost
                  your sales and customer experience.
                </p>
                <a href="#" className="learn-more">
                  Learn More
                </a>
              </div>
              <span className="circle-before"></span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-service">
              <div className="content">
                <span className="icon">
                  <i className="fab fa-500px"></i>
                </span>
                <h3 className="title">Consultation</h3>
                <p className="description">
                  Get expert guidance for your digital presence. Our
                  consultation services help you strategize and optimize your
                  online business for success.
                </p>
                <a href="#" className="learn-more">
                  Learn More
                </a>
              </div>
              <span className="circle-before"></span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-service">
              <div className="content">
                <span className="icon">
                  <i className="fas fa-chart-pie"></i>
                </span>
                <h3 className="title">Web Development</h3>
                <p className="description">
                  From concept to reality, we bring your ideas to life. Our
                  development services ensure your website is built with
                  precision and innovation.
                </p>
                <a href="#" className="learn-more">
                  Learn More
                </a>
              </div>
              <span className="circle-before"></span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="single-service">
              <div className="content">
                <span className="icon">
                  <i className="fas fa-laptop-code"></i>
                </span>
                <h3 className="title">Deployment</h3>
                <p className="description">
                  Take your website live seamlessly. We handle the technical
                  aspects, ensuring smooth deployment and launch for your online
                  presence.
                </p>
                <a href="#" className="learn-more">
                  Learn More
                </a>
              </div>
              <span className="circle-before"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;

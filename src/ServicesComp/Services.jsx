import ServiceCard from "../Utilities/serviceCard/ServiceCard";
import "./style/Service.css";

const SERVICES_DESCRIPTION = {
  Portfolio_Website:
    "Its important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis and much more.",
  "E-Commerc-Website":
    "If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your SSproduct. From there, we can take it further and fix all issues.",
  "Front End Development":
    "We are Front End masters with a deep focus on HTML, CSS. The result of our work is a responsive, accessible, and performant websites. Either you have the design ready and want us to code it, or you want us to do both design and code, we are happy to do so",
};

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur malesuada fermentum purus, eu volutpat nisi laoreet
                id. Phasellus fringilla accumsan metus, at tempor est hendrerit
                et.
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
                <h3 className="title">Global coverage</h3>
                <p className="description">
                  Mauris volutpat urna tristique finibus iaculis. Morbi
                  facilisis, justo eu vulputate elementum, est augue tincidunt
                  ante, sed efficitur leo ligula vel velit.
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
                <h3 className="title">It Management</h3>
                <p className="description">
                  Mauris volutpat urna tristique finibus iaculis. Morbi
                  facilisis, justo eu vulputate elementum, est augue tincidunt
                  ante, sed efficitur leo ligula vel velit.
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
                <h3 className="title">Software Development</h3>
                <p className="description">
                  Mauris volutpat urna tristique finibus iaculis. Morbi
                  facilisis, justo eu vulputate elementum, est augue tincidunt
                  ante, sed efficitur leo ligula vel velit.
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
                <h3 className="title">Brand Strategy</h3>
                <p className="description">
                  Mauris volutpat urna tristique finibus iaculis. Morbi
                  facilisis, justo eu vulputate elementum, est augue tincidunt
                  ante, sed efficitur leo ligula vel velit.
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
                <h3 className="title">Business Consulting</h3>
                <p className="description">
                  Mauris volutpat urna tristique finibus iaculis. Morbi
                  facilisis, justo eu vulputate elementum, est augue tincidunt
                  ante, sed efficitur leo ligula vel velit.
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
                <h3 className="title">Website Design</h3>
                <p className="description">
                  Mauris volutpat urna tristique finibus iaculis. Morbi
                  facilisis, justo eu vulputate elementum, est augue tincidunt
                  ante, sed efficitur leo ligula vel velit.
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

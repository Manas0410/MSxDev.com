import ServiceCard from "../Utilities/serviceCard/ServiceCard";
import "./style/Service.css";

const Service = () => {
  return (
    <div className="Service-container">
      <div className="service-section">
        <ServiceCard text1="Portfolio" text2="Website" />
        <p>Portfolio Website</p>
      </div>
      <div className="service-section">
        <ServiceCard text1="E-Commerce" text2="Website" />
        <p>E-Commerce Website</p>
      </div>
      <div className="service-section">
        <ServiceCard text1="E-Commerce" text2="Store" />
        <p>E-Commerce Store</p>
      </div>
    </div>
  );
};
export default Service;

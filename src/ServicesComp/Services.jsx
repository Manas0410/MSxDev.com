import ServiceCard from "../Utilities/serviceCard/ServiceCard";
import "./style/Service.css";

const SERVICES_DESCRIPTION={
  "Portfolio_Website":"Its important to research deeply for the product you want to build. We help in that by defining the user audience, working on user stories, competitive analysis and much more.",
  "E-Commerc-Website":"If you are unsure of how your app behaves, we can help by doing a detailed UX audit that will highlight most of the issues in your SSproduct. From there, we can take it further and fix all issues.",
  "Front End Development":"We are Front End masters with a deep focus on HTML, CSS. The result of our work is a responsive, accessible, and performant websites. Either you have the design ready and want us to code it, or you want us to do both design and code, we are happy to do so"
}

const Service = () => {
  return (
    <div className="service-page">
      <div className="service-heading">Our Services</div>
      <div className="Service-container">
        <div className="service-section">
          <ServiceCard text1="Portfolio Website"  description ={SERVICES_DESCRIPTION["Portfolio_Website"]}/>
        </div>
        <div className="service-section">
          <ServiceCard text1="E-Commerc Website" description ={SERVICES_DESCRIPTION["E-Commerc-Website"]}  />
        </div>
        <div className="service-section">
          <ServiceCard text1="Front End Development" description ={SERVICES_DESCRIPTION["Front End Development"]} />
        </div>
      </div>
    </div>
  );
};
export default Service;

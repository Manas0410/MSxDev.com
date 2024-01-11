import "./serviceCard.css";
const ServiceCard = () => {
  return (
    <div className="ServiceCard">
      <div className="banner">
        <div className="line">
          <span>services</span>
        </div>
      </div>

      <div className="box">
        <div className="content">
          <img
            src="./servicecard.jpg"
            width="500"
            height="500"
            alt="Italy / Urban / Street / City"
          />
          <div className="text1">Portfolio</div>
          <div className="text2">website</div>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;

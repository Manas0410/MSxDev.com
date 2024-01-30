import "./serviceCard.css";
const ServiceCard = ({ text1, description }) => {
  return (
    <div className="ServiceCard">
      {/* <div className="banner">
        <div className="line">
          <span>{text1}</span>
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
          <div className="text1">{text1}</div>
          <div className="text2">{text2}</div>
        </div>
      </div> */}
      <div className="heading">{text1}</div>
      <div className="description">{description}</div>


    </div>
  );
};
export default ServiceCard;

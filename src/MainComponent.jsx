import homeImg from "./assets/home.jpeg";
// import "./style/mainCom.css";
const MainComponent = () => {
  return (
    <div className="main-content">
      <div className="main-text">
        We offer comprehensive services, from crafting custom websites using
        HTML, CSS, and JavaScript to building e-commerce platforms, web
        applications, and responsive designs. They manage front-end and back-end
        development, provide maintenance, support, and integrate SEO to ensure
        optimal performance and visibility online.
      </div>
      <div>
        <img src={homeImg} className="image-box" />
      </div>
    </div>
  );
};

export default MainComponent;

import "./bannerComponent.css";
import Typed from 'typed.js';
import { useEffect } from "react";
const BannerComponent =()=>{
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["Portfolio website.", "E commerce website.","E commerce store."],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    });

    return () => {
      // Cleanup code if needed
      typed.destroy();
    };
  }, []); // Empty dep

    return  <div className="main-content">
    <div className="banner-heading">Have your own website..</div>
    <div>
      <span className="auto-type"></span>
    </div>
   
    <div className="main-text">
      We offer comprehensive services, from crafting custom websites using
      HTML, CSS, and JavaScript to building e-commerce platforms, web
      applications, and responsive designs. They manage front-end and back-end
      development, provide maintenance, support, and integrate SEO to ensure
      optimal performance and visibility online.
    </div>
    <div>
      {/* <img src={homeImg} className="image-box" /> */}
    </div>
    <button className="button">Contact Us</button>
  </div>
}

export default BannerComponent;
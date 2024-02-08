import Header from "./headerComponent/Header";
// import ItemCard from "./ItemCard";
import MainComponent from "./MainComponent";
import "./home.css";
import Footer from "./footerComponent/Footer";
import BannerComponent from "./bannerComponent/BannerComponent";
import Service from "./ServicesComp/Services";
import AboutUsBanner from "./AboutUsComponent/AboutUsBanner/AboutUsBanner";
import { useRef } from "react";

function Home() {
  const aboutref = useRef(null);
  return (
    <div>
      <Header aboutref={aboutref} />
      <BannerComponent />
      <Service />
      <AboutUsBanner aboutref={aboutref} />
      <Footer />
    </div>
  );
}

export default Home;
//  aboutref.current.scrollIntoView({ behavior: "smooth" });

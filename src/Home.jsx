// import Footer from "./footerComponent/Footer";
// import Header from "./headerComponent/Header";
// import ItemCard from "./ItemCard";
// import MainComponent from "./MainComponent";
// // import "./style/home.css";
// const SERVICE_LIST = [
//   {
//     img: "",
//     heading: "Web Design",
//     content:
//       "Web design is the art of creating visually engaging websites. It involves arranging content, choosing colors and fonts, and ensuring a seamless experience across different devices. Designers use coding languages and software to craft intuitive interfaces that captivate users and adapt to evolving trends.",
//   },
//   {
//     img: "",
//     heading: "Portfolio development",
//     content:
//       "A portfolio developer crafts impressive and functional websites that showcase a person's or company's skills and projects. They create visually appealing platforms to display work and expertise, using web development tools and design principles to make a strong professional impression.",
//   },
//   {
//     img: "",
//     heading: "Web Development",
//     content:
//       "Unlock the full potential of your online presence with our expert web development services. Our experienced team combines cutting-edge technology with best practices to deliver high-performance websites that meet your business needs.",
//   },
// ];

// function Home() {
//   return (
//     <div>
//       <Header />
//       <Footer />
//     </div>
//   );
// }

// export default Home;

import Header from "./headerComponent/Header";
// import ItemCard from "./ItemCard";
import MainComponent from "./MainComponent";
import "./home.css";
import Footer from "./footerComponent/Footer";
import BannerComponent from "./bannerComponent/BannerComponent";
import Service from "./ServicesComp/Services";
import AboutUsBanner from "./AboutUsComponent/AboutUsBanner/AboutUsBanner";
const SERVICE_LIST = [
  {
    img: "",
    heading: "Web Design",
    content:
      "Web design is the art of creating visually engaging websites. It involves arranging content, choosing colors and fonts, and ensuring a seamless experience across different devices. Designers use coding languages and software to craft intuitive interfaces that captivate users and adapt to evolving trends.",
  },
  {
    img: "",
    heading: "Portfolio development",
    content:
      "A portfolio developer crafts impressive and functional websites that showcase a person's or company's skills and projects. They create visually appealing platforms to display work and expertise, using web development tools and design principles to make a strong professional impression.",
  },
  {
    img: "",
    heading: "Web Development",
    content:
      "Unlock the full potential of your online presence with our expert web development services. Our experienced team combines cutting-edge technology with best practices to deliver high-performance websites that meet your business needs.",
  },
];

function Home() {
  return (
    <div>
      <Header />
      <BannerComponent />
      <Service />
      <AboutUsBanner />
      <Footer />
    </div>
  );
}

export default Home;

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
      {/* <div className="class-list">
        {SERVICE_LIST.map((items) => {
          return (
            <ItemCard
              img={items.img}
              heading={items.heading}
              content={items.content}
            />
          );
        })}
      </div> */}
      {/* <div className="why-to-select">
        <div>
          WHY CHOOSE OUR DIGITAL MARKETING AND WEB DESIGN AGENCY FOR YOUR ONLINE
          SUCCESS
        </div>
        <div>
          Let’s build a stunning web design and an effective digital marketing
          strategy together! Contact our team now and let’s bring your vision to
          life. From branding to SEO, we’ve got you covered!
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default Home;

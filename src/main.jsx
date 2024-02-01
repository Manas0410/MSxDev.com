// import React from "react";
// import ReactDOM from "react-dom/client";
// import Home from "./Home.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Home />
//   </React.StrictMode>
// );

import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
// import "./index.css";
import Service from "./ServicesComp/Services.jsx";
import ContactPage from "./ContactUsComponent/ContactPage.jsx";
import ServicePage from "./ServicesComp/page/ServicePage.jsx";
import DemoBanner from "./DemoComponent/DemoBanner/DemoBanner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <ServicePage />,
  },
  {
    path: "/services/:contact",
    element: <ContactPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/test",
    element: <DemoBanner />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);

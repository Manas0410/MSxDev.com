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
import "./index.css";
import ServiceCard from "./Utilities/serviceCard/ServiceCard.jsx";
import ContactForm from "./ContactUsComponent/ContactForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <ServiceCard />,
  },
  {
    path: "/contact",
    element: <ContactForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);

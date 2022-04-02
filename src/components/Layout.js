import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Layout;

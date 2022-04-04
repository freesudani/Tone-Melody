import React from "react";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

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

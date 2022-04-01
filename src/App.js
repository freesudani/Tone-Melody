import React from "react";
import Navbar from "./components/Navbar";
import { Box, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Tours from "./pages/Tours";
import { Route, Routes, Navigate } from "react-router-dom";
import Music from "./pages/Music";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/music" element={<Music />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Testimonials />
      <Footer />
    </Box>
  );
};

export default App;

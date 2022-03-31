import React from "react";
import Navbar from "./components/Navbar";
import { Box, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Home />
      <Testimonials />
      <Footer />
    </Box>
  );
};

export default App;

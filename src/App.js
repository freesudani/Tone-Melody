import React from "react";
import { Box, CssBaseline } from "@mui/material";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Tours from "./pages/Tours";
import { Route, Routes, Navigate } from "react-router-dom";
import Music from "./pages/Music";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/music" element={<Music />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};

export default App;

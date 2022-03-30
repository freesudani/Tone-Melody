import React from "react";
import Navbar from "./components/Navbar";
import { Box, CssBaseline } from "@mui/material";
import Home from "./pages/Home";

const App = () => {
  return (
    <Box>
      <CssBaseline />
      <Navbar />
      <Home />
    </Box>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StyleProvider from "./theme/Theme-context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyleProvider>
        <App />
      </StyleProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

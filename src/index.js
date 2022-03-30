import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StyleProvider from "./theme/Theme-context";

ReactDOM.render(
  <React.StrictMode>
    <StyleProvider>
      <App />
    </StyleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

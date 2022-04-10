import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StyleProvider from "./theme/Theme-context";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/index";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StyleProvider>
          <App />
        </StyleProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

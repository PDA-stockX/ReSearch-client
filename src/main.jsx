import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { Mobile, PC } from "~/components/common/Responsive.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

`;


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalStyle />

    <Mobile>
      <App />
    </Mobile>
    <PC>
      <App />
    </PC>
  </Provider>
);
 
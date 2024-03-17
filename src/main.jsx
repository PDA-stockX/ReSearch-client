import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { Mobile, PC } from "~/components/common/Responsive.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Mobile>
      <App />
    </Mobile>
    <PC>
      <App />
    </PC>
  </Provider>
);
 
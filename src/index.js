import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Router } from "react-router-dom";
import { History } from "./components/History";

ReactDOM.render(
  <Router history={History}>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();

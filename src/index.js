import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReactBreakpoints from "react-breakpoints";

const breakpoints = {
  mobile: 320,
  tablet: 575,
  tabletLandscape: 835,
  desktop: 1200
};

ReactDOM.render(
  <HashRouter>
  <ReactBreakpoints breakpoints={breakpoints}>
    <App />
  </ReactBreakpoints>
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

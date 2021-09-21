import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import { App } from "../app.jsx";
import "./main.scss";

const rootElement = document.getElementById("react-root");

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
)

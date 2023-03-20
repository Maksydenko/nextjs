import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import "./i18next";

import "./index.scss";
import App from "@src/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

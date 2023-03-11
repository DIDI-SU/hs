import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

import AppRouter from "./Router/AppRouter";
import UserDataProvider from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserDataProvider>
      <AppRouter />
    </UserDataProvider>
  </React.StrictMode>
);

reportWebVitals();

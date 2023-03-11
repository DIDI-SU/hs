import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Login/Login";
import Ticket from "../Ticket/Ticket";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

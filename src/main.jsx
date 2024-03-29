import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Apropos from "./Pages/Apropos/Apropos.jsx";
import Appartement from "./Pages/Appartements/Appartement.jsx";
import MainHeader from "./MainComponents/MainHeader.jsx";
import { MainFooter } from "./MainComponents/MainFooter.jsx";
import { Error } from "./Pages/Error/Error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MainHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<Apropos></Apropos>} />
        <Route path="/Appartement/:id" element={<Appartement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <MainFooter />
    </Router>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import Home from "./components/Home";
import Myauctions from "./components/Myauctions";
import { Logout } from "./components/Logout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Myauctions />} />
        <Route path="/post" element={<Logout />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

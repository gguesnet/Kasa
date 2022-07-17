import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Lodgement from "./pages/Lodgement";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import reportWebVitals from "./reportWebVitals";
import data from "./data.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index path="/" element={<Home data={data} />}></Route>
        <Route path="/a-propos" element={<About />}></Route>
        <Route
          path="/location/:locationID"
          element={<Lodgement data={data} />}
        ></Route>
        <Route path="*" element={<Notfound status={404} />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

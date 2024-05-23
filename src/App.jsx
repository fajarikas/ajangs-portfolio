import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import React from "react";
import Footer from "./Components/Footer/Footer";
import Background from "../public/assets/images/bg.png";

function App() {
  return (
    <>
      <div className="bg-[#020202] h-full font-be-vietnam z-100">
        <img src={Background} className="z-0 absolute" />
        <Router>
          <div className="w-11/12 md:w-10/12 mx-auto  ">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;

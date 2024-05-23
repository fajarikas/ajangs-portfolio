import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import React from "react";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <div className="bg-[#020202] min-h-screen max-w-screen font-be-vietnam overflow-hidden">
        <Router>
          <div className="w-11/12 md:w-10/12 mx-auto overflow-hidden">
            <Navbar />
            <div className="relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;

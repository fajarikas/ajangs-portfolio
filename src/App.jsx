import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Loading from "./Components/Loading/Loading";
import About from "./Pages/About/About";
import Service from "./Pages/Service/Service";
import "./App.css";
import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "dark";
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  if (isLoading) {
    return (
      <div className="bg-[#020202] min-h-screen max-w-screen font-be-vietnam overflow-hidden">
        <Loading />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#020202] min-h-screen max-w-screen font-be-vietnam overflow-hidden">
      <Router>
        <div className="w-11/12 md:w-10/12 mx-auto overflow-hidden">
          <Navbar />
          <div className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Service />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

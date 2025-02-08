import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import all components
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow pt-16 pb-12"> {/* Add padding for fixed navbar and footer */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
        
        
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Pages/Cart";
import Contact from "./components/Pages/Contact";
import Home from "./components/Pages/Home";

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
       <Route path="/" element={<Home />} /> 
       <Route path="/cart" element={<Cart />} />   
       <Route path="/contact" element={<Contact />} />
    </Routes>
        
    </div>
  );
}

export default App;

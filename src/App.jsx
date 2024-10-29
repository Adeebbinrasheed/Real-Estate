import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import ForRent from "./Pages/ForRent";
import ForSale from "./Pages/ForSale";
import OurAgents from "./Pages/OurAgents";

const App = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/forRent" element={<ForRent/>}/>
          <Route path="/forSale" element={<ForSale/>}/>
          <Route path="/ourAgents" element={<OurAgents/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;

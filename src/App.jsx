import React from "react";


import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Dashboard from "./Component/Dashboard/Dashboard";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
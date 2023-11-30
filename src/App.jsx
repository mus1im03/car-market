import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import CarsCategory from "./components/CarsCategory/CarsCategory";

const App = () => {
  return (
    <>
      <Header />
      <CarsCategory />
      <Routes>
        {/* <Route path="/" element={<MainContent />} /> */}
        {/* <Route path="/" element={<CarsCategory />} /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;

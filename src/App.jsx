import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
// import OneCard from "./components/OneCard/OneCard";
import YandexMap from "./components/Map/YandexMap";

const App = () => {
  return (
    <>
   
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/geo" element={<YandexMap />} />
        <Route path="/gep" element={<MainContent />}/>
      </Routes>
      <Footer />
     
    </>
  );
};

export default App;


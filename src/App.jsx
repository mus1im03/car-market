import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

// import OneCard from "./components/OneCard/OneCard";
import YandexMap from "./components/Map/YandexMap";
import CarsCategory from "./components/CarsCategory/CarsCategory";
import Card from "./components/cards/card";
import OneCard from "./components/OneCard/OneCard";


const App = () => {
  return (
    <>
   
      <Header />

      <Card />
      <CarsCategory />

    <OneCard />

      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/geo" element={<YandexMap />} />
        <Route path="/gep" element={<MainContent />}/>
       <Route path="/oneCard" element={<OneCard />}/>
      </Routes>
      <Footer />

     

    </>
  );
};

export default App;


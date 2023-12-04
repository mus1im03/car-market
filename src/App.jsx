import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import YandexMap from "./components/Map/YandexMap";
import CarsCategory from "./components/CarsCategory/CarsCategory";
import Card from "./components/cards/card";
import CarsCardList from "./components/CarsCategory/CarsCardList";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/geo" element={<YandexMap />} />
        <Route path="/sellCars" element={<Card />} />
        <Route path="/category/:categoryId" element={<CarsCategory />}/>
        <Route path="/carsCategory" element={<CarsCategory />} />
        <Route path='/carsKonstruktor/:id' element={<CarsCardList />}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;


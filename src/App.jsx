import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import MainContent from "./components/MainContent/MainContent";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import YandexMap from "./components/Map/YandexMap";
import CarsCategory from "./components/CarsCategory/CarsCategory";
import Card from "./components/cards/card";
import OneCard from "./components/OneCard/OneCard";
import CarsCardList from "./components/CarsCategory/CarsCardList";
import Search from "./components/Search/Search";
import AnimatedRoutes from "./AnimatedRoutes";
// import CarModel from "./components/3Dmodel/CarModel";

const App = () => {

  return (
    <>
      <Header />
      <AnimatedRoutes />
      <Footer />
    </>
  );
};

export default App;

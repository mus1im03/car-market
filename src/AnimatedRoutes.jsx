import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import YandexMap from "./components/Map/YandexMap";
import OneCard from "./components/OneCard/OneCard";
import Card from "./components/cards/card";
import CarsCardList from "./components/CarsCategory/CarsCardList";
import Search from "./components/Search/Search";
import CarsCategory from "./components/CarsCategory/CarsCategory";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainContent />} />
        <Route path="/geo" element={<YandexMap />} />
        <Route path="/gep" element={<MainContent />} />
        <Route path="/oneCard" element={<OneCard />} />
        <Route path="/carsList/:id" element={<OneCard />} />

        <Route path="/carCategory/:categoryId" element={<Card />} />
        <Route path="/sellCars" element={<Card />} />
        <Route path="/carsCategory" element={<CarsCategory />} />
        <Route path="/category/:categoryId" element={<CarsCategory />} />
        <Route path="/carsKonstruktor/:id" element={<CarsCardList />} />
        <Route path="/search-input" element={<Search />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

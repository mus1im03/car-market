import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import AnimatedRoutes from "./AnimatedRoutes";

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

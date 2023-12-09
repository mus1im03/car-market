import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCars } from "../../features/carsSlice";
import styles from "./Header.module.css";
import logo from "../../assets/img/BMW_Grey-Colour_RGB.SVG.asset.1697707041685.png";
import searchIcon from "../../assets/img/icons8-поиск-30.png";
import geoIcon from "../../assets/img/icons8-location-32.png";
import { motion } from "framer-motion";

const Header = () => {
  const [back, setBackground] = useState(false);

  const headerBlockStyle = {
    backgroundColor: back ? "#fff" : "#2f2e2e",
  };

  return (
    <header style={headerBlockStyle}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/800px-BMW_logo_%28gray%29.svg.png"
              }
              alt="logo"
              onClick={() => setBackground(false)}
            />
          </Link>
        </div>
        <div className={styles.nav_block}>
          <Link to="/carsCategory" onClick={() => setBackground(true)}>
            Автомобили
          </Link>
          <Link to="/sellCars" onClick={() => setBackground(true)}>
            Покупка онлайн
          </Link>
        </div>
        <div className={styles.search_block}>
          <Link to="/geo">
            <motion.img
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              src={geoIcon}
              alt="geo"
            />
          </Link>
          <Link to="/search-input">
            <motion.img
              whileHover={{ scale: 1.2 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              src={searchIcon}
              alt="search"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

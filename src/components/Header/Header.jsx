import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/img/BMW_Grey-Colour_RGB.SVG.asset.1697707041685.jpg";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/img/icons8-поиск-30.png";
import profilIcon from "../../assets/img/icons8-пользователь-24.png";
import geoIcon from "../../assets/img/icons8-location-32.png";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.nav_block}>
          <Link>Автомобили</Link>
          <Link>Электромобили</Link>
        </div>
        <div className={styles.search_block}>
          <Link>
            <img src={profilIcon} alt="profil" />
          </Link>
          <Link>
            <img src={geoIcon} alt="geo" />
          </Link>
          <Link>
            <img src={searchIcon} alt="search" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

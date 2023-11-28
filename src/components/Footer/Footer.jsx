import React from "react";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_container}>
        <div className={styles.info_block}>
            <span className={styles.title}>ВЫБОР И ПОКУПКА</span>
            <div className={styles.navs}>
                <a href="" className={styles.info}>Модельный ряд</a>
                <a href="" className={styles.info}>Автомобили с пробегом</a>
                <a href="" className={styles.info}>BMW Premium Selection</a>
            </div>
        </div>
        <div className={styles.info_block}>
            <span className={styles.title}>СЕРВИС И АКСЕССУАРЫ</span>
            <div className={styles.navs}>
                <a href="" className={styles.info}>Запись на сервис</a>
                <a href="https://www.bmw.ru/ru/topics/offers-and-services/original-bmw-accessories/bmw-accessories-configurator.html" className={styles.info}>Аксессуарный конфигуратор</a>
                <a href="https://shop.bmw.ru/" className={styles.info}>Магазин Аксессуаров BMW</a>
                <a href="https://www.bmw.ru/ru/topics/offers-and-services/personal-services/bmw-rsa.html" className={styles.info}>Программа помощи на дорогах</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import styles from "./MainContent.module.css";
import remont from "../../assets/img/remont.webp";
import cars from "../../assets/img/cars.webp";
import dillers from "../../assets/img/NxW_Home_ICON_TESTDRIVE.webp";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import CarModel from "../3Dmodel/CarModel";
import { motion } from "framer-motion";

const MainContent = () => {
  const dispatch = useDispatch();
  return (
    <motion.main
      initial={{ opacity: 0, transform: "translate3d(100%,0,0)" }}
      animate={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
      exit={{ opacity: 0, transform: "translate3d(-50%,0,0)" }}
    >
      <div className={styles.main_container}>
        <div className={styles.background}>
          <CarModel />
        </div>

        <div className={styles.choose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className={styles.title}
          >
            <p>ВАШ BMW</p>
            <span>ВЫБЕРИТЕ ДЛЯ СЕБЯ</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className={styles.options}
          >
            <div className={styles.options_block}>
              <img src={remont} alt="remont" />
              <span className={styles.card_text}>Запись на сервис</span>
              <motion.button
                whileHover={{ scale: 1.2 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                className={styles.podrobnee}
              >
                Подробнее
              </motion.button>
            </div>
            <div className={styles.options_block}>
              <img src={cars} alt="cars" />
              <span className={styles.card_text}>Автомобили с пробегом</span>
              <Link to="/sellCars">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className={styles.podrobnee}
                >
                  Найти сейчас
                </motion.button>
              </Link>
            </div>
            <div className={styles.options_block}>
              <img src={dillers} alt="dillers" />
              <span className={styles.card_text}>Диллер BMW</span>
              <Link to="/geo">
                {" "}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}
                  className={styles.podrobnee}
                >
                  Подробнее
                </motion.button>{" "}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
};

export default MainContent;

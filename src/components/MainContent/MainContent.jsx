import React from "react";
import styles from "./MainContent.module.css";
import remont from "../../assets/img/remont.webp";
import cars from "../../assets/img/cars.webp";
import dillers from "../../assets/img/NxW_Home_ICON_TESTDRIVE.webp";

const MainContent = () => {
  return (
    <main>
      <div className={styles.main_container}>
        <div className={styles.background}>
          <div className={styles.hello_block}>
            <span className={styles.first_span}>С удовольствием</span>
            <span className={styles.sec_span}>за рулем</span>
          </div>
          <h1>Всегда в своей стихии</h1>
        </div>

        <div className={styles.choose}>
          <div className={styles.title}>
            <p>ВАШ BMW</p>
            <span>ВЫБЕРИТЕ ДЛЯ СЕБЯ</span>
          </div>
          <div className={styles.options}>
            <div className={styles.options_block}>
              <img src={remont} alt="remont"/>
              <span className={styles.card_text}>Запись на сервис</span>
              <button className={styles.podrobnee}>Подробнее</button>
            </div>
            <div className={styles.options_block}>
              <img src={cars} alt="cars" />
              <span className={styles.card_text}>Автомобили с пробегом</span>
              <button className={styles.podrobnee}>Найти сейчас</button>
            </div>
            <div className={styles.options_block}>
              <img src={dillers} alt="dillers" />
              <span className={styles.card_text}>Диллер BMW</span>
              <button className={styles.podrobnee}>Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;

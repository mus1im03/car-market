import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../OneCard/OneCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../features/carsSlice";
import Infomode from "./Infomode";
import { dataBase } from "./fakedatabase";
import { useState } from "react";
const OneCard = () => {
  const dispatch = useDispatch();

  const cars = useSelector((state) => state.cars.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const [pashState, setPashState] = useState(true);

  const handlePashClick = () => {
    setPashState(pashState ? false : true);
  };

  return (
    <div>
      <div>
        <div className={styles.imgFirst}>
          <img
            src="https://cdn.kodixauto.ru/media/image/609bb310a10eff0001a590f7"
            alt=""
          />
        </div>

        <div className={styles.header}>
          <Link to="/#">Автомобили</Link>
          <Link to="/#">Официальные дилеры BMW</Link>
        </div>

        <div className={styles.cont}>
          <div className={styles.img}>
            <img
              src="https://cdn.kodixauto.ru/media//media/resized_image/webp/654b5c59f28fa87f7e0bd8b5/1200/0"
              alt=""
            />
          </div>

          <div className={styles.title}>
            <div>
              <p>BMW X6 xDrive40i M Sport Edition 21</p>
              <div className={styles.p}>
                <p>3.0 л., 340 л.с., Бензин</p>
                <p>АКПП</p>
                <p>Полный привод</p>
                <p>50 300 км</p>
                <p>2 владельца</p>
                <p>Экстерьер: Черный Сапфир</p>
                <p>
                  Интерьер: Кожа Vernasca с перфорацией особого дизайна "Черный"
                </p>
                <p className={styles.cen}>от 11 690 000 ₽</p>
              </div>
              <button className={styles.btn}>получить предложение</button>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.text}>
            <div className={styles.divbtn}>
              <p onClick={handlePashClick}>СТАНДАРТНОЕ ОБОРУДОВАНИЕ </p>
              <p onClick={handlePashClick}>ТЕХНИЧСЕКИЕ ХАРАКТЕРИСТИКИ</p>
            </div>

            {pashState && (
              <div className={styles.infomode}>
                <Infomode
                  name={"Системы информации и коммуникации"}
                  data={dataBase.systems}
                />
                <Infomode
                  name={"Безопасность, освещение и обзор"}
                  data={dataBase.security}
                />
                <Infomode name={"Пакеты и линии"} data={dataBase.line} />
                <Infomode name={"Другое"} data={dataBase.more} />
                <Infomode
                  name={"Коробка передач и ходовая часть"}
                  data={dataBase.transmission}
                />
                <Infomode name={"Колеса и диски"} data={dataBase.wheels} />
                <Infomode name={"Экстерьер"} data={dataBase.exterior} />
                <Infomode name={"Интерьер"} data={dataBase.interior} />
                <Infomode
                  name={"Обивка и дизайн интерьера"}
                  data={dataBase.desing}
                />
                <Infomode
                  name={"Функциональное оборудование"}
                  data={dataBase.function}
                />
              </div>
            )}
            {!pashState && (
              <div className={styles.contt}>
                <div>
                  <p>ДВИГАТЕЛЬ</p>
                  <div className={styles.info_block}>
                    <div className={styles.info_blocks}>
                      <p>Рабочий объем, куб. см ................</p>
                      <p>
                        Максимальный крутящий момент, Н•м при об/мин
                        ................
                      </p>
                    </div>
                    <div className={styles.info_blocks}>
                      <p>
                        Максимальная мощность, л. с. при об/мин ................
                      </p>
                      <p>
                        Количество цилиндров / клапанов на цилиндр
                        ................
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p>ХОДОВЫЕ КАЧЕСТВА</p>
                  <div className={styles.info_block}>
                    <div className={styles.info_blocks}>
                      <p>Максимальная скорость, км/ч ................</p>
                    </div>
                    <div className={styles.info_blocks}>
                      <p>Время разгона 0–100 км/ч, сек ................</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p>РАСХОД ТОПЛИВА</p>
                  <div className={styles.info_block}>
                    <div className={styles.info_blocks}>
                      <p>Смешанный цикл, л/100 км ................</p>
                      <p>Загородный цикл, л/100 км ................</p>
                    </div>
                    <div className={styles.info_blocks}>
                      <p>Городской цикл, л/100 км ................</p>
                      <p>Выброс СО2, г/км ................</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p>ГАБАРИТЫ</p>
                  <div className={styles.info_block}>
                    <div className={styles.info_blocks}>
                      <p>Длина, мм ................</p>
                      <p>Высота, мм (вместе с антенной) ................</p>
                    </div>
                    <div className={styles.info_blocks}>
                      <p>Ширина, мм ................</p>
                      <p>Клиренс, мм ................</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p>МАССА</p>
                  <div className={styles.info_block}>
                    <div className={styles.info_blocks}>
                      <p>Собственная масса (ЕС), кг................</p>
                    </div>
                    <div className={styles.info_blocks}>
                      <p>Допустимая полная масса, кг ................</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default OneCard;

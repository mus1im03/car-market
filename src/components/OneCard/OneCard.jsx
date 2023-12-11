import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../OneCard/OneCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../features/carsSlice";
import Infomode from "./Infomode";
import { dataBase } from "./fakedatabase";
import Offers from "../Offers/Offers";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from 'framer-motion'


const OneCard = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const carInf = useSelector((state) =>
    state.cars.cars.find((cars) => cars._id === id)
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const scroll = () => {
    window.scrollBy({
      top: 1200,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const [pashState, setPashState] = useState(true);

  const handlePashClick = () => {
    setPashState(pashState ? false : true);
  };

  return (
    <motion.div initial={{width: 0}} animate={{width: "100%"}} exit={{x: window.innerWidth, transition: {duration: 0.5}}}>
      <div>
        <div className={styles.cont}>
          <div className={styles.img}>
            <Slider {...settings}>
              {carInf?.cars_info.image.map((item) => (
                <img src={`http://localhost:4090${item}`} alt="" />
              ))}
            </Slider>
          </div>
          <div className={styles.title}>
            <div className={styles.title_first_block}>
              <p>{carInf?.cars_info.name}</p>
              <div className={styles.p}>
                <p>{carInf?.cars_info.h_p} Бензин</p>
                <p>{carInf?.cars_info.transmission}</p>
                <p>{carInf?.cars_info.drive_unit}</p>
                <p>{carInf?.cars_info.mileage}</p>
                <p>{carInf?.cars_info.owners} владельца</p>
                <p>Экстерьер: {carInf?.cars_info.color}</p>
                <p>Интерьер: {carInf?.cars_info.interior_color}</p>
                <p className={styles.cen}>от {carInf?.cars_info.price}</p>
              </div>
              <button className={styles.btn} onClick={() => scroll()}>
                получить предложение
              </button>
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
                      <p>Рабочий объем, куб. см ................{carInf?.engine.working_volume}</p>
                      <p>
                        Максимальный крутящий момент, Н•м при об/мин
                        ................{carInf?.engine.maximum_torque}
                      </p>
                    </div>
                    <div className={styles.info_blocks}>
                      <p>
                        Максимальная мощность, л. с. при об/мин ................{carInf?.engine.maximum_power}
                      </p>
                      <p>
                        Количество цилиндров / клапанов на цилиндр
                        ................{carInf?.engine.number_of_cylinders}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p>ХОДОВЫЕ КАЧЕСТВА</p>
                  <div className={styles.info_block}>
                    <div className={styles.info_blocks}>
                      <p>Максимальная скорость, км/ч ................{carInf?.driving_performance.maximum_speed}</p>
                    </div>
                    <div className={styles.info_blocks}>
                      <p>Время разгона 0–100 км/ч, сек ................{carInf?.driving_performance.acceleration_time}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p>РАСХОД ТОПЛИВА</p>
                  <div className={styles.info_block}>
                    <div className={styles.info_blocks}>
                      <p>Смешанный цикл, л/100 км ................{carInf?.fuel_consuption.combined_cycle}</p>
                      <p>Загородный цикл, л/100 км ................{carInf?.fuel_consuption.extra_urban_cycle}</p>
                    </div>
                    <div className={styles.info_blocks}>
                      <p>Городской цикл, л/100 км ................{carInf?.fuel_consuption.urban_cycle}</p>
                      <p>Выброс СО2, г/км ................{carInf?.fuel_consuption.co2_emissions}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p>ГАБАРИТЫ</p>
                  <div className={styles.info_block}>
                    <div className={styles.info_blocks}>
                      <p>Длина, мм ................{carInf?.dimensions.length_mm}</p>
                      <p>Высота, мм (вместе с антенной) ................{carInf?.dimensions.height_mm}</p>
                    </div>
                    <div className={styles.info_blocks}>
                      <p>Ширина, мм ................{carInf?.dimensions.width_mm}</p>
                      <p>Клиренс, мм ................{carInf?.dimensions.ground_clearance}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p>МАССА</p>
                  <div className={styles.info_block}>
                    <div className={styles.info_blocks}>
                      <p>Собственная масса (ЕС), кг................{carInf?.weight.unladen_weight}</p>
                    </div>
                    <div className={styles.info_blocks}>
                      <p>Допустимая полная масса, кг ................{carInf?.weight.permissible_total}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div></div>
        </div>
      </div>
      <div className={styles.offers}>
        <Offers />
      </div>
    </motion.div>
  );
};

export default OneCard;

import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../OneCard/OneCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../features/carsSlice";
import Infomode from "./Infomode";
import { dataBase } from "./fakedatabase";
import Offers from "../Offers/Offers";

const OneCard = () => {

  const dispatch = useDispatch();

  const { id } = useParams();

  const carInf = useSelector((state) =>
    state.cars.cars.find((cars) => cars._id === id)
  );

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <div>
        <div className={styles.cont}>
          <div className={styles.img}>
            <img
              src={`http://localhost:4090${carInf?.cars_info.image[0]}`}
              alt="photo"
            />
          </div>

          <div className={styles.title}>
            <div>
              <p>{carInf?.cars_info.name}</p>
              <div className={styles.p}>
                <p>{carInf?.cars_info.h_p} Бензин</p>
                <p>{carInf?.cars_info.transmission}</p>
                <p>{carInf?.cars_info.drive_unit}</p>
                <p>{carInf?.cars_info.mileage}</p>
                <p>{carInf?.cars_info.owners} владельца</p>
                <p>Экстерьер: {carInf?.cars_info.color}</p>
                <p>
                  Интерьер: {carInf?.cars_info.interior_color}
                </p>
                <p className={styles.cen}>от {carInf?.cars_info.price}</p>
              </div>
              <button className={styles.btn}>получить предложение</button>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.text}>
            <p>СТАНДАРТНОЕ ОБОРУДОВАНИЕ ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</p>
            <div className={styles.infomode}>
                <Infomode name={"Системы информации и коммуникации"} data={dataBase.systems}/>
                <Infomode name={"Безопасность, освещение и обзор"}  data={dataBase.security}/>
                <Infomode name={"Пакеты и линии"}  data={dataBase.line}/>
                <Infomode name={"Другое"}  data={dataBase.more}/>
                <Infomode name={"Коробка передач и ходовая часть"}  data={dataBase.transmission}/>
                <Infomode name={"Колеса и диски"}  data={dataBase.wheels}/>
                <Infomode name={"Экстерьер"}  data={dataBase.exterior}/>
                <Infomode name={"Интерьер"}  data={dataBase.interior}/>
                <Infomode name={"Обивка и дизайн интерьера"}  data={dataBase.desing}/>
                <Infomode name={"Функциональное оборудование"}  data={dataBase.function}/>
            </div>
            <Offers />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneCard;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchKonstruktorCar } from "../../features/carConstruktorSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CarsCardList.module.css";

const CarsCardList = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const carInfo = useSelector((state) =>
    state.konstruktor.konstruktor.find((kontstr) => kontstr._id === id)
  );

  useEffect(() => {
    // window.scroll(0, 0);
    dispatch(fetchKonstruktorCar());
    // getValuesFromLocalStorage();
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.title_block}>
        <img src={`http://localhost:4090${carInfo?.img}`} alt="" className={styles.car_img}/>
        
        <h1 className={styles.car_name}>{carInfo?.name}</h1>

        <img src={`http://localhost:4090${carInfo?.mpower}`} alt="" className={styles.car_mpower}/>

        <div className={styles.car_power}>
          <span>{carInfo?.h_p}</span>
          <p>Мощность</p>
        </div>

        <div className={styles.engine_type}>
          <span>{carInfo?.engineType}</span>
          <p>Двигатель</p>
        </div>
      </div>

      <div className={styles.konfig_block}>
        <p className={styles.konfig_car_name}>ВИЗУАЛИЗИРУЙТЕ ВАШ НОВЫЙ {carInfo?.name}</p>

        
      </div>
    </div>
  );
};

export default CarsCardList;

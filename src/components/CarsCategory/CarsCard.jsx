import React, { useEffect } from "react";
import styles from "./CarsCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchKonstruktorCar } from "../../features/carConstruktorSlice";
import { Link, useParams } from "react-router-dom";

const CarsCard = () => {
  
  const { categoryId } = useParams();

  const dispatch = useDispatch();

  const konstruktor = useSelector((state) =>
    state.konstruktor.konstruktor.filter((konstruk) => {
      if (!categoryId) return true;

      return konstruk.categoryId === categoryId;
    })
  );

  useEffect(() => {
    dispatch(fetchKonstruktorCar());
  }, [dispatch]);

  return (
    <div className={styles.cars_category}>
      {konstruktor.map((konst) => {
        return (
            <div className={styles.card}>
              <img
                src={`http://localhost:4090${konst.titleImg}`}
                className={styles.card_img}
              />
              <img
                src={`http://localhost:4090${konst.mpower}`}
                className={styles.mPower}
              />
              <span className={styles.card_title}>{konst.name}</span>
              <span className={styles.card_engine}>{konst.engineType}</span>
            </div>
        );
      })}
    </div>
  );
};

export default CarsCard;
import React, { useEffect } from "react";
import styles from "./CarsCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchKonstruktorCar } from "../../features/carConstruktorSlice";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

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
          <Link to={`/carsKonstruktor/${konst._id}`}>
            <div className={styles.card}>
              <motion.img
                src={`http://localhost:4090${konst.titleImg}`}
                className={styles.card_img}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <img
                src={`http://localhost:4090${konst.mpower}`}
                className={styles.mPower}
              />
              <span className={styles.card_title}>{konst.name}</span>
              <span className={styles.card_engine}>{konst.engineType}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CarsCard;

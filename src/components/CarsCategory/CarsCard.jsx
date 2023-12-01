import React, { useEffect } from "react";
import styles from "./CarsCard.module.css";
import { fetchCategories } from "../../features/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import mpower from "../../assets/img/BMW_M.png";

const CarsCard = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={styles.cars_category}>
      {categories.map((category) => {
        return (
          <div className={styles.card}>
            <img src={`http://localhost:4090${category.img}`} className={styles.card_img}/>
            <img src={mpower}  className={styles.mPower}/>
            <span className={styles.card_title}>{category.title}</span>
            <span className={styles.card_engine}>{category.engineType}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CarsCard;

import React, { useEffect } from "react";
import styles from "./CarsCategory.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/categorySlice";
import CarsCard from "./CarsCard";

const CarsGenres = () => {
    
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={styles.category_block}>
      <div className={styles.category_title_block}>
        <span className={styles.text_category_title}>ВЫБЕРИТЕ СВОЙ BMW.</span>
        <div className={styles.categories}>
          {categories.map((category) => {
            return (
              <span className={styles.category_name}>{category.name}</span>
            );
          })}
        </div>
      </div>
      <CarsCard />
    </div>
  );
};

export default CarsGenres;

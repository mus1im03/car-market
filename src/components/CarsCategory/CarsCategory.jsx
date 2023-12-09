import React, { useEffect } from "react";
import styles from "./CarsCategory.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/categorySlice";
import CarsCard from "./CarsCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CarsGenres = () => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className={styles.category_block}>
      <div className={styles.category_title_block}>
        <motion.div
          animate={{ x: 60 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className={styles.choose_bmw_title}
        >
          <span className={styles.text_category_title}>ВЫБЕРИТЕ СВОЙ BMW.</span>
        </motion.div>
        <div className={styles.categories}>
          {categories.map((category) => {
            return (
              <Link to={`/category/${category._id}`}>
                <span className={styles.category_name}>{category.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <CarsCard />
    </div>
  );
};

export default CarsGenres;

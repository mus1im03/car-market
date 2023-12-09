import { useEffect } from "react";
import styles from "../Cards/card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../features/carsSlice";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchCategories } from "../../features/categorySlice";

const Card = () => {
  const dispatch = useDispatch();

  const { categoryId } = useParams();

  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const cars = useSelector((state) =>
    state.cars.cars.filter((car) => {
      if (!categoryId) return true;

      return car.categoryId === categoryId;
    })
  );

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.osnova}
    >
      <div className={styles.categories}>
        <motion.div
          animate={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 3 }}
          className={styles.wrapper}
        >
          {categories.map((category) => {
            return (
              <Link to={`/carCategory/${category._id}`}>
                <span className={styles.category_name}>{category.title}</span>
              </Link>
            );
          })}
        </motion.div>
      </div>

      {cars.map((car) => {
        return (
          <Link to={`/carsList/${car._id}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className={styles.carta}
              key={car._id}
            >
              <div className={styles.image}>
                <Slider {...settings}>
                  {car.cars_info.image.map((item) => {
                    return (
                      <img src={`http://localhost:4090${item}`} alt="car" />
                    );
                  })}
                </Slider>
              </div>
              <div className={styles.info}>
                <h4>{car.cars_info.name}</h4>
                <p>Год выпуска: {car.cars_info.year} г.</p>
                <ul className={styles.character}>
                  <li>Мощность: {car.cars_info.h_p} </li>
                  <li>Коробка передач: {car.cars_info.transmission}</li>
                  <li>Привод: {car.cars_info.drive_unit}</li>
                  <li>Пробег: {car.cars_info.mileage}</li>
                  <li>Кол-во владельцев: {car.cars_info.owners} </li>
                </ul>
              </div>
            </motion.div>
          </Link>
        );
      })}
    </motion.div>
  );
};

export default Card;

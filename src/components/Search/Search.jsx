import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../features/carsSlice";
import styles from './Search.module.css'
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const Search = () => {

  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const cars = useSelector((state) => state.cars.cars);

  const filtered = cars.filter((item) => {
    return item.cars_info.name.toLowerCase().includes(value.toLowerCase());
  });

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={styles.block_input}>
      <input
        type="text"
        id=""
        placeholder="Введите название"
        onChange={(e) => setValue(e.target.value)}
      />
      <ul className={styles.item}>
        {value &&
          filtered.map((car) => (
            <Link to={`/carsList/${car._id}`} key={car._id}>
              <li className={styles.item_li}>{car.cars_info.name}</li>
            </Link>
          ))}
      </ul>
    </motion.div>
  );
};

export default Search;

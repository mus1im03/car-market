import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../features/carsSlice";
import styles from './Search.module.css'
import { Link } from "react-router-dom";

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
    <div className={styles.block_input}>
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
    </div>
  );
};

export default Search;

import { useEffect } from "react";
import styles from "../Cards/card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../features/carsSlice";
const Card = () => {
  const cars = useSelector((state) => state.cars.cars);
  console.log(cars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <div className={styles.osnova}>
      {cars.map((car) => {
        return (
          <div className={styles.carta} key={car._id}>
            <div className={styles.image}>
              <img  src={`http://localhost:4090${car.cars_info.image[0]}`}
                    alt="photo" />
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
          </div>
        );
      })}
    </div>
  );
};

export default Card;

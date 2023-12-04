import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchKonstruktorCar } from "../../features/carConstruktorSlice";
import { useDispatch } from "react-redux";

const CarsCardList = () => {

  const dispatch = useDispatch();

  const { id } = useParams();

  const carInfo = useSelector((state) =>
    state.konstruktor.konstruktor.find((kontstr) => kontstr._id === id)
  );

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(fetchKonstruktorCar());
    getValuesFromLocalStorage();
  }, [dispatch]);

  return (

    <div>
        <img src={`http://localhost:4090${carInfo?.img}`} alt="" />
    </div>
  )
};

export default CarsCardList;

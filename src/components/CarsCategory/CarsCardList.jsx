import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchKonstruktorCar } from "../../features/carConstruktorSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CarsCardList.module.css";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Scroll } from "@react-three/drei";

const CarsCardList = () => {
  // Цвета машины

  const [carColor, setCarColor] = useState(true);

  const [whiteColor, setWhiteColor] = useState(true);

  const [blackColor, setBlackColor] = useState(false);

  const [blueColor, setBlueColor] = useState(false);

  const [redColor, setRedColor] = useState(false);

  const handleColor = () => {
    setCarColor(true);
    setCarSteel(false);
    setCarInterer(false);
    setCarDecor(false);
    setWhiteColor(true);
    setBlackColor(false);
    setBlueColor(false);
    setRedColor(false);
    setFirstSteel(false);
    setSecSteel(false);
    setThirdSteel(false);
    setFourthSteel(false);
    setIntererWhite(false);
    setIntererRed(false);
    setIntererGreyBlack(false);
    setIntererBlack(false);
    setDecorMesh(false);
    setDecorKarbon(false);
    setDecorBlack(false);
    setDecorWhite(false);
  };

  const handleWhiteColor = () => {
    setWhiteColor(true);
    setBlackColor(false);
    setBlueColor(false);
    setRedColor(false);
  };

  const handleBlackColor = () => {
    setWhiteColor(false);
    setBlackColor(true);
    setBlueColor(false);
    setRedColor(false);
  };

  const handleBlueColor = () => {
    setWhiteColor(false);
    setBlackColor(false);
    setBlueColor(true);
    setRedColor(false);
  };

  const handleRedColor = () => {
    setWhiteColor(false);
    setBlackColor(false);
    setBlueColor(false);
    setRedColor(true);
  };

  // Тип дисков

  const [carSteel, setCarSteel] = useState(false);

  const [firstSteel, setFirstSteel] = useState(false);

  const [secSteel, setSecSteel] = useState(false);

  const [thirdSteel, setThirdSteel] = useState(false);

  const [fourthSteel, setFourthSteel] = useState(false);

  const handleSteel = () => {
    setCarColor(false);
    setCarSteel(true);
    setCarInterer(false);
    setCarDecor(false);
    setWhiteColor(false);
    setBlackColor(false);
    setBlueColor(false);
    setRedColor(false);
    setFirstSteel(true);
    setSecSteel(false);
    setThirdSteel(false);
    setFourthSteel(false);
    setIntererWhite(false);
    setIntererRed(false);
    setIntererGreyBlack(false);
    setIntererBlack(false);
    setDecorMesh(false);
    setDecorKarbon(false);
    setDecorBlack(false);
    setDecorWhite(false);
  };

  const handleFirstSteel = () => {
    setFirstSteel(true);
    setSecSteel(false);
    setThirdSteel(false);
    setFourthSteel(false);
  };

  const handleSecSteel = () => {
    setFirstSteel(false);
    setSecSteel(true);
    setThirdSteel(false);
    setFourthSteel(false);
  };

  const handleThirdSteel = () => {
    setFirstSteel(false);
    setSecSteel(false);
    setThirdSteel(true);
    setFourthSteel(false);
  };

  const handleFourthSteel = () => {
    setFirstSteel(false);
    setSecSteel(false);
    setThirdSteel(false);
    setFourthSteel(true);
  };

  // Цвет салона

  const [carInterer, setCarInterer] = useState(false);

  const [intererWhite, setIntererWhite] = useState(false);

  const [intererRed, setIntererRed] = useState(false);

  const [intererGreyBlack, setIntererGreyBlack] = useState(false);

  const [intererBlack, setIntererBlack] = useState(false);

  const handleInterer = () => {
    setCarColor(false);
    setCarSteel(false);
    setCarInterer(true);
    setCarDecor(false);
    setWhiteColor(false);
    setBlackColor(false);
    setBlueColor(false);
    setRedColor(false);
    setFirstSteel(false);
    setSecSteel(false);
    setThirdSteel(false);
    setFourthSteel(false);
    setIntererWhite(true);
    setIntererRed(false);
    setIntererGreyBlack(false);
    setIntererBlack(false);
    setDecorMesh(false);
    setDecorKarbon(false);
    setDecorBlack(false);
    setDecorWhite(false);
  };

  const handleWhiteInterer = () => {
    setIntererWhite(true);
    setIntererRed(false);
    setIntererGreyBlack(false);
    setIntererBlack(false);
  };

  const handleRedInterer = () => {
    setIntererWhite(false);
    setIntererRed(true);
    setIntererGreyBlack(false);
    setIntererBlack(false);
  };

  const handleGreyBlackInterer = () => {
    setIntererWhite(false);
    setIntererRed(false);
    setIntererGreyBlack(true);
    setIntererBlack(false);
  };

  const handleBlackInterer = () => {
    setIntererWhite(false);
    setIntererRed(false);
    setIntererGreyBlack(false);
    setIntererBlack(true);
  };

  // Декоративные планки

  const [carDecor, setCarDecor] = useState(false);

  const [decorMesh, setDecorMesh] = useState(false);

  const [decorKarbon, setDecorKarbon] = useState(false);

  const [decorBlack, setDecorBlack] = useState(false);

  const [decorWhite, setDecorWhite] = useState(false);

  const handleDecor = () => {
    setCarColor(false);
    setCarSteel(false);
    setCarInterer(false);
    setCarDecor(true);
    setWhiteColor(false);
    setBlackColor(false);
    setBlueColor(false);
    setRedColor(false);
    setFirstSteel(false);
    setSecSteel(false);
    setThirdSteel(false);
    setFourthSteel(false);
    setIntererWhite(false);
    setIntererRed(false);
    setIntererGreyBlack(false);
    setIntererBlack(false);
    setDecorMesh(true);
    setDecorKarbon(false);
    setDecorBlack(false);
    setDecorWhite(false);
  };

  const handleMeshDecor = () => {
    setDecorMesh(true);
    setDecorKarbon(false);
    setDecorBlack(false);
    setDecorWhite(false);
  };

  const handleKarbonDecor = () => {
    setDecorMesh(false);
    setDecorKarbon(true);
    setDecorBlack(false);
    setDecorWhite(false);
  };

  const handleBlackDecor = () => {
    setDecorMesh(false);
    setDecorKarbon(false);
    setDecorBlack(true);
    setDecorWhite(false);
  };

  const handleWhiteDecor = () => {
    setDecorMesh(false);
    setDecorKarbon(false);
    setDecorBlack(false);
    setDecorWhite(true);
  };

  ////////////////////////////////////////////////////////////

  const dispatch = useDispatch();

  const [selected, setSelected] = useState(0);

  const { id } = useParams();

  const carInfo = useSelector((state) =>
    state.konstruktor.konstruktor.find((kontstr) => kontstr._id === id)
  );

  useEffect(() => {
    dispatch(fetchKonstruktorCar());
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0, transform: "translate3d(100%,0,0)" }}
      animate={{ opacity: 1, transform: "translate3d(0%,0,0)" }}
      exit={{ opacity: 0, transform: "translate3d(-50%,0,0)" }}
      className={styles.container}
    >
      <div className={styles.title_block}>
        <img
          src={`http://localhost:4090${carInfo?.img}`}
          alt=""
          className={styles.car_img}
        />

        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className={styles.car_name}
        >
          {carInfo?.name}
        </motion.h1>

        <motion.img
          src={`http://localhost:4090${carInfo?.mpower}`}
          alt=""
          className={styles.car_mpower}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className={styles.car_power}
        >
          <span>{carInfo?.h_p}</span>
          <p>Мощность</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className={styles.engine_type}
        >
          <span>{carInfo?.engineType}</span>
          <p>Двигатель</p>
        </motion.div>
      </div>

      <div className={styles.konfig_block}>
        <motion.p
          animate={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 3 }}
          className={styles.konfig_car_name}
        >
          ВИЗУАЛИЗИРУЙТЕ ВАШ НОВЫЙ {carInfo?.name}
        </motion.p>

        <div className={styles.car_configurator}>
          <AnimatePresence>
            {whiteColor && (
              <img
                src={`http://localhost:4090${carInfo?.car_color_img[0]}`}
                alt="car-white"
                className={styles.car_congfig_color}
              />
            )}
            {blackColor && (
              <img
                src={`http://localhost:4090${carInfo?.car_color_img[1]}`}
                alt="car-black"
                className={styles.car_congfig_color}
              />
            )}
            {blueColor && (
              <img
                src={`http://localhost:4090${carInfo?.car_color_img[2]}`}
                alt="car-blue"
                className={styles.car_congfig_color}
              />
            )}
            {redColor && (
              <img
                src={`http://localhost:4090${carInfo?.car_color_img[3]}`}
                alt="car-red"
                className={styles.car_congfig_color}
              />
            )}

            {firstSteel && (
              <img
                src={`http://localhost:4090${carInfo?.car_steels[0]}`}
                alt="car-red"
                className={styles.car_congfig_color}
              />
            )}
            {secSteel && (
              <img
                src={`http://localhost:4090${carInfo?.car_steels[1]}`}
                alt="car-red"
                className={styles.car_congfig_color}
              />
            )}
            {thirdSteel && (
              <img
                src={`http://localhost:4090${carInfo?.car_steels[2]}`}
                alt="car-red"
                className={styles.car_congfig_color}
              />
            )}
            {fourthSteel && (
              <img
                src={`http://localhost:4090${carInfo?.car_steels[3]}`}
                alt="car-red"
                className={styles.car_congfig_color}
              />
            )}

            {intererWhite && (
              <img
                src={`http://localhost:4090${carInfo?.car_interer[0]}`}
                alt="car-white"
                className={styles.car_congfig_color}
              />
            )}
            {intererRed && (
              <img
                src={`http://localhost:4090${carInfo?.car_interer[1]}`}
                alt="car-red"
                className={styles.car_congfig_color}
              />
            )}
            {intererGreyBlack && (
              <img
                src={`http://localhost:4090${carInfo?.car_interer[2]}`}
                alt="car-grey-black"
                className={styles.car_congfig_color}
              />
            )}
            {intererBlack && (
              <img
                src={`http://localhost:4090${carInfo?.car_interer[3]}`}
                alt="car-black"
                className={styles.car_congfig_color}
              />
            )}

            {decorMesh && (
              <img
                src={`http://localhost:4090${carInfo?.car_decor[0]}`}
                alt="mesh"
                className={styles.car_congfig_color}
              />
            )}
            {decorKarbon && (
              <img
                src={`http://localhost:4090${carInfo?.car_decor[1]}`}
                alt="karbon"
                className={styles.car_congfig_color}
              />
            )}
            {decorBlack && (
              <img
                src={`http://localhost:4090${carInfo?.car_decor[2]}`}
                alt="black"
                className={styles.car_congfig_color}
              />
            )}
            {decorWhite && (
              <img
                src={`http://localhost:4090${carInfo?.car_decor[3]}`}
                alt="white"
                className={styles.car_congfig_color}
              />
            )}
          </AnimatePresence>

          <motion.div className={styles.car_options}>
            <span onClick={() => handleColor()}>Цвета кузова</span>
            <span onClick={() => handleSteel()}>Колеса</span>
            <span onClick={() => handleInterer()}>Обивка</span>
            <span onClick={() => handleDecor()}>Декоративные планки</span>
          </motion.div>

          {carColor && (
            <div className={styles.car_colors}>
              <img
                src={`http://localhost:4090${carInfo?.car_colors[0]}`}
                alt="white"
                onClick={() => handleWhiteColor()}
              />
              <img
                src={`http://localhost:4090${carInfo?.car_colors[1]}`}
                alt="black"
                onClick={() => handleBlackColor()}
              />
              <img
                src={`http://localhost:4090${carInfo?.car_colors[2]}`}
                alt="blue"
                onClick={() => handleBlueColor()}
              />
              <img
                src={`http://localhost:4090${carInfo?.car_colors[3]}`}
                alt="red"
                onClick={() => handleRedColor()}
              />
            </div>
          )}

          {carSteel && (
            <div className={styles.car_colors}>
              <img
                src={`http://localhost:4090${carInfo?.car_steels_img[0]}`}
                alt="first"
                onClick={() => handleFirstSteel()}
              />
              <img
                src={`http://localhost:4090${carInfo?.car_steels_img[1]}`}
                alt="black"
                onClick={() => handleSecSteel()}
              />
              <img
                src={`http://localhost:4090${carInfo?.car_steels_img[2]}`}
                alt="blue"
                onClick={() => handleThirdSteel()}
              />
              <img
                src={`http://localhost:4090${carInfo?.car_steels_img[3]}`}
                alt="red"
                onClick={() => handleFourthSteel()}
              />
            </div>
          )}

          {carInterer && (
            <div className={styles.car_colors}>
              <img
                src={`http://localhost:4090${carInfo?.car_interer_img[0]}`}
                alt="white"
                onClick={() => handleWhiteInterer()}
              />
              <img
                src={`http://localhost:4090${carInfo?.car_interer_img[1]}`}
                alt="red"
                onClick={() => handleRedInterer()}
              />
              <img
                src={`http://localhost:4090${carInfo?.car_interer_img[2]}`}
                alt="grey-black"
                onClick={() => handleGreyBlackInterer()}
              />
              <img
                src={`http://localhost:4090${carInfo?.car_interer_img[3]}`}
                alt="black"
                onClick={() => handleBlackInterer()}
              />
            </div>
          )}

          {carDecor && (
            <div className={styles.car_colors}>
              {carInfo.car_decor_img[0] && (
                <img
                  src={`http://localhost:4090${carInfo?.car_decor_img[0]}`}
                  alt="mesh"
                  onClick={() => handleMeshDecor()}
                />
              )}
              {carInfo.car_decor_img[1] && (
                <img
                  src={`http://localhost:4090${carInfo?.car_decor_img[1]}`}
                  alt="karbon"
                  onClick={() => handleKarbonDecor()}
                />
              )}
              {carInfo.car_decor_img[2] && (
                <img
                  src={`http://localhost:4090${carInfo?.car_decor_img[2]}`}
                  alt="black"
                  onClick={() => handleBlackDecor()}
                />
              )}
              {carInfo.car_decor_img[3] && (
                <img
                  src={`http://localhost:4090${carInfo?.car_decor_img[3]}`}
                  alt="white"
                  onClick={() => handleWhiteDecor()}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CarsCardList;

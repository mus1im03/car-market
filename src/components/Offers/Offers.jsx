import React, { useState } from "react";
import InputMask from "react-input-mask";
import styles from "./Offers.module.css";
import { useDispatch } from "react-redux";
import { postNewOffer } from "../../features/offerSlice";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Offers = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const [gender, setGender] = useState("");

  const [zapros, setZapros] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [agreement, setAgreement] = useState(false);

  const [valid, setVlid] = useState(false);

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleInputSurname = (e) => {
    setSurname(e.target.value);
  };

  const handleInputPhone = (e) => {
    setPhone(e.target.value);
  };

  const handleCheckboxChange = () => {
    setAgreement((prevAgreement) => !prevAgreement);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      carId: id,
      name,
      surname,
      phone,
      gender,
    };

    dispatch(postNewOffer(formData));
  };

  return (
    <div className={styles.offer}>
      <div className={styles.gender}>
        <div className={styles.genderInput}>
          <input
            type="radio"
            id="gospodin"
            name="drone"
            value={"Господин"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="gospodin">Господин</label>
        </div>
        <div className={styles.genderInput}>
          <input
            type="radio"
            id="gospoja"
            value={"Госпожа"}
            name="drone"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="gospoja">Госпожа</label>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className={styles.name}
            type="text"
            name="name"
            value={name}
            onChange={handleInputName}
            placeholder="Имя*"
          />
        </label>
        <label>
          <input
            className={styles.surname}
            type="text"
            name="surname"
            value={surname}
            onChange={handleInputSurname}
            placeholder="Фамилия"
          />
        </label>
        <div>
          <InputMask
            mask="+7(999)-999-99-99"
            maskChar=" "
            value={phone}
            onChange={handleInputPhone}
            className={styles.tel}
            placeholder="+7(999)-999-99-99"
          />
        </div>
        <div className={styles.checked}>
          <input
            type="checkbox"
            checked={agreement}
            onChange={handleCheckboxChange}
          />
          <p>Соглашение о неразглашении.</p>
        </div>
        <motion.div
          className={styles.btn}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <button type="submit" onClick={() => setZapros(true)}>
            Отправить
          </button>
        </motion.div>
        {zapros && <span className={styles.zapros}>Запрос отправлен</span>}
      </form>
    </div>
  );
};

export default Offers;

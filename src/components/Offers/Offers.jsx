import React, { useState } from "react";
import InputMask from "react-input-mask";
import styles from "./Offers.module.css";

const NumberInput = ({ number, handleInput }) => {
  return (
    <InputMask
      mask="+7(999)-999-99-99"
      maskChar=" "
      value={number}
      onChange={handleInput}
      className={styles.tel}
      placeholder="+7(999)-999-99-99"
    />
  );
};

const Offers = () => {
  const [gospodin, setGospodin] = useState(true);
  const [gospoja, setGospoja] = useState(false);

  const handleClickGospoja = () => {
    setGospodin(!false);
    setGospoja(!true);
  };

  const [number, setNumber] = useState("");
  const handleInput = ({ target: { value } }) => setNumber(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOffer({ ...newOffer, [name]: value });
  };

  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({
    name: "",
    surname: "",
    phone: "",
  });
  
  const [error, setError] = useState();

  return (
    <div className={styles.offer}>
      <div className={styles.gender}>
        <div className={styles.genderInput}>
          <input
            type="radio"
            id="gospodin"
            name="drone"
            value="Gospodin"
            checked
          />{" "}
          <label for="huey">Господин</label>
        </div>
        <div className={styles.genderInput}>
          <input
            type="radio"
            id="gospoja"
            name="drone"
            value="Gospoja"
            checked
          />{" "}
          <label for="huey">Госпожа</label>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className={styles.name}
            type="text"
            name="name"
            value={newOffer.name}
            onChange={handleInputChange}
            placeholder="Имя*"
          />
        </label>
        <label>
          <input
            className={styles.surname}
            type="text"
            name="surname"
            value={newOffer.surname}
            onChange={handleInputChange}
            placeholder="Фамилия"
          />
        </label>
        <div>
          <NumberInput number={number} handleInput={handleInput} />
        </div>
        <div className={styles.checked}>
          <input type="checkbox" />
          <p>Соглашение о неразглашении.</p>
        </div>
        <div className={styles.btn}>
          <button type="submit">Отправить</button>
        </div>
      </form>
    </div>
  );
};

export default Offers;
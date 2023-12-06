import React, { useState } from "react";
import { serviceData } from "./serviceData";
import styles from "./Service.module.css";

const ServiceForm = () => {
  const [vin, setVin] = useState("");
  const [reason, setReason] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");

  const [open, setOpen] = useState(false);

  const handleText = () => {
    if (vin.length !== 17) {
      setOpen(true);
    } else {
      setOpen(false);
    }

    console.log("vin-", vin, reason, typeof year, model);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        КОМФОРТНАЯ ЗАПИСЬ НА СЕРВИС ДЛЯ ВАШЕГО УДОБСТВА.
      </div>
      <div className={styles.wrapper_three}>
        <div>
          <div>Причина обрашения</div>
          <select
            onChange={(e) => setReason(e.target.value)}
            className={`${styles.input} ${open ? styles.inputColor : ""}`}
          >
            {serviceData.reasons.map((elem) => {
              return <option value={elem}>{elem}</option>;
            })}
          </select>
        </div>
      </div>
      <div className={styles.wrapper_three}>
        <div>
          <div>VIN Автомобиля</div>
          <input
            onChange={(e) => setVin(e.target.value)}
            value={vin}
            className={`${styles.input} ${open ? styles.inputColor : ""}`}
            type="text"
          />
          {open && <div className={styles.open}>Введите корректное число</div>}
          <div>* VIN код должен содержать 17 знаков</div>
        </div>
        <div>
          <div>Год</div>
          <select
            onChange={(e) => setYear(e.target.value)}
            className={styles.input}
          >
            {serviceData.year
              .map((elem) => {
                return <option value={elem}>{elem}</option>;
              })
              .reverse()}
          </select>
        </div>
        <div>
          <div>Модель</div>
          <select
            onChange={(e) => setModel(e.target.value)}
            className={`${styles.input} ${open ? styles.inputColor : ""}`}
          >
            {serviceData.model.map((elem) => {
              return <option value={elem}>{elem}</option>;
            })}
          </select>
        </div>
      </div>
      <div className={styles.wrapper_three}>
        <button onClick={handleText} className={styles.btn}>
          Далее
        </button>
      </div>
    </div>
  );
};

export default ServiceForm;

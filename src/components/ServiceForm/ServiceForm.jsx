import React, { useState } from "react";
import { serviceData } from "./serviceData";
import styles from "./Service.module.css";
import { useDispatch } from "react-redux";
import { postService } from "../../features/serviceSlice";

const ServiceForm = () => {
  const [vin, setVin] = useState("");
  const [reason, setReason] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const [send, setSend] = useState(false)

  const [error, setError] = useState(false);

  const handleText = () => {
    setError(true)
    if (vin.length === 17 && reason && year && model && name && phone.length === 11) {
        dispatch(postService({ petition_reason: reason,  name, phone, vin, year, model}))
        setError(false);
        setSend(true)

        setTimeout(() => {
            setSend(false)
        }, 4000);
    } else {
        setError(true);
    }
  };

  return (
    <div className={styles.container}>
        {send && <div className={styles.sended}>Сообщение отправлено!</div>}
      <div className={styles.wrapper}>
        КОМФОРТНАЯ ЗАПИСЬ НА СЕРВИС ДЛЯ ВАШЕГО УДОБСТВА.
      </div>
      <div className={styles.wrapper_three}>
        <div>
          <div>Причина обрашения</div>
          <select
            onChange={(e) => setReason(e.target.value)}
            className={`${styles.input} ${error && !reason ? styles.inputColor : ""}`}
          >
            {serviceData.reasons.map((elem) => {
              return <option value={elem}>{elem}</option>;
            })}
          </select>
        </div>
        <div>
            <div>Ф.И.О</div>
            <input 
            onChange={(e) => setName(e.target.value)}
            className={`${styles.input} ${error && !name ? styles.inputColor : ""}`}
            type="text" />
        </div>
        <div>
            <div>Номер телефона</div>
            <input
            type='tel'
            placeholder="+7(999) 999-99-99"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className={`${styles.input} ${error && phone.length !== 11 ? styles.inputColor : ""}`}
            />
        </div>
      </div>
      <div className={styles.wrapper_three}>
        <div>
          <div>VIN Автомобиля</div>
          <input
            onChange={(e) => setVin(e.target.value)}
            value={vin}
            className={`${styles.input} ${error && vin.length !== 17 ? styles.inputColor : ""}`}
            type="text"
          />
          {error && vin.length !== 17 && <div className={styles.error}>Введите корректное число</div>}
          <div>* VIN код должен содержать 17 знаков</div>
        </div>
        <div>
          <div>Год</div>
          <select
            onChange={(e) => setYear(e.target.value)}
            className={`${styles.input} ${error && !year ? styles.inputColor : ""}`}
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
            className={`${styles.input} ${error && !model ? styles.inputColor : ""}`}
          >
            {serviceData.model.map((elem) => {
              return <option value={elem}>{elem}</option>;
            })}
          </select>
        </div>
      </div>
      <div className={styles.wrapper_three}>
        <button onClick={handleText} className={styles.btn}>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default ServiceForm;

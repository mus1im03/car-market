import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../OneCard/OneCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../features/carsSlice";
import Infomode from "./Infomode";
import { dataBase } from "./fakedatabase";

const OneCard = () => {
  const dispatch = useDispatch();

  const cars = useSelector((state) => state.cars.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);


  

  return (
    <div>
      <div>
        <div className={styles.imgFirst}>
          <img
            src="https://cdn.kodixauto.ru/media/image/609bb310a10eff0001a590f7"
            alt=""
          />
        </div>

        <div className={styles.header}>
          <Link to="/#">Автомобили</Link>
          <Link to="/#">Официальные дилеры BMW</Link>
        </div>

        <div className={styles.cont}>
          <div className={styles.img}>
            <img
              src="https://cdn.kodixauto.ru/media//media/resized_image/webp/654b5c59f28fa87f7e0bd8b5/1200/0"
              alt=""
            />
          </div>

          <div className={styles.title}>
            <div>
              <p>BMW X6 xDrive40i M Sport Edition 21</p>
              <div className={styles.p}>
                <p>3.0 л., 340 л.с., Бензин</p>
                <p>АКПП</p>
                <p>Полный привод</p>
                <p>50 300 км</p>
                <p>2 владельца</p>
                <p>Экстерьер: Черный Сапфир</p>
                <p>
                  Интерьер: Кожа Vernasca с перфорацией особого дизайна "Черный"
                </p>
                <p className={styles.cen}>от 11 690 000 ₽</p>
              </div>
              <button className={styles.btn}>получить предложение</button>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.text}>
            <p>СТАНДАРТНОЕ ОБОРУДОВАНИЕ ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</p>
            <div className={styles.infomode}>
                <Infomode name={"Системы информации и коммуникации"} data={dataBase.systems}/>
                <Infomode name={"Безопасность, освещение и обзор"}  data={dataBase.security}/>
                <Infomode name={"Пакеты и линии"}  data={dataBase.line}/>
                <Infomode name={"Другое"}  data={dataBase.more}/>
                <Infomode name={"Коробка передач и ходовая часть"}  data={dataBase.transmission}/>
                <Infomode name={"Колеса и диски"}  data={dataBase.wheels}/>
                <Infomode name={"Экстерьер"}  data={dataBase.exterior}/>
                <Infomode name={"Интерьер"}  data={dataBase.interior}/>
                <Infomode name={"Обивка и дизайн интерьера"}  data={dataBase.desing}/>
                <Infomode name={"Функциональное оборудование"}  data={dataBase.function}/>
            </div>
          </div>
          {/* <div>
                <div className={styles.conteiner}>
                    <h3>ЗАПРОС ПРЕДЛОЖЕНИЯ</h3>
                    <p>Оставьте заявку и с вами свяжется менеджер делерсеого центра</p>
                    <input  />
                    <input />
                    <input />
                    <button>Отправить</button>
                </div>
                </div> */}
        </div>
      </div>
      {/* <div>
    <p>Цены носят информационный характер и ни при каких условиях не являются публичной офертой, определяемой положениями Статьи 435 ГК РФ.
Все содержащиеся на Сайте сведения носят исключительно справочный характер и не являются исчерпывающими. Информация о продаже автомобилей, о наличии и или отсутствии автомобилей у официальных дилеров может не соответствовать действительности и/или утратить актуальность на момент обращения к официальному дилеру.
Все условия приобретения автомобилей, цены, спецпредложения и комплектации автомобилей указаны с целью ознакомления и ни при каких обстоятельствах не являются публичной офертой, как она определена положениями статьи 435 ГК РФ.
ООО «БМВ Русланд Трейдинг» не участвует во взаимоотношениях между официальными дилерами и покупателями автомобилей, не является поверенным/агентом/комиссионером в отношении автомобилей, не несет никакой ответственности по обязательствам, вытекающим из сделок, заключенных с официальными дилерами на основании информации на Сайте, а также не несет ответственности за любые убытки, возникшие в связи с использованием информации на Сайте.
</p>
</div> */}
    </div>
  );
};

export default OneCard;

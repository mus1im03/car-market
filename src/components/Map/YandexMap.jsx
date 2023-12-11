import React from "react";
import { YMaps, Map } from '@pbe/react-yandex-maps';


const YandexMap = () => {
    return (
        <YMaps>
        <div id='carta'>
            <h1 className='h1map'>Наш адрес</h1>
          <Map height='700px' width='100%' defaultState={{ center: [55.7522200,37.6155600], zoom: 17 }}/>
        </div>
      </YMaps>
    )
}

export default YandexMap
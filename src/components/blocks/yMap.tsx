import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";

export default function YandexMap() {
    return (
        <YMaps query={{apikey: "c0f175cb-8f6e-44bb-8b4c-19de08734a70"}}>
            <Map
                defaultState={{
                    center: [55.195308, 61.281452],
                    zoom: 19,
                }}
                width="100%"
                height="500px"
            >
                <Placemark geometry={[55.195308, 61.281452]}
                           properties={{iconCaption: 'офис. центр «Сорока», оф.1'}}/>
            </Map>
        </YMaps>
    );
}
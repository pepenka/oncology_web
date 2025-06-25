import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function YandexMap() {
    return (
        <YMaps query={{ apikey: "ваш_api_ключ" }}>
            <Map
                defaultState={{
                    center: [55.195308, 61.281452],
                    zoom: 15,
                }}
                width="100%"
                height="400px"
            >
                <Placemark geometry={[55.195308, 61.281452]} />
            </Map>
        </YMaps>
    );
}
ymaps.ready(init);

function init() {
    let myMap = new ymaps.Map("map", {
            center: [53.9, 27.56],
            zoom: 12
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [53.9, 27.56]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: '',
                hintContent: 'All you need is here'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#icon',
            // Метку можно перемещать.
            draggable: false
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.Placemark([55.684758, 37.738521], {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }));
}
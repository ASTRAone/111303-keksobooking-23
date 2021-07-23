import {createAdvertisementElement} from './advertisement.js';
import {getData} from './api.js';

const OFFERS_AMOUNT = 9;

const DefaultCoordinates = {
  lat: 35.69381,
  lng: 139.70351,
};

const address = document.querySelector('#address');

const map = L.map('map-canvas')
  .setView({
    lat: DefaultCoordinates.lat,
    lng: DefaultCoordinates.lng,
  }, 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(DefaultCoordinates, {
  draggable: true,
  icon: mainPinIcon,
},
).addTo(map);

// заполнение адреса по умолчанию и обновление при смене положения пина
const defaultAddress = mainPinMarker.getLatLng();
address.value = `${defaultAddress.lat}, ${defaultAddress.lng}`;

mainPinMarker.on('moveend', (evt) => {
  const newAddress = evt.target.getLatLng();
  address.value = `${newAddress.lat.toFixed(5)}, ${newAddress.lng.toFixed(5)}`;
});

const markerGroup = L.layerGroup().addTo(map);

const offerPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderOfferPins = (ad) => {
  const marker = L.marker(
    {
      lat: ad.location.lat,
      lng: ad.location.lng,
    },
    {
      icon: offerPinIcon,
    },
  );
  marker
    .addTo(markerGroup)
    .bindPopup(() => createAdvertisementElement(ad), {
      keepInView: true,
    });
};

const resetMap = () => {
  mainPinMarker.setLatLng({
    lat: DefaultCoordinates.lat,
    lng: DefaultCoordinates.lng,
  });
  map.setView({
    lat: DefaultCoordinates.lat,
    lng: DefaultCoordinates.lng,
  }, 12);
};
const renderCards = (data) => {
  data.forEach((ad) => {
    renderOfferPins(ad);
  });
};

const mapInit = (activateForm) => {
  map.on('load', activateForm);
  getData((data) => {
    renderCards(data.slice(0, OFFERS_AMOUNT));
  });
};

export {mapInit, resetMap};

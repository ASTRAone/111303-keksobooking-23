import  {createAdvertisementElement} from './advertisement.js';
import {disableForm, activateForm} from './form.js';
import {similarAdvertisement} from './data.js';

const address = document.querySelector('#address');
const resetButtons = document.querySelector('.ad-form__reset');

const DEFAULT_COORDINATES = {
  lat: 35.69381,
  lng: 139.70351,
};

disableForm();

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView(DEFAULT_COORDINATES, 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(DEFAULT_COORDINATES, {
  draggable: true,
  icon: mainPinIcon,
});
mainPinMarker.addTo(map);

// заполнение адресса по умалчанию и обновление при смене положения пина
const defaultAddress = mainPinMarker.getLatLng();
address.value = `${defaultAddress.lat}, ${defaultAddress.lng}`;

mainPinMarker.on('moveend', (evt) => {
  const newAddress = evt.target.getLatLng();
  address.value = `${newAddress.lat.toFixed(5)}, ${newAddress.lng.toFixed(5)}`;
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (offer) => {
  const lat = offer.location.lat;
  const lng = offer.location.lng;
  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker.addTo(markerGroup).bindPopup(() => createAdvertisementElement(offer), {
    keepInView: true,
  });
};

similarAdvertisement().forEach((offer) => {
  createMarker(offer);
});

resetButtons.addEventListener('click', (evt) => {
  evt.preventDefault();
  mainPinMarker.setLatLng(DEFAULT_COORDINATES);
  address.value = `${defaultAddress.lat}, ${defaultAddress.lng}`;
  map.setView(DEFAULT_COORDINATES, 12);
});


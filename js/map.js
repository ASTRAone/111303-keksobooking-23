import  {createAdvertisementElement} from './advertisement.js';
import {disableForm, activateForm} from './form.js';
import {similarAdvertisement} from './data.js';

const DefaultCoordinates = {
  lat: 35.69381,
  lng: 139.70351,
};

const address = document.querySelector('#address');
const resetButtons = document.querySelector('.ad-form__reset');

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
    address.value = `${DefaultCoordinates.lat}, ${DefaultCoordinates.lng}`;
  })
  .setView({
    lat: DefaultCoordinates.lat,
    lng: DefaultCoordinates.lng,
  }, 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});
const mainPinMarker = L.marker(DefaultCoordinates, {
  draggable: true,
  icon: mainPinIcon,
});
mainPinMarker.addTo(map);


// заполнение адреса по умолчанию и обновление при смене положения пина
const defaultAddress = mainPinMarker.getLatLng();
address.value = `${defaultAddress.lat}, ${defaultAddress.lng}`;

mainPinMarker.on('moveend', (evt) => {
  const newAddress = evt.target.getLatLng();
  address.value = `${newAddress.lat.toFixed(5)}, ${newAddress.lng.toFixed(5)}`;
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = ({author, offer}) => {
  const {lat, lng} = DefaultCoordinates;
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

  marker.addTo(markerGroup).bindPopup(() => createAdvertisementElement({author, offer}), {
    keepInView: true,
  });
};

similarAdvertisement().forEach((ad) => createMarker(ad));


resetButtons.addEventListener('click', (evt) => {
  evt.preventDefault();
  mainPinMarker.setLatLng(DefaultCoordinates);
  address.value = `${defaultAddress.lat}, ${defaultAddress.lng}`;
  map.setView(DefaultCoordinates, 12);
});


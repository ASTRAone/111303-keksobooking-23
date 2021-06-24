import {getRandomArrayElement, getRandomNumber, getRandomCoordinate, shuffle} from './utils';

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const TITLES = [
  'Уютная квартира',
  'Дом в викторианском стиле',
  'Тропическое бунгало',
  'Двухэтажное бунгало на сваях',
  'Дворец в стиле барокко',
];
const DESCRIPTION = [
  'Недалеко от метро',
  'Окна во двор',
  'Квартира с евро ремонтом',
  'Необходимая инфраструкрута в доступности',
];
const TIME_CHECKS = [
  '12:00',
  '13:00',
  '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LAT_MIN = 35.65;
const LAT_MAX = 35.7;
const LNG_MIN = 139.7;
const LNG_MAX = 139.8;

const SIMILAR_COUNT = 4;

const createAdvertisement = () => {
  const offerlocation = {
    lat: getRandomCoordinate(LAT_MIN, LAT_MAX, 5),
    lng: getRandomCoordinate(LNG_MIN, LNG_MAX, 5),
  };
  const featuresRandomIndex = getRandomNumber(1, FEATURES.length - 1);
  const features = shuffle(FEATURES).slice(0, featuresRandomIndex);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomNumber(1, 10)}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${offerlocation.lat}, ${offerlocation.lng}`,
      price: getRandomNumber(0, 10000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomNumber(1, 10),
      guests: getRandomNumber(1, 10),
      checkin: getRandomArrayElement(TIME_CHECKS),
      checkout: getRandomArrayElement(TIME_CHECKS),
      features,
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayElement(PHOTOS),
      location: offerlocation,
    },
  };
};
const similarAdvertisement = new Array(SIMILAR_COUNT)
  .fill(null)
  .map(() => createAdvertisement());

similarAdvertisement();

export {createAdvertisement};

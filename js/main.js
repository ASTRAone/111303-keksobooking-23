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

const SIMILAR_COUNT = 4;

// взято с https://learn.javascript.ru https://habr.com/ru/post/312880/#s2_11  https://javascript.ru/Math.round //

const getRandomNumber = function (min, max) {
  let result = 0;
  if (min >= 0 && min < max) {
    result = Math.floor(Math.random() * ((max - min) + 1));
    return result;
  }
  return 'некорректное значение';
};

const getRandomCoordinate = function (min, max, afterDot) {
  let result = 0;
  if (min >= 0 && min < max) {
    result = Math.random() * ((max - min) + 1);
    return result.toFixed(afterDot);
  }
  return 'некоректное значение';
};

const shuffle = function(array) {
  const cloneArray = array.slice(0);
  cloneArray.sort(() => Math.random() - 0.5);
  return cloneArray;
};

const getRandomArrayElement = (items) =>
  items[getRandomNumber(0, items.length - 1)];


const createAdvertisement = () => {
  const lat = getRandomCoordinate(35.65, 35.7, 5);
  const lng = getRandomCoordinate(139.7, 139.8, 5);
  const featuresRandomIndex = getRandomNumber(1, FEATURES.length - 1);
  const features = shuffle(FEATURES).slice(0, featuresRandomIndex);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomNumber(1, 10)}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${lat}, ${lng}`,
      price: getRandomNumber(0, 10000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomNumber(1, 10),
      guests: getRandomNumber(1, 10),
      checkin: getRandomArrayElement(TIME_CHECKS),
      checkout: getRandomArrayElement(TIME_CHECKS),
      features,
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayElement(PHOTOS),
      location: {
        lat,
        lng,
      },
    },
  };
};

const similarAdvertisement = new Array(SIMILAR_COUNT)
  .fill(null)
  .map(() => createAdvertisement());

similarAdvertisement.slice();

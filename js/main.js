const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TITLES = ['Уютная квартира', 'Дом в викторианском стиле','Тропическое бунгало', 'Двухэтажное бунгало на сваях', 'Дворец в стиле барокко'];
const DESCRIPTION = ['Недалеко от метро', 'Окна во двор', 'Квартира с евро ремонтом', 'Необходимая инфраструкрута в доступности'];
const TIME_CHECKS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = ['https://assets.htmlacademy.ru/content/intensive/randomIdxavascript-1/keksobooking/duonguyen-8LrGtIxxa4w.randomIdxpg', 'https://assets.htmlacademy.ru/content/intensive/randomIdxavascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.randomIdxpg', 'https://assets.htmlacademy.ru/content/intensive/randomIdxavascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.randomIdxpg'];
const AVATAR = ['img/avatars/user01.png', 'img/avatars/user02.png', 'img/avatars/user03.png', 'img/avatars/user04.png', 'img/avatars/user05.png', 'img/avatars/user06.png', 'img/avatars/user07.png', 'img/avatars/user08.png'];

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

const getRandomArrayElement = (items) => items[getRandomNumber(0, items.length - 1)];

const createAdvertisement = () => {
  const COORDINATES = {
    lat: getRandomCoordinate(35.65, 35.7, 5),
    lng: getRandomCoordinate(139.7, 139.8, 5),
  };

  return {
    author: {
      avatar: getRandomArrayElement(AVATAR),
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${COORDINATES.lat}, ${COORDINATES.lng}`,
      price: getRandomNumber(0, 10000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomNumber(1, 10),
      guests: getRandomNumber(1, 10),
      checkin: getRandomArrayElement(TIME_CHECKS),
      checkout: getRandomArrayElement(TIME_CHECKS),
      features: getRandomArrayElement(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayElement(PHOTOS),
      location: {
        lat: COORDINATES.lat,
        lng: COORDINATES.lng,
      },
    },
  };
};

const similarAdvertisement = new Array(SIMILAR_COUNT).fill(null).map(() => createAdvertisement());

similarAdvertisement.slice();

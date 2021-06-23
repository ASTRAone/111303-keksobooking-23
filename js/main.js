import {TYPES,TITLES,DESCRIPTION,FEATURES,PHOTOS,TIME_CHECKS,LAT_MIN,LAT_MAX,LNG_MIN,LNG_MAX,SIMILAR_COUNT} from 'data.js';
import {getRandomNumber,getRandomArrayElement,getRandomCoordinate,shuffle} from '/utils';

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

similarAdvertisement;

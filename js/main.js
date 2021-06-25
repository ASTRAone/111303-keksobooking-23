import {createAdvertisement} from './data.js';

const SIMILAR_COUNT = 4;

function getAdvertisementArray () {
  const similarAdvertisement = new Array(SIMILAR_COUNT)
    .fill(null)
    .map(() => createAdvertisement());
  return similarAdvertisement;
}

getAdvertisementArray();

import {createAdvertisement} from './data.js';

const SIMILAR_COUNT = 4;

const similarAdvertisement = new Array(SIMILAR_COUNT)
  .fill(null)
  .map(() => createAdvertisement());

similarAdvertisement;

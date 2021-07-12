import {createMarkers} from './map.js';
import {similarAdvertisement} from './data.js';

const similarAds = similarAdvertisement();

createMarkers(similarAds);

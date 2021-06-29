import {createAdvertisementElement} from './advertisement.js';
import {createAdvertisement} from './data.js';

const SIMILAR_COUNT = 4;

function getAdvertisementArray () {
  const similarAdvertisement = new Array(SIMILAR_COUNT)
    .fill(null)
    .map(() => createAdvertisement());
  return similarAdvertisement;
}

//сюда нужно вставить заполненный фрагмент
const mapCanvas = document.querySelector('#map-canvas');
//фрагмент, который будем заполнять и вставлять в разметку
const similarAdvertisementFragment = document.createDocumentFragment();
//создаем массив из 10 сгенерированных элементов
const similarPlaces = getAdvertisementArray;
//Создаем элемент на основе первого элемента массива
const advertisementElement = createAdvertisementElement(similarPlaces[0]);
similarAdvertisementFragment.appendChild(advertisementElement);
mapCanvas.appendChild(similarAdvertisementFragment);

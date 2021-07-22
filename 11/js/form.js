import {resetMap} from './map.js';

const PRICES = {
  palace: '10000',
  flat: '1000',
  house: '5000',
  bungalow: '0',
  hotel: '3000',
};

const MAX_PRICE = 1000000;
const MIN_TEXT_LENGTH = 30;
const MAX_TEXT_LENGTH = 100;
const ONE_GUEST = 1;
const TWO_GUESTS = 2;
const THREE_GUESTS = 3;
const MAX_ROOM_COUNT = 100;
const ROOM_COUNT_TWO = 2;
const ROOM_COUNT_THREE = 3;
const NONE_GUESTS = 0;

const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('fieldset');
const mapForm = document.querySelector('.map__filters');
const mapFormElements = mapForm.querySelectorAll('select');
const mapFormFieldset = mapForm.querySelector('fieldset');
const adTitleInput = adForm.querySelector('#title');
const houseTypeSelect = adForm.querySelector('#type');
const housePriceInput = adForm.querySelector('#price');
const roomsNumberSelect = adForm.querySelector('#room_number');
const guestsNumberSelect = adForm.querySelector('#capacity');
const setTimeIn = adForm.querySelector('#timein');
const setTimeOut = adForm.querySelector('#timeout');
const resetButton = document.querySelector('.ad-form__reset');

const checkAdTitleValidation = () => {
  const valueLength = adTitleInput.value.length;
  if (adTitleInput.validity.valueMissing) {
    adTitleInput.setCustomValidity('Обязательное поле для заполнения');
  } else if (valueLength < MIN_TEXT_LENGTH) {
    adTitleInput.setCustomValidity(`Поле должно содержать минимум ${MIN_TEXT_LENGTH} символов. Еще ${MIN_TEXT_LENGTH - valueLength} символов.`);
  } else if (valueLength > MAX_TEXT_LENGTH) {
    adTitleInput.setCustomValidity( `Максимальное количество символов ${MAX_TEXT_LENGTH}.Удалите лишние ${valueLength - MAX_TEXT_LENGTH} символов.`);
  } else {
    adTitleInput.setCustomValidity('');
  }
  adTitleInput.reportValidity();
};

const checkHousePriceValidation = () => {
  const housePriceValue = Number(housePriceInput.value);
  const minPrice = Number(housePriceInput.getAttribute('min'));
  if (housePriceInput.validity.valueMissing) {
    housePriceInput.setCustomValidity('Обязательное поля для заполнения');
  } else if (housePriceValue < minPrice) {
    housePriceInput.setCustomValidity(`Минимальная цена ${minPrice} руб.`);
  } else if (housePriceValue > MAX_PRICE) {
    housePriceInput.setCustomValidity(`Максимальная цена ${MAX_PRICE} руб.`);
  } else {
    housePriceInput.setCustomValidity('');
  }
  housePriceInput.reportValidity();
};
const checkGuestsValidation =  (evt) => {
  const value = Number(evt.target.value);
  const rooms = Number(roomsNumberSelect.value);
  if (value === ONE_GUEST && rooms === MAX_ROOM_COUNT) {
    guestsNumberSelect.setCustomValidity('Этот вариант недоступен для одного гостя');
  } else if (value === TWO_GUESTS && (rooms < ROOM_COUNT_TWO || rooms === MAX_ROOM_COUNT)) {
    guestsNumberSelect.setCustomValidity('Для двух гостей можно выбрать 2 или 3 комнаты');
  } else if (value === THREE_GUESTS && (rooms < ROOM_COUNT_THREE || rooms === MAX_ROOM_COUNT)) {
    guestsNumberSelect.setCustomValidity('Для трех гостей можно выбрать только 3 комнаты');
  } else if (value === NONE_GUESTS && rooms !== MAX_ROOM_COUNT) {
    guestsNumberSelect.setCustomValidity('Выберите количество гостей');
  } else {
    guestsNumberSelect.setCustomValidity('');
  }

  guestsNumberSelect.reportValidity();
};

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapForm.classList.add('map__filters--disabled');
  mapFormFieldset.setAttribute('disabled', 'disabled');

  adFormElements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });

  mapFormElements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('map__filters--disabled');
  mapFormFieldset.removeAttribute('disabled');

  adFormElements.forEach((element) => {
    element.removeAttribute('disabled');
  });

  mapFormElements.forEach((element) => {
    element.removeAttribute('disabled');
  });
};

// Валидация формы
const getValidation = () => {
  adTitleInput.addEventListener('input', () => {
    checkAdTitleValidation();
  });
  houseTypeSelect.addEventListener('change', (evt) => {
    housePriceInput.setAttribute('min', PRICES[evt.target.value]);
    housePriceInput.setAttribute('placeholder', PRICES[evt.target.value]);
  });
  housePriceInput.addEventListener('input', () => {
    checkHousePriceValidation();
  });

  guestsNumberSelect.addEventListener('change', (evt) => {
    checkGuestsValidation(evt);
  });

  setTimeIn.addEventListener('change', (evt) => {
    setTimeOut.value = evt.target.value;
  });
};
setTimeOut.addEventListener('change', (evt) => {
  setTimeIn.value = evt.target.value;
});

const clearPage = () => {
  adForm.reset();
  resetMap();

  resetButton.addEventListener('click', () => {
    clearPage();
  });
};


export {disableForm, activateForm, getValidation, clearPage};

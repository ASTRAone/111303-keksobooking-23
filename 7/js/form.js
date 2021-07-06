const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('fieldset');
const mapForm = document.querySelector('.map__filters');
const mapFormElements = mapForm.querySelectorAll('select');
const mapFormFieldset = mapForm.querySelector('fieldset');

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

const addInputTitle = adForm.querySelector('#title');
const MIN_TEXT_LENGTH = 10;
const MAX_TEXT_LENGTH = 30;

addInputTitle.addEventListener('input', () => {
  const valueLength = addInputTitle.value.length;

  if (valueLength < MIN_TEXT_LENGTH) {
    addInputTitle.setCustomValidity(`Ещё ${  MIN_TEXT_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TEXT_LENGTH) {
    addInputTitle.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TEXT_LENGTH } симв`);
  } else {
    addInputTitle.setCustomValidity('');
  }
  addInputTitle.reportValidity();
});

const houseTypeSelect = adForm.querySelector('#type');
const housePriceInput = adForm.querySelector('#price');
const PRICES = {
  palace: '10000',
  flat: '1000',
  house: '5000',
  bungalow: '0',
  hotel: '3000',
};
const MAX_PRICE = 1000000;

houseTypeSelect.addEventListener('change', (evt) => {
  housePriceInput.setAttribute('min', PRICES[evt.target.value]);
  housePriceInput.setAttribute('placeholder', PRICES[evt.target.value]);
});

housePriceInput.addEventListener('input', () => {
  const housePriceValue = Number(housePriceInput.value);
  const minPrice = Number(housePriceInput.getAttribute('min'));

  if (housePriceValue < minPrice) {
    housePriceInput.setCustomValidity(`Минимальная цена ${minPrice} руб.`);
  } else if (housePriceValue > MAX_PRICE) {
    housePriceInput.setCustomValidity(`Максимальная цена ${MAX_PRICE} руб.`);
  } else {
    housePriceInput.setCustomValidity('');
  }

  housePriceInput.reportValidity();
});

const roomsNumberSelect = adForm.querySelector('#room_number');
const guestsNumberSelect = adForm.querySelector('#capacity');

guestsNumberSelect.addEventListener('change', (evt) => {
  const value = Number(evt.target.value);
  const rooms = Number(roomsNumberSelect.value);

  if (value === 1 && rooms === 100) {
    guestsNumberSelect.setCustomValidity('Этот вариант недоступен для одного гостя');
  } else if (value === 2 && (rooms < 2 || rooms === 100)) {
    guestsNumberSelect.setCustomValidity('Для двух гостей можно выбрать 2 или 3 комнаты');
  } else if (value === 3 && (rooms < 3 || rooms === 100)) {
    guestsNumberSelect.setCustomValidity('Для трех гостей можно выбрать только 3 комнаты');
  } else if (value === 0 && rooms !== 100) {
    guestsNumberSelect.setCustomValidity('Выберите количество гостей');
  } else {
    guestsNumberSelect.setCustomValidity('');
  }

  guestsNumberSelect.reportValidity();
});

export {disableForm, activateForm};

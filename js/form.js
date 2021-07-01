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

disableForm();
activateForm();

export {disableForm, activateForm};

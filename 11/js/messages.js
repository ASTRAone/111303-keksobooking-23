import {clearPage} from './form.js';

const body = document.body;
const success = document.querySelector('#success').content.querySelector('.success');
const error = document.querySelector('#error').content.querySelector('.error');
const errorButton = error.querySelector('.error__button');
const successMessage = success.cloneNode(true);
const errorMessage = error.cloneNode(true);


const closePopup = () => {
  if (body.contains(successMessage)) {
    body.removeChild(successMessage);
  } else {
    body.removeChild(errorMessage);
  }
};
const pressButton = (esc) => {
  esc.key === 'Escape' ? closePopup() : '';
};

const popupEscKeydown = (evt) => {
  if (pressButton(evt)) {
    evt.preventDefault();
    closePopup();
    document.removeEventListener('keydown', popupEscKeydown);
  }
};

const onPopupClick = (evt) => {
  evt.preventDefault();
  closePopup();
};

const showPopupSuccess = () => {
  body.appendChild(successMessage);
  document.addEventListener('keydown', popupEscKeydown);
  successMessage.addEventListener('click', onPopupClick);
  clearPage();
};

const showErrorMessage = () => {
  body.appendChild(errorMessage);
  document.addEventListener('keydown', popupEscKeydown);
  errorMessage.addEventListener('click', onPopupClick);
  errorButton.addEventListener('click', closePopup);
};

export {showErrorMessage, showPopupSuccess};

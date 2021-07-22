import {clearPage} from './form.js';
import {sendAnnouncement} from './api.js';

const adForm = document.querySelector('.ad-form');
const body = document.body;

const closePopup = () => {
  const divSuccess = document.querySelector('div.success');
  const divError = document.querySelector('div.error');
  if(divSuccess)
  {
    divSuccess.remove();
  }
  else if(divError)
  {
    divError.remove();
  }
  document.removeEventListener('click', closePopup);
  document.removeEventListener('keyup', closePopup);
};

const pressButton = (esc) => {
  esc.key === 'Escape' ? closePopup() : '';
};
const onUploadFinal = () => {
  document.addEventListener('click', closePopup);
  document.addEventListener('keyup', pressButton);
};


const onUploadSuccess = () => {
  const templateSuccess = document.querySelector('#success').content;
  clearPage();
  body.appendChild(templateSuccess);
};

const onUploadError = () => {
  const templateError = document.querySelector('#error').content;
  body.appendChild(templateError);
};

const onLoadError = () => {
  const divError = document.createElement('div');
  const message = document.createElement('p');
  divError.classList.add('error');
  message.classList.add('error__message');
  message.textContent = 'Ошибка загрузки данных с сервера!';
  divError.appendChild(message);
  document.body.appendChild(divError);
  onUploadFinal();
};


const formSubmit = (evt) => {
  evt.preventDefault();
  const formData = new FormData(adForm);
  sendAnnouncement(onUploadSuccess, onUploadError, onUploadFinal, formData);
};
adForm.addEventListener('submit', formSubmit);

export {onLoadError};

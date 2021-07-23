import {clearPage} from './form.js';
const ESC = 'Esc';
const ESCAPE = 'Escape';
const body = document.body;

const esc = (evt) => evt.key === ESC || evt.key === ESCAPE;

const closePopup = () => {
  const divSuccess = document.querySelector('#success');
  const divError = document.querySelector('#error');
  if(divSuccess) {
    divSuccess.remove();
  }
  else if(divError) {
    divError.remove();
  }
  document.removeEventListener('click', closePopup);
  document.removeEventListener('keyup', esc);
};

const onUploadFinal = () => {
  document.addEventListener('click', closePopup);
  document.addEventListener('keyup', esc);
};


const onUploadSuccess = () => {
  const templateSuccess = document.querySelector('#success').content;
  clearPage();
  body.appendChild(templateSuccess);
};

const onUpLoadError = () => {
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

export {onLoadError, onUploadFinal, onUploadSuccess, onUpLoadError};

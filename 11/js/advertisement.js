const PLACE_TYPES_LIST = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const checkChild = (element) => {
  if  (element.children.length === 0) {
    element.remove();
  }
};
//выводим фотографии

const getPhotos = (element, photos) => {
  const photosListElement = element.querySelector('.popup__photos');

  if(!photos) {
    photosListElement.remove();
    return;
  }

  photosListElement.innerHTML = '';
  photos.forEach((url) => {
    const img = document.createElement('img');
    img.classList.add('popup__photo');
    img.src = url;
    img.style.width = '45px';
    img.style.height = '40px';
    img.setAttribute('alt', 'Фотография жилья');
    photosListElement.appendChild(img);
  });
  checkChild(photosListElement);
};

//выводим все удобства
const getFeatures = (element, features) => {
  const featureListElement = element.querySelector('.popup__features');

  if(!features) {
    featureListElement.remove();
    return;
  }

  featureListElement.innerHTML = '';
  features.forEach((item) => {
    const featureElement = document.createElement('li');
    featureElement.classList.add('popup__feature');
    featureElement.classList.add(`popup__feature--${item}`);
    featureListElement.appendChild(featureElement);
  });
  checkChild(featureListElement);
};

//выводим описание
const getDescription =  (element, offer) => {
  const descriptionElement = element.querySelector('.popup__description');
  if (descriptionElement.textContent === offer.description) {
    return descriptionElement;
  }
  checkChild(descriptionElement);
};

const createAdvertisementElement = ({author, offer}) => {
  const similarAdvertisementTemplate = document.querySelector('#card').content.querySelector('.popup');
  const similarAdvertisementFragment = document.createDocumentFragment();
  const advertisementElement = similarAdvertisementTemplate.cloneNode(true);
  const placeTypeKey = offer.type;
  advertisementElement.querySelector('.popup__title').textContent = offer.title;
  advertisementElement.querySelector('.popup__text--address').textContent = offer.address;
  advertisementElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  advertisementElement.querySelector('.popup__type').textContent = PLACE_TYPES_LIST[placeTypeKey];
  advertisementElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  advertisementElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  getFeatures(advertisementElement, offer.features);
  getPhotos(advertisementElement, offer.photos);
  getDescription(advertisementElement, offer.description);

  advertisementElement.querySelector('.popup__avatar').src = author.avatar;

  similarAdvertisementFragment.appendChild(advertisementElement);

  return similarAdvertisementFragment;
};

export {createAdvertisementElement};

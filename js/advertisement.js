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

const getPhotos = (element, offer) => {
  const photosBlock = element.querySelector('.popup__photos');
  const photoElement = photosBlock.querySelector('.popup__photo');
  for (let index = 0; index < offer.length; index++) {
    photoElement.src = offer;
    checkChild(photosBlock);
  }
};
//выводим все удобства
const getFeatures = (element, offer) => {
  const featuresListContainer = element.querySelector('.popup__features');
  const modifiers = offer.map((feature) => `popup__feature--${feature}`);
  featuresListContainer.querySelectorAll('.popup__feature').forEach((classItem) => {
    const modifier = classItem.classList[1];
    if (!modifiers.includes(modifier)) {
      classItem.remove();
    }
    checkChild(featuresListContainer);
  });
};

//выводим описание
const getDescription =  (element, offer) => {
  element.querySelector('.popup__description').textContent = offer.description;
  if (element.querySelector('.popup__description').textContent === undefined || element.querySelector('.popup__description').textContent === '') {
    element.querySelector('.popup__description').remove();
  }
};

const similarAdvertisementTemplate = document.querySelector('#card').content.querySelector('.popup');


const createAdvertisementElement = (author, offer) => {
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

  return advertisementElement;
};

export {createAdvertisementElement};

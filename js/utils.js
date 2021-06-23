// взято с https://learn.javascript.ru https://habr.com/ru/post/312880/#s2_11  https://javascript.ru/Math.round //
const getRandomNumber = function (min, max) {
  let result = 0;
  if (min >= 0 && min < max) {
    result = Math.floor(Math.random() * ((max - min) + 1));
    return result;
  }
  return 'некорректное значение';
};

const getRandomCoordinate = function (min, max, afterDot) {
  let result = 0;
  if (min >= 0 && min < max) {
    result = Math.random() * ((max - min) + 1);
    return result.toFixed(afterDot);
  }
  return 'некоректное значение';
};

const shuffle = function(array) {
  const cloneArray = array.slice(0);
  cloneArray.sort(() => Math.random() - 0.5);

  return cloneArray;
};

const getRandomArrayElement = (items) =>
  items[getRandomNumber(0, items.length - 1)];


export {getRandomNumber,getRandomArrayElement,getRandomCoordinate,shuffle};

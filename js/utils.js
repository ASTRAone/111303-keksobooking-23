// взято с https://learn.javascript.ru https://habr.com/ru/post/312880/#s2_11  https://javascript.ru/Math.round //
const getRandomNumber = (min, max) => {
  let result = 0;
  if (min >= 0 && min < max) {
    result = Math.floor(Math.random() * ((max - min) + 1));
    return result;
  }
  return 'некорректное значение';
};

const getRandomCoordinate = (min, max, digits = 1) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));

  const result = Math.random() * (upper - lower) + lower;

  return +result.toFixed(digits);

};

const shuffle = (array) => {
  const cloneArray = array.slice(0);
  cloneArray.sort(() => Math.random() - 0.5);

  return cloneArray;
};

const getRandomArrayElement = (items) =>
  items[getRandomNumber(0, items.length - 1)];

export {getRandomArrayElement, getRandomNumber, getRandomCoordinate, shuffle};

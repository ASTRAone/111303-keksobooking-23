const getRandomNumber = (min, max) => {
  min = Math.abs(Math.ceil(min));
  max = Math.abs(Math.floor(max));
  if (min > max || min === max) {
    return 'некорректное значение';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Случайное число с плавающей точкой

const getRandomCoordinate = (min, max, digits) => {
  min = Math.abs(min);
  max = Math.abs(max);
  if (max < min || min === max) {
    return 'некорректное значение';
  }
  const result = (Math.random() * (max - min)) + min;
  return result.toFixed(digits);
};

const shuffle = (array) => {
  const cloneArray = array.slice(0);
  cloneArray.sort(() => Math.random() - 0.5);

  return cloneArray;
};

const getRandomArrayElement = (items) =>
  items[getRandomNumber(0, items.length - 1)];

export {getRandomArrayElement, getRandomNumber, getRandomCoordinate, shuffle};

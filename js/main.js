const getRandomNumber = function (min, max) {
  let result = 0;
  if (min >= 0 && min < max) {
    result = Math.random() * ((max - min) + 1);
    return result;
  } else {
    return 'некорректное значение';
  }
};

const getRandomCoordinate = function (min, max, afterDot) {
  let result = 0;
  if (min >= 0 && min < max) {
    result = Math.random() * ((max - min) + 1);
    return result.toFixed(afterDot);
  } else {
    return 'некоректное значение';
  }
};
getRandomCoordinate(10, 200,6);
getRandomNumber(10,500);
// взято с https://learn.javascript.ru https://habr.com/ru/post/312880/#s2_11  https://javascript.ru/Math.round //

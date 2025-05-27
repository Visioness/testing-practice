const capitalize = (str) => {
  const words = str.split(' ');
  return words.map(word => word.charAt(0).toUpperCase()).join(' ');
}

const reverse = (str) => {
  // TODO
  return str;
}

const calculator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2,
}

const caesarCipher = (str, shiftFactor) => {
  // TODO
  return str;
}

const analyzeArray = (arr) => {
  const sum = arr.reduce((sum, num) => sum + num, 0);
  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  }
}

module.exports = {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray
}
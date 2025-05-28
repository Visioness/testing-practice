/**
 * Capitalizes the first letter of each word in a string
 * @param {string} str - The input string to capitalize
 * @returns {string} The string with first letter of each word capitalized
 */
const capitalize = (str) => {
  const words = str.split(' ');
  return words
    .map((word) => {
      const arr = word.split('');
      arr[0] = arr[0].toUpperCase();
      return arr.join('');
    })
    .join(' ');
};

/**
 * Reverses a string
 * @param {string} str - The input string to reverse
 * @returns {string} The reversed string
 */
const reverse = (str) => {
  return str.split('').reverse().join('');
};

/**
 * Calculator object with basic arithmetic operations
 */
const calculator = {
  /**
   * Adds two numbers
   * @param {number} num1 - First number
   * @param {number} num2 - Second number
   * @returns {number} The sum of num1 and num2
   */
  add: (num1, num2) => num1 + num2,
  /**
   * Subtracts num2 from num1
   * @param {number} num1 - First number
   * @param {number} num2 - Second number
   * @returns {number} The difference between num1 and num2
   */
  subtract: (num1, num2) => num1 - num2,
  /**
   * Multiplies two numbers
   * @param {number} num1 - First number
   * @param {number} num2 - Second number
   * @returns {number} The product of num1 and num2
   */
  multiply: (num1, num2) => num1 * num2,
  /**
   * Divides num1 by num2
   * @param {number} num1 - First number
   * @param {number} num2 - Second number
   * @returns {number} The quotient of num1 divided by num2
   */
  divide: (num1, num2) => num1 / num2,
};

const lower = { start: 'a'.charCodeAt(0), end: 'z'.charCodeAt(0) };
const upper = { start: 'A'.charCodeAt(0), end: 'Z'.charCodeAt(0) };
const alphabetLength = 26;

/**
 * Encrypts a string using the Caesar cipher algorithm
 * @param {string} str - The input string to encrypt
 * @param {number} shiftFactor - The number of positions to shift each character
 * @returns {string} The encrypted string
 */
const caesarCipher = (str, shiftFactor) => {
  const normalizedShift = ((shiftFactor % alphabetLength) + alphabetLength) % alphabetLength;

  const encrypt = (char, shift) => {
    const asciiCode = char.charCodeAt(0);
    if (asciiCode >= lower.start && asciiCode <= lower.end) {
      const newIndex = (asciiCode - lower.start + shift) % alphabetLength;
      return String.fromCharCode(newIndex + lower.start);
    }
    if (asciiCode >= upper.start && asciiCode <= upper.end) {
      const newIndex = (asciiCode - upper.start + shift) % alphabetLength;
      return String.fromCharCode(newIndex + upper.start);
    }

    return char;
  };

  return str
    .split('')
    .map((char) => encrypt(char, normalizedShift))
    .join('');
};

/**
 * Analyzes an array of numbers and returns statistics
 * @param {number[]} arr - The input array of numbers
 * @returns {Object} Object containing average, min, max, and length of the array
 */
const analyzeArray = (arr) => {
  const sum = arr.reduce((sum, num) => sum + num, 0);
  return {
    average: sum / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

capitalize('hello world!');

module.exports = {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
};

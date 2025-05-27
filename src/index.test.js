const {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray
} = require('./index.js');

/**
 * Capitalizing String
 */
test('Capitalizes a string', () => {
  expect(capitalize('hello world!')).toBe('Hello World!');
});

/**
 * Reversing String
 */
test('Reverses a string', () => {
  expect(reverse('Reversed?')).toBe('?desreveR');
});

/**
 * Calculator Operations
 */
test('Adds two numbers', () => {
  expect(calculator.add(1.6, 2.1)).toBe(3.7);
  expect(calculator.add(-1, 1)).toBe(0);
  expect(calculator.add(-10, -10)).toBe(-20);
});

test('Subtracts two numbers', () => {
  expect(calculator.subtract(3.3, 2.1)).toBe(1.2);
  expect(calculator.subtract(3, -2)).toBe(5);
  expect(calculator.subtract(4, 12)).toBe(-8);
});

test('Multiplies two numbers', () => {
  expect(calculator.multiply(1, -3)).toBe(-3);
  expect(calculator.multiply(0, 125)).toBe(0);
  expect(calculator.multiply(-2, -0.5)).toBe(1);
  expect(calculator.multiply(2, Infinity)).toBe(Infinity);
});

test('Divides two numbers', () => {
  expect(calculator.divide(36, 360)).toBe(0.1);
  expect(calculator.divide(1, -1)).toBe(-1);
  expect(calculator.divide(12, Infinity)).toBe(0);
  expect(calculator.divide(Infinity, 120)).toBe(Infinity);
  expect(calculator.divide(Infinity, 0)).toBe(Infinity);
});

/**
 * Caesar Cipher
 */
test('Encrypts string with Caesar Algorithm', () => {
  expect(caesarCipher('CaeSar cipH3r', 3)).toBe('DbfTbs djqI3s');
  expect(caesarCipher('ThIs texT i5 enCrypted!', 16)).toBe('JxYi junJ y5 udShofjut!');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

/**
 * Array Analysis
 */
test('Analyzes an array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toBe({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

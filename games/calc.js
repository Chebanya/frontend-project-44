import randomNumber from '../src/random.js';

export const rule = 'What is the result of the expression?';
const randomСomputationОperation = () => {
  const operation = ['-', '+', '*'];
  const randomOperation = operation[Math.floor(Math.random() * operation.length)];
  return randomOperation;
};
export const calculatorGame = () => {
  const numberOne = randomNumber(1, 100);
  const numberTwo = randomNumber(1, 100);
  const sign = randomСomputationОperation();
  let expectedResult;
  if (sign === '-') {
    expectedResult = numberOne - numberTwo;
  } else if (sign === '+') {
    expectedResult = numberOne + numberTwo;
  } else {
    expectedResult = numberOne * numberTwo;
  }
  const randomExpression = `${numberOne} ${sign} ${numberTwo}`;
  return [randomExpression, expectedResult.toString()];
};

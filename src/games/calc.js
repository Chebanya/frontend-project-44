import randomNumber from '../random.js';
import fishGames from '../index.js';

const description = 'What is the result of the expression?';
const randomСomputationОperation = () => {
  const operation = ['-', '+', '*'];
  const randomOperation = operation[Math.floor(Math.random() * operation.length)];
  return randomOperation;
};
const calculator = () => {
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

const calculatorGame = () => {
  fishGames(description, calculator);
};

export default calculatorGame;

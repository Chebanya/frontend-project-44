import randomNumber from '../random.js';
import fishGames from '../index.js';

const description = 'What is the result of the expression?';
const operation = ['-', '+', '*'];
const calculateExpression = (sign, numberOne, numberTwo) => {
  let result;
  if (sign === '-') {
    result = numberOne - numberTwo;
  } else if (sign === '+') {
    result = numberOne + numberTwo;
  } else {
    result = numberOne * numberTwo;
  }
  return result;
};

const calculator = () => {
  const randomСomputationОperation = operation[Math.floor(Math.random() * operation.length)];
  const numberOne = randomNumber(1, 100);
  const numberTwo = randomNumber(1, 100);
  const expectedResult = calculateExpression(randomСomputationОperation, numberOne, numberTwo);
  const randomExpression = `${numberOne} ${randomСomputationОperation} ${numberTwo}`;
  return [randomExpression, expectedResult.toString()];
};

const runCalcGame = () => {
  fishGames(description, calculator);
};

export default runCalcGame;

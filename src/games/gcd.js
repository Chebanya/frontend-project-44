import randomNumber from '../random.js';
import fishGames from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = (numberOne, numberTwo) => {
  if (numberTwo === 0) {
    return numberOne;
  }
  return gcd(numberTwo, numberOne % numberTwo);
};

const defineNode = () => {
  const numberOne = randomNumber(1, 100);
  const numberTwo = randomNumber(1, 100);
  const randomExpression = `${numberOne} ${numberTwo}`;
  const expectedResult = gcd(numberOne, numberTwo);
  return [randomExpression, expectedResult.toString()];
};

const runGameIdentifyNode = () => {
  fishGames(description, defineNode);
};

export default runGameIdentifyNode;

import randomNumber from '../random.js';
import fishGames from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const defineNode = () => {
  const numberOne = randomNumber(1, 100);
  const numberTwo = randomNumber(1, 100);
  const randomExpression = `${numberOne} ${numberTwo}`;
  let expectedResult;
  const smallestValue = numberOne <= numberTwo ? numberOne : numberTwo;
  for (let i = 1; i <= smallestValue; i += 1) {
    if (numberOne % i === 0 && numberTwo % i === 0) {
      expectedResult = i;
    }
  }
  return [randomExpression, expectedResult.toString()];
};

const gameIdentifyNode = () => {
  fishGames(description, defineNode);
};

export default gameIdentifyNode;

import randomNumber from '../random.js';
import fishGames from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const smallestValue = (numberOne, numberTwo) => {
  let result;
  const calculatingTheSmallestNumber = numberOne <= numberTwo ? numberOne : numberTwo;
  for (let i = 1; i <= calculatingTheSmallestNumber; i += 1) {
    if (numberOne % i === 0 && numberTwo % i === 0) {
      result = i;
    }
  }
  return result;
};
const defineNode = () => {
  const numberOne = randomNumber(1, 100);
  const numberTwo = randomNumber(1, 100);
  const randomExpression = `${numberOne} ${numberTwo}`;
  const expectedResult = smallestValue(numberOne, numberTwo);
  return [randomExpression, expectedResult.toString()];
};

const runGameIdentifyNode = () => {
  fishGames(description, defineNode);
};

export default runGameIdentifyNode;

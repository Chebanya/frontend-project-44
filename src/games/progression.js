import randomNumber from '../random.js';
import fishGames from '../index.js';

const description = 'What number is missing in the progression?';
const arithmeticProgression = () => {
  const numberOne = randomNumber(1, 100);
  const numberTwo = randomNumber(1, 100);
  const randomExpression = [];
  const hiddenIndex = randomNumber(0, 9);
  let expectedResult;
  let sum = numberOne;
  for (let i = 0; i < 10; i += 1) {
    if (hiddenIndex === i) {
      expectedResult = sum;
      randomExpression.push('..');
    } else {
      randomExpression.push(sum);
    }
    sum += numberTwo;
  }
  return [randomExpression, expectedResult.toString()];
};

const arithmeticProgressionGame = () => {
  fishGames(description, arithmeticProgression);
};

export default arithmeticProgressionGame;

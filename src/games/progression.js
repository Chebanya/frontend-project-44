import randomNumber from '../random.js';
import fishGames from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const progressionCalculation = (start, step, length) => {
  const progression = [];
  let sum = start;
  for (let i = 0; i < length; i += 1) {
    progression.push(sum);
    sum += step;
  }
  return progression;
};

const arithmeticProgression = () => {
  const numberOne = randomNumber(1, 100);
  const numberTwo = randomNumber(1, 100);
  const randomExpression = progressionCalculation(numberOne, numberTwo, progressionLength);
  const hiddenIndex = randomNumber(0, progressionLength - 1);
  const expectedResult = randomExpression[hiddenIndex];
  randomExpression[hiddenIndex] = '..';
  return [randomExpression.join(' '), expectedResult.toString()];
};

const runArithmeticProgressionGame = () => {
  fishGames(description, arithmeticProgression);
};

export default runArithmeticProgressionGame;

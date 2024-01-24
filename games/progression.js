import randomNumber from '../src/random.js';

export const rule = 'What number is missing in the progression?';
export const arithmeticProgression = () => {
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

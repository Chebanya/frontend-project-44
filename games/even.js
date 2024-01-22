import randomNumber from '../src/random.js';

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
export const parityCheck = () => {
  const randomExpression = randomNumber(1, 100);
  const expectedResult = randomExpression % 2 === 0 ? 'yes' : 'no';
  return [randomExpression, expectedResult];
};

import randomNumber from '../src/random.js';

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const primeNumber = () => {
  const randomExpression = randomNumber(1, 100);
  let expectedResult;
  for (let i = 2; i < randomExpression; i += 1) {
    if (randomExpression % 2 === 0) {
      expectedResult = 'no';
    } else {
      expectedResult = 'yes';
    }
  }
  return [randomExpression, expectedResult];
};

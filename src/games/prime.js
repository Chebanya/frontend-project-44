import randomNumber from '../random.js';
import fishGames from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isTheNumberPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const primeNumber = () => {
  const randomExpression = randomNumber(1, 100);
  const expectedResult = isTheNumberPrime(randomExpression) ? 'yes' : 'no';
  return [randomExpression, expectedResult];
};

const runPrimeNumberGame = () => {
  fishGames(description, primeNumber);
};

export default runPrimeNumberGame;

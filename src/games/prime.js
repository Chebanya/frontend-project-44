import randomNumber from '../random.js';
import fishGames from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const primeNumber = () => {
  const randomExpression = randomNumber(1, 100);
  let expectedResult = 'yes';
  for (let i = 2; i < randomExpression; i += 1) {
    if (randomExpression % i === 0) {
      expectedResult = 'no';
      break;
    }
  }
  return [randomExpression, expectedResult];
};

const primeNumberGame = () => {
  fishGames(description, primeNumber);
};

export default primeNumberGame;

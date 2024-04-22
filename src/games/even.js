import randomNumber from '../random.js';
import fishGames from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => number % 2 === 0;

const parityCheck = () => {
  const randomExpression = randomNumber(1, 100);
  const expectedResult = isNumberEven(randomExpression) ? 'yes' : 'no';
  return [randomExpression, expectedResult];
};

const runParityGame = () => {
  fishGames(description, parityCheck);
};

export default runParityGame;

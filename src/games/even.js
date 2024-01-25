import randomNumber from '../random.js';
import fishGames from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const parityCheck = () => {
  const randomExpression = randomNumber(1, 100);
  const expectedResult = randomExpression % 2 === 0 ? 'yes' : 'no';
  return [randomExpression, expectedResult];
};

const parityGame = () => {
  fishGames(description, parityCheck);
};

export default parityGame;

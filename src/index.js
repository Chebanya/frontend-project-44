import readlineSync from 'readline-sync';

const fishGames = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const [randomExpression, expectedResult] = getGameData();
    const question = `Question: ${randomExpression}`;
    console.log(question);
    const answeUser = readlineSync.question('Your answer: ');
    if (answeUser !== expectedResult) {
      console.log(`${answeUser}' is wrong answer ;(. Correct answer was '${expectedResult}'. \nLet's try again, ${userName}!`);
      break;
    }
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default fishGames;

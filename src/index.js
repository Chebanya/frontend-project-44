import readlineSync from 'readline-sync';

const fishGames = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [randomExpression, expectedResult] = getGameData();
    const question = `Question: ${randomExpression}`;
    console.log(question);
    const answeUser = readlineSync.question('Your answer: ');
    if (answeUser !== expectedResult) {
      console.log(`${answeUser}' is wrong answer ;(. Correct answer was '${expectedResult}'. \nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default fishGames;

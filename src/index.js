import readlineSync from 'readline-sync';

const fishGames = (rule, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  for (let i = 0; i < 3; i += 1) {
    const [randomExpression, expectedResult] = getGameData();
    const question = `Question: ${randomExpression}`;
    console.log(question);
    const answeUser = readlineSync.question('Your answer: ');
    if (answeUser === expectedResult) {
      console.log('Correct!');
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${answeUser}' is wrong answer ;(. Correct answer was '${expectedResult}'. \nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default fishGames;

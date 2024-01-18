import readlineSync from 'readline-sync';
import randomNumber from './random.js';

const calculatorGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  const welcome = () => `Hello, ${userName}!`;
  console.log(welcome());
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const randomСomputationОperation = () => {
      const operation = ['-', '+', '*'];
      const randomOperation = operation[Math.floor(Math.random() * operation.length)];
      return randomOperation;
    };
    const sign = randomСomputationОperation();
    const numberOne = randomNumber(1, 100);
    const numberTwo = randomNumber(1, 100);
    const randomExpression = `${numberOne} ${sign} ${numberTwo}`;
    const question = `Question: ${randomExpression}`;
    console.log(question);
    const answeUser = parseInt(readlineSync.question('Your answer: '));
      let result;
      if (sign === '-') {
        result = numberOne - numberTwo;
      } else if (sign === '+') {
        result = numberOne + numberTwo;
      } else {
        result = numberOne * numberTwo;
      }
    if (result === answeUser) {
      console.log('Correct!')
      if (i === 2) {
        console.log(`Congratulations, ${userName}!`);
      }
    } else {
      console.log(`'${answeUser}' is wrong answer ;(. Correct answer was '${result}'.
      Let's try again, ${userName}!`)
      break;
    }
}
};

export default calculatorGame;

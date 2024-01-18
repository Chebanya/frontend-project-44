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
    const numberOne = randomNumber(1, 100);
    const numberTwo = randomNumber(1, 100);
    const operand = randomСomputationОperation();
    const randomExpression = `${numberOne} ${randomСomputationОperation()} ${numberTwo}`;
    const question = `Question: ${randomExpression}`;
    if ()
    console.log(question);

}
};

export default calculatorGame;

import randomNumber from '../src/random.js';
import { welcome, askQuestion, checkTheQuestion } from '../src/index.js';

console.log(welcome());
const calculatorGame = () => {
  console.log('What is the result of the expression?');
  const randomСomputationОperation = () => {
    const operation = ['-', '+', '*'];
    const randomOperation = operation[Math.floor(Math.random() * operation.length)];
    return randomOperation;
  }
  const numberOne = randomNumber(1, 100);
  const numberTwo = randomNumber(1, 100);
  const sign = randomСomputationОperation();
  const randomExpression = `${numberOne} ${sign} ${numberTwo}`;
  console.log(askQuestion(randomExpression));
  let expectedResult;
  if (sign === '-') {
    expectedResult = numberOne - numberTwo;
  } else if (sign === '+') {
    expectedResult = numberOne + numberTwo;
  } else {
    expectedResult = numberOne * numberTwo;
  }
  return expectedResult;
}
console.log(checkTheQuestion(expectedResult));

export default calculatorGame;




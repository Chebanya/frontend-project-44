import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name?: ');
const welcome = () => {
  return `Hello, ${userName}!`;
};
console.log(welcome());
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const value = randomNumber(1, 100);
  const randomNumberOutput = `Question: ${value}`;
  console.log(randomNumberOutput);
  const answeUser = readlineSync.question('Your answer: ');
  const expectedResult = value % 2 === 0 ? 'yes' : 'no';
  if (answeUser === expectedResult) {
    console.log('Correct!');
    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  } else {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}!`);
    break;
  }
}

export default welcome;

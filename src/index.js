import readlineSync from 'readline-sync';


export const welcome = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${userName}!`);  
    return userName
}
export const askQuestion = (randomExpression) => {
    const question = `Question: ${randomExpression}`;
    console.log(question)
    const answeUser = parseInt(readlineSync.question('Your answer: '));
    return answeUser
}

export const checkTheQuestion = (answeUser, expectedResult, userName) => {
    for (let i = 0; i < 3; i += 1)
    if (answeUser === expectedResult) {
        console.log('Correct!');
        if (i === 2) {
          console.log(`Congratulations, ${userName}!`);
        }
      } else {
        console.log(`'${answeUser}' is wrong answer ;(. Correct answer was '${expectedResult}'.
        Let's try again, ${userName}!`);
      }
    }



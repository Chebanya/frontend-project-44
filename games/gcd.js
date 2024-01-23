import randomNumber from '../src/random.js';

export const rule = 'Find the greatest common divisor of given numbers.';
export const defineNode = () => {
    const numberOne = randomNumber(1, 100);
    const numberTwo = randomNumber(1, 100);
    const randomExpression = `${numberOne}, ${numberTwo}`;
    let expectedResult;
    let smallestValue = numberOne <= numberTwo ? numberOne : numberTwo;
      for (let i = 1; i <= smallestValue; i++) {
        if (numberOne % i === 0 && numberTwo % i === 0) {
            expectedResult = i;
        }
    }
      return [randomExpression, expectedResult.toString()];
};

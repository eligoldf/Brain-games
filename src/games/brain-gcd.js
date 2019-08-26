import playGame from '../index';
import makeRandomNumber from '../utils';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGcd(num2, num1 % num2);
};

const minNumber = 1;
const maxNumber = 100;

const questionAndAnswer = () => {
  const number1 = makeRandomNumber(minNumber, maxNumber);
  const number2 = makeRandomNumber(minNumber, maxNumber);

  const question = `${number1} ${number2}`;
  const rightAnswer = String(findGcd(number1, number2));

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, questionAndAnswer);

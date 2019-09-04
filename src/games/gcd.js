import playGame from '..';
import makeRandomNumber from '../utils';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGcd(num2, num1 % num2);
};

const min = 1;
const max = 100;

const startGame = () => {
  const number1 = makeRandomNumber(min, max);
  const number2 = makeRandomNumber(min, max);

  const question = `${number1} ${number2}`;
  const rightAnswer = String(findGcd(number1, number2));

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, startGame);

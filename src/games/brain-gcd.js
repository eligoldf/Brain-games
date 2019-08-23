import playGame from '../index';
import makeRandomNumber from '../functions/randomNumber';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const brainGcdGame = () => {
  const findGcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return findGcd(num2, num1 % num2);
  };
  const randomNumber1 = makeRandomNumber(1, 100);
  const randomNumber2 = makeRandomNumber(1, 100);

  const question = `${randomNumber1} ${randomNumber2}`;
  const rightAnswer = String(findGcd(randomNumber1, randomNumber2));
  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, brainGcdGame);

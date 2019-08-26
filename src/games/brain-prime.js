import playGame from '../index';
import makeRandomNumber from '../utils';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrime = (num) => {
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const questionAndAnswer = () => {
  const question = makeRandomNumber(1, 10);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, questionAndAnswer);

import playGame from '..';
import makeRandomNumber from '../utils';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const minNumber = 1;
const maxNumber = 100;

const createQuestionAndAnswer = () => {
  const question = makeRandomNumber(minNumber, maxNumber);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, createQuestionAndAnswer);

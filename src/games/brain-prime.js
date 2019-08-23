import playGame from '../index';
import makeRandomNumber from '../functions/randomNumber';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const brainPrimeGame = () => {

  const question = makeRandomNumber(1, 100);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, brainPrimeGame);

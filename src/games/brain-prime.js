import playGame from '../index';
import makeRandomNumber from '../functions/randomNumber';
import checkIsPrime from '../functions/isPrime';

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playBrainPrime = () => {
  const setQuestion = makeRandomNumber(1, 100);
  const getRightAnswer = checkIsPrime(setQuestion) ? 'yes' : 'no';

  return { setQuestion, getRightAnswer };
};

export default () => playGame(gameInstruction, playBrainPrime);

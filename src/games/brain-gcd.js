import playGame from '../index';
import makeRandomNumber from '../functions/randomNumber';
import findGcd from '../functions/findGcd';

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const playBrainGcd = () => {
  const randomNumber1 = makeRandomNumber(1, 100);
  const randomNumber2 = makeRandomNumber(1, 100);

  const setQuestion = `${randomNumber1} ${randomNumber2}`;
  const getRightAnswer = `${findGcd(randomNumber1, randomNumber2)}`;
  return { setQuestion, getRightAnswer };
};

export default () => playGame(gameInstruction, playBrainGcd);

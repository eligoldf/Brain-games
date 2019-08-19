import playGame from '../index';
import isEven from '../functions/isEven';
import randomNumber from '../functions/randomNumber';

const gameInstruction = 'Answer "yes" if number even otherwise answer "no".';

const playBrainEven = () => {
  const setQuestion = randomNumber(1, 100);
  const getRightAnswer = (isEven(setQuestion)) ? 'yes' : 'no';
  return { setQuestion, getRightAnswer };
};

export default () => playGame(gameInstruction, playBrainEven);

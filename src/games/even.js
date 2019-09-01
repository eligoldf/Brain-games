import playGame from '..';
import makeRandomNumber from '../utils';

const gameInstruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const min = 1;
const max = 99;

const askQuestionAndAnswer = () => {
  const question = makeRandomNumber(min, max);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, askQuestionAndAnswer);

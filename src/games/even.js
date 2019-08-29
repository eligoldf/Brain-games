import startGame from '..';
import makeRandomNumber from '../utils';

const gameInstruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const minNumber = 1;
const maxNumber = 100;

const createQuestionAndAnswer = () => {
  const question = makeRandomNumber(minNumber, maxNumber);
  const rightAnswer = isEven(question);

  return { question, rightAnswer };
};

export default () => startGame(gameInstruction, createQuestionAndAnswer);

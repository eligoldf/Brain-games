import playGame from '../index';
import makeRandomNumber from '../utils';

const gameInstruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const minNumber = 1;
const maxNumber = 100;

const questionAndAnswer = () => {
  const question = makeRandomNumber(minNumber, maxNumber);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, questionAndAnswer);

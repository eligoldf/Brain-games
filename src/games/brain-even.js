import playGame from '../index';
import makeRandomNumber from '../utils';

const gameInstruction = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const questionAndAnswer = () => {
  const question = makeRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, questionAndAnswer);

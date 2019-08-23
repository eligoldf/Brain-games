import playGame from '../index';
import makeRandomNumber from '../functions/randomNumber';

const gameInstruction = 'Answer "yes" if number even otherwise answer "no".';

const brainEvenGame = () => {
  const isEven = (num) => {
    if (num % 2 === 0) {
      return true;
    }
    return false;
  };

  const question = makeRandomNumber(1, 100);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, brainEvenGame);

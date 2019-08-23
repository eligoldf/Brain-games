import playGame from '../index';
import makeRandomNumber from '../functions/randomNumber';

const gameInstruction = 'What number is missing in the progression?';

const brainProgressionGame = () => {
  const makeProgressionNumber = (start, scope, step) => start + (scope * (step - 1));

  const makeProgression = (start, scope, step) => {
    let result = '';
    for (let i = 1; i < 10; i += 1) {
      if (i === step) {
        result += ' ..';
      } else {
        result += ` ${makeProgressionNumber(start, scope, i)}`;
      }
    }
    return result;
  };

  const firstNumber = makeRandomNumber(1, 10);
  const difference = makeRandomNumber(1, 5);
  const hiddenNumber = makeRandomNumber(1, 10);
  const question = makeProgression(firstNumber, difference, hiddenNumber);
  const rightAnswer = String(makeProgressionNumber(firstNumber, difference, hiddenNumber));

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, brainProgressionGame);

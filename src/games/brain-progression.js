import playGame from '../index';
import makeRandomNumber from '../utils';

const gameInstruction = 'What number is missing in the progression?';

const makeProgression = (start, difference, position) => {
  let result = '';
  const progressionStep = 10;
  for (let i = 0; i < progressionStep; i += 1) {
    if (i === position) {
      result += '.. ';
    } else {
      result += `${start + i * difference} `;
    }
  }
  return result;
};

const minNumber = 1;
const maxNumber = 10;

const questionAndAnswer = () => {
  const start = makeRandomNumber(minNumber, maxNumber);
  const difference = makeRandomNumber(minNumber, maxNumber);
  const position = makeRandomNumber(minNumber, maxNumber);

  const question = makeProgression(start, difference, position);
  const rightAnswer = `${start + difference * position}`;

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, questionAndAnswer);

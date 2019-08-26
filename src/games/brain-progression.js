import playGame from '../index';
import makeRandomNumber from '../utils';

const gameInstruction = 'What number is missing in the progression?';

const makeProgressionNumber = (start, difference, position) => start + difference * position;

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

const questionAndAnswer = () => {
  const start = makeRandomNumber(1, 10);
  const difference = makeRandomNumber(1, 5);
  const position = makeRandomNumber(1, 10);
  const question = makeProgression(start, difference, position);
  const rightAnswer = String(makeProgressionNumber(start, difference, position));

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, questionAndAnswer);

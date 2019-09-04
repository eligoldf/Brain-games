import playGame from '..';
import makeRandomNumber from '../utils';

const gameInstruction = 'What number is missing in the progression?';

const progressionLength = 10;

const min = 1;
const max = 10;
const minIndex = 1;

const startGame = () => {
  const start = makeRandomNumber(min, max);
  const difference = makeRandomNumber(min, max);
  const missingIndexElement = makeRandomNumber(minIndex, progressionLength);
  let question = '';

  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === missingIndexElement) {
      question = `${question} ..`;
    } else {
      question = `${question} ${start + difference * i}`;
    }
  }

  const rightAnswer = `${start + difference * missingIndexElement}`;

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, startGame);

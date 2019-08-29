import playGame from '..';
import makeRandomNumber from '../utils';

const gameInstruction = 'What number is missing in the progression?';

const progressionLength = 10;

const makeProgression = (start, difference, missingNumber) => {
  let result = '';
  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === missingNumber) {
      result = `${result} ..`;
    } else {
      result = `${result} ${start + difference * i}`;
    }
  }
  return result;
};

const minNumber = 1;
const maxNumber = 10;

const createQuestionAndAnswer = () => {
  const start = makeRandomNumber(minNumber, maxNumber);
  const difference = makeRandomNumber(minNumber, maxNumber);
  const missingNumber = makeRandomNumber(minNumber, maxNumber);

  const question = makeProgression(start, difference, missingNumber);
  const rightAnswer = `${start + difference * missingNumber}`;

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, createQuestionAndAnswer);

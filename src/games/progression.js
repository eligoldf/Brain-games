import playGame from '..';
import makeRandomNumber from '../utils';

const gameInstruction = 'What number is missing in the progression?';

const progressionLength = 10;

const min = 1;
const max = 10;
const minMissingElementIndex = 0;

const getQuestionAndAnswer = () => {
  const start = makeRandomNumber(min, max);
  const difference = makeRandomNumber(min, max);
  const missingElementIndex = makeRandomNumber(minMissingElementIndex, progressionLength - 1);
  let question = ''.trim();

  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === missingElementIndex) {
      question = `${question} ..`;
    } else {
      question = `${question} ${start + difference * i}`;
    }
  }
  const rightAnswer = `${start + difference * missingElementIndex}`;

  return { question, rightAnswer };
};


export default () => playGame(gameInstruction, getQuestionAndAnswer);

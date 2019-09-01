import playGame from '..';
import makeRandomNumber from '../utils';

const gameInstruction = 'What number is missing in the progression?';

const progressionLength = 10;

const min = 1;
const max = 10;
const minIndex = 1;
const maxindex = 10;

const askQuestionAndAnswer = () => {
  const start = makeRandomNumber(min, max);
  const difference = makeRandomNumber(min, max);
  const missingIndex = makeRandomNumber(minIndex, maxindex);
  let question = '';

  for (let i = 0; i <= progressionLength; i += 1) {
    if (i === missingIndex) {
      question = `${question} .. `;
    } else {
      question = `${question} ${start + difference * i} `;
    }
  }

  const rightAnswer = `${start + difference * missingIndex}`;

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, askQuestionAndAnswer);

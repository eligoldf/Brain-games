import playGame from '../index';
import makeRandomNumber from '../functions/randomNumber';

const gameInstruction = 'What number is missing in the progression?';

const playBrainProgression = () => {
  const length = 10;
  const arr = [];
  const arrIndex = makeRandomNumber(1, 10);
  let startProgression = makeRandomNumber(1, 10);
  const stepOfProgression = makeRandomNumber(1, 10);

  for (let i = 0; i < length; i += 1) {
    arr[i] = startProgression + (stepOfProgression * i);
    startProgression += stepOfProgression;
  }

  const getRightAnswer = String(arr[arrIndex]);
  arr[arrIndex] = '..';
  const setQuestion = arr.join(' ');

  return { setQuestion, getRightAnswer };
};

export default () => playGame(gameInstruction, playBrainProgression);

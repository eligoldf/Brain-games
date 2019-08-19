import playGame from '../index';
import randomNumber from '../functions/randomNumber';

const gameInstruction = 'What is the result of the expression?';
const playBrainCalc = () => {
  const randomNumber1 = randomNumber(1, 10);
  const randomNumber2 = randomNumber(1, 10);
  const randomOperator = randomNumber(1, 3);
  let setQuestion;
  let getRightAnswer;
  switch (randomOperator) {
    case 1:
      setQuestion = `${randomNumber1} + ${randomNumber2}`;
      getRightAnswer = `${randomNumber1 + randomNumber2}`;
      break;
    case 2:
      setQuestion = `${randomNumber1} - ${randomNumber2}`;
      getRightAnswer = `${randomNumber1 - randomNumber2}`;
      break;
    case 3:
      setQuestion = `${randomNumber1} * ${randomNumber2}`;
      getRightAnswer = `${randomNumber1 * randomNumber2}`;
      break;
    default:
      break;
  }
  return { setQuestion, getRightAnswer };
};

export default () => {
  playGame(gameInstruction, playBrainCalc);
};

import playGame from '../index';
import makeRandomNumber from '../functions/randomNumber';

const gameInstruction = 'What is the result of the expression?';

const brainCalcGame = () => {
  const number1 = makeRandomNumber(1, 100);
  const number2 = makeRandomNumber(1, 100);
  const operator = makeRandomNumber(1, 3);
  let question;
  let rightAnswer;
  switch (operator) {
    case 1:
      question = `${number1} + ${number2}`;
      rightAnswer = `${number1 + number2}`;
      break;
    case 2:
      question = `${number1} - ${number2}`;
      rightAnswer = `${number1 - number2}`;
      break;
    case 3:
      question = `${number1} * ${number2}`;
      rightAnswer = `${number1 * number2}`;
      break;
    default:
      break;
  }
  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, brainCalcGame);

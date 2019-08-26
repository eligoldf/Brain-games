import playGame from '../index';
import makeRandomNumber from '../utils';

const gameInstruction = 'What is the result of the expression?';

const sum = (number1, number2) => number1 + number2;
const minus = (number1, number2) => number1 - number2;
const multiply = (number1, number2) => number1 * number2;
const operators = ['+', '-', '*'];
const actions = [sum, minus, multiply];

const minNumber = 1;
const maxNumber = 100;
const minIndex = 0;
const maxIndex = 2;

const questionAndAnswer = () => {
  const number1 = makeRandomNumber(minNumber, maxNumber);
  const number2 = makeRandomNumber(minNumber, maxNumber);
  const index = makeRandomNumber(minIndex, maxIndex);

  const question = `${number1} ${operators[index]} ${number2}`;
  const rightAnswer = String(actions[index](number1, number2));

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, questionAndAnswer);

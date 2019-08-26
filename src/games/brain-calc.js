import playGame from '../index';
import makeRandomNumber from '../utils';

const gameInstruction = 'What is the result of the expression?';

const sum = (number1, number2) => number1 + number2;
const minus = (number1, number2) => number1 - number2;
const multiply = (number1, number2) => number1 * number2;
const operators = ['+', '-', '*'];
const actions = [sum, minus, multiply];

const questionAndAnswer = () => {
  const number1 = makeRandomNumber(1, 100);
  const number2 = makeRandomNumber(1, 100);
  const index = makeRandomNumber(0, 2);

  const question = `${number1} ${operators[index]} ${number2}`;
  const rightAnswer = String(actions[index](number1, number2));

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, questionAndAnswer);

import playGame from '..';
import makeRandomNumber from '../utils';

const gameInstruction = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const makeCalculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      break;
  }
  return operator;
};

const min = 1;
const max = 100;

const getQuestionAndAnswer = () => {
  const number1 = makeRandomNumber(min, max);
  const number2 = makeRandomNumber(min, max);
  const operator = operators[makeRandomNumber(0, operators.length - 1)];

  const question = `${number1} ${operator} ${number2}`;
  const rightAnswer = `${makeCalculate(number1, number2, operator)}`;

  return { question, rightAnswer };
};

export default () => playGame(gameInstruction, getQuestionAndAnswer);

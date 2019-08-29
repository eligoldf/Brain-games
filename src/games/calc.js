import startGame from '..';
import makeRandomNumber from '../utils';

const gameInstruction = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const makeCalculator = (num1, num2, operator) => {
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

const minNumber = 1;
const maxNumber = 100;
const firstOperator = 0;

const createQuestionAndAnswer = () => {
  const number1 = makeRandomNumber(minNumber, maxNumber);
  const number2 = makeRandomNumber(minNumber, maxNumber);
  const operator = operators[makeRandomNumber(firstOperator, operators.length - 1)];

  const question = `${number1} ${operator} ${number2}`;
  const rightAnswer = `${makeCalculator(number1, number2, operator)}`;

  return { question, rightAnswer };
};

export default () => startGame(gameInstruction, createQuestionAndAnswer);

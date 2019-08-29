import readlineSync from 'readline-sync';

const userAttemptsCount = 3;

const startGame = (gameInstruction, questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameInstruction);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (count) => {
    if (count >= userAttemptsCount) {
      console.log(`Congratulation, ${userName}`);
      return;
    }

    const { question, rightAnswer } = questionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== rightAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct');
    iter(count + 1);
  };
  iter(0);
};

export default startGame;

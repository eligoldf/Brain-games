import readlineSync from 'readline-sync';

const playGame = (gameInstruction, startGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameInstruction);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (count, maxCount = 3) => {
    if (count >= maxCount) {
      console.log(`Congratulation, ${userName}!`);
      return 0;
    }
    const { setQuestion, getRightAnswer } = startGame();
    console.log(`Question: ${setQuestion}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === getRightAnswer) {
      console.log('Correct!');
      return iter(count + 1);
    }
    console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${getRightAnswer}.
      Let's try again, ${userName}!`);
    return iter(count);
  };
  return iter(0);
};
export default playGame;

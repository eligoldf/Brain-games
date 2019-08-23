import readlineSync from 'readline-sync';

const playGame = (gameInstruction, gameFunc) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameInstruction);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const iter = (count) => {
    const maxPoints = 3;
    if (count >= maxPoints) {
      console.log(`Congratulation, ${userName}`);
      return true;
    }
    const { question, rightAnswer } = gameFunc();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === rightAnswer) {
      console.log('Correct!');
      return iter(count + 1);
    }
    console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.
      Let's try again, ${userName}!`);
    return iter(count);
  };
  return iter(0);
};
export default playGame;

import readlineSync from 'readline-sync';

const playBrainEven = () => {
  console.log('Welcome to the Brain Games');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const iter = (randomNumber, acc) => {
    if (acc >= 3) {
      console.log(`Congratulations, ${name}`);
      return 0;
    }
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
      const newRandomNumber = Math.floor((Math.random() * 100) + 1);
      return iter(newRandomNumber, acc + 1);
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, '${name}'!`);
    return iter(randomNumber, acc);
  };
  return iter(1, 0);
};

export default playBrainEven;

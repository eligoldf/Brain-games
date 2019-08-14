import readlineSync from 'readline-sync';

const userName = () => {
    const name = readlineSync.question('Please, enter your name: ');
    console.log(`Hello ${name}!`);
};
export default userName;
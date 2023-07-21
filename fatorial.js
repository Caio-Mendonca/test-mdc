const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * calculateFactorial(number - 1);
  }
}

function isValidInteger(input) {
  const number = Number(input);
  return Number.isInteger(number) && number >= 0;
}

function askForNumber() {
  rl.question('Enter a positive integer: ', (input) => {
    if (isValidInteger(input)) {
      const number = parseInt(input);
      const factorial = calculateFactorial(number);
      console.log(`Calculating the factorial of ${number}...`);
      setTimeout(() => {
        console.log(`The factorial of ${number} is: ${factorial}`);
      }, 1000);
      setTimeout(() => {
      rl.question('Do you want to calculate the factorial of another number? (Y/N): ', (answer) => {
        if (answer.trim().toLowerCase() === 'n') {
          rl.close();
          console.log('Closing the program. Thanks!');
        } else {
          askForNumber();
        }
      });
      }, 2000);
    } else {
      console.log('Please enter a positive integer.');
      askForNumber();
    }

  });
}

askForNumber();
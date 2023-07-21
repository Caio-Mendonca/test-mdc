const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPalindrome(str) {
  const cleanedStr = str.replace(/\s/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

async function checkPalindrome() {
  try {
    const input = await getInput('Enter a word or phrase: ');
    const result = isPalindrome(input);
    console.log(`"${input.replace(/\s/g, '').toLowerCase()}" is ${result ? 'a palindrome' : 'not a palindrome'}.`);
    rl.question('Do you want to check another word or phrase? (Y/N): ', (answer) => {
        if (answer.trim().toLowerCase() === 'n') {
            rl.close();
            console.log('Closing the program. Thanks!');
          } else {
            checkPalindrome();
          }
    });
  } catch (err) {
    console.error('Error reading input:', err);
    rl.close();
  }
}

function getInput(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (input) => {
      resolve(input);
    });
  });
}

checkPalindrome();
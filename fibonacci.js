function fibonacciRecursive(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
  
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

const n = 10; // Replace this with the desired value of n
const fibonacciNumber = fibonacciRecursive(n);
console.log(`The ${n}th number in the Fibonacci sequence is: ${fibonacciNumber}!`);
// Iterative solution
function fibonacci(num, array = [0, 1]) {
  for (let i = 0; i < num - 2; i++) {
    array.push(array.at(-1) + array.at(-2));
  }
  return array;
}
console.log(fibonacci(8));

// Recursive solution
function fibonacciRec(num, array = [0, 1]) {
  if (num === array.length) return array;

  array.push(array.at(-1) + array.at(-2));
  return fibonacciRec(num, array);
}
console.log(fibonacciRec(8));

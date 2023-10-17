const example = [5, 2, 4, 1, 3];

function mergeSort(array) {
  // Base cases
  if (array.length === 0) return [];
  if (array.length === 1) return array;

  // Divide into two equal parts
  let sortedArr = [];
  const half = Math.floor(array.length / 2);
  const leftSide = array.slice(0, half);
  const rightSide = array.slice(half);

  // Recursive calls
  const resultOfLeftRecursion = mergeSort(leftSide);
  const resultOfRightRecursion = mergeSort(rightSide);

  // Dynamic sorting and merging on the way up from the deepest recursive call
  const finalLength = resultOfLeftRecursion.length + resultOfRightRecursion.length;
  while (sortedArr.length !== finalLength) {
    if (resultOfLeftRecursion[0] < resultOfRightRecursion[0]) {
      sortedArr.push(resultOfLeftRecursion[0]);
      resultOfLeftRecursion.splice(0, 1);
    } else if (resultOfLeftRecursion[0] > resultOfRightRecursion[0]) {
      sortedArr.push(resultOfRightRecursion[0]);
      resultOfRightRecursion.splice(0, 1);
    } else if (resultOfLeftRecursion.length === 0) {
      sortedArr.push(...resultOfRightRecursion);
    } else if (resultOfRightRecursion.length === 0) {
      sortedArr.push(...resultOfLeftRecursion);
    }
  }
  return sortedArr;
}

console.log(mergeSort(example));

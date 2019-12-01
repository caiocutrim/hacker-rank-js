
const arr = [1, [1, 2, 3], 3, [4, 5, 6], [9, 8, 9]]; 

function diagonalDifference(arr) {
  return Math.abs(
    +leftSum(setLeftNums(setMatrixNums(arr))) - 
    +rightSum(setRightNums(setMatrixNums(arr)))
  );
}

function setMatrixNums(matrixNums) {
  return arr.filter((value) => (Array.isArray(value)));
}

function setLeftNums(matrixNums) {
  return matrixNums.map((value, i, arr) => (arr[i][i]));
}

function setRightNums(matrixNums) {
  return matrixNums.map((value, i, arr) => (arr[i][arr[i].length - i - 1]));
}

function leftSum(leftDiagonalNums) {
  return leftDiagonalNums.reduce((acc, num) => (acc + num ));
}

function rightSum(rightDiagonalNums) {
  return rightDiagonalNums.reduce((acc, num) => (acc + num ));
}

console.log(diagonalDifference(arr));
// diagonalDifference(arr);

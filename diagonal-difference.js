function diagonalDifference(matrixNums) {
  return Math.abs(
    +leftSum(setLeftNums(setMatrixNums(matrixNums))) - 
    +rightSum(setRightNums(setMatrixNums(matrixNums)))
  );
}

function setMatrixNums(matrixNums) {
  return matrixNums.filter((matrix) => (Array.isArray(matrix)));
}

function setLeftNums(matrixNums) {
  return matrixNums.map((value, i, arr) => (arr[i][i]));
}

function setRightNums(matrixNums) {
  return matrixNums.map((value, i, arr) => (arr[i][arr[i].length - i - 1]));
}

function leftSum(leftNums) {
  return leftNums.reduce((acc, num) => (acc + num ));
}

function rightSum(rightNums) {
  return rightNums.reduce((acc, num) => (acc + num ));
}

const matrixNums = [1, [1, 2, 3], 3, [4, 5, 6], [9, 8, 9]]; 
console.log(diagonalDifference(matrixNums));

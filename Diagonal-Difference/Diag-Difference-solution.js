/* Diagonal Difference Problem - Hacker Rank

 Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 For example, the square matrix arr is shown below:

 1 2 3
 4 5 6
 9 8 9

 The left-to-right diagonal 1 + 5 + 9 = 15. The right to left diagonal 3 + 5 + 9 = 17 . 
 Their absolute difference is |15 - 17| = 2

 FUNCTION DESCRIPTION - 
 Complete the 'diagonalDifference' function in the editor below.
 diagonalDifference takes the following parameter:
 - int arr[n][m]: an array of integers

 RETURN -
 - int: the absolute diagonal difference

 INPUT FORMAT-
 The first line contains a single integer, 'n' the number of rows and columns in the square matrix 'arr'
 Each of the next 'n' lines describes a row, 'arr[i], and consists of n space-seperated integers 'arr[i][j]

 CONSTRAINTS -
 -100 < arr[i][j] < 100

 OUTPUT FORMAT -
 Return the absolute difference between the sums of the matrix's two diagonals as a single integer.
*/

/*---------PSEUDO CODE-------*/
/*
1. create a function that takes parameter
@param {array} array  input array
2. create two variables to add left-to-right diagonal and right-to-left diagonal, set both to 0
3. iterate through the array
  - declare a variable that will move left-to-right
  - declare a variable that will move right-to-left
  - add current left value to left sum
  - add current right value to right sum
  @return {number} absolute diagonal difference
*/

function diagonalDifference(arr) {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < arr.length; i++) {
    const left = arr[i][i]; // left to right variable - array of arrays [i][i] (index0)first array, (index0)second inner array both increase with loop
    const right = arr[i][array.length - 1 - i]; // inner array we use array.length - 1 to get last then minus i ( as loop increase and is subtracted we move from right to left)
    // add numbers to respective sum
    leftSum += left;
    rightSum += right;
  }
  // return absolute difference with Math.abs build in js method
  return Math.abs(leftSum - rightSum);
}

// browser test data
// console.log(
//   diagonalDifference2([
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12],
//   ])
// );

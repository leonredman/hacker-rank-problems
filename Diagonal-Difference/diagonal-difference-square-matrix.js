// Diagonal Difference - Square Matrix

//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

//For example, the square matrix arr is shown below:
1 2 3
4 5 6
9 8 9

//The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal 3 + 5 + 9 = 17 . 
//Their absolute difference is |15 - 17| = 2.

// Function description

// Complete the  function in the editor below.

// diagonalDifference takes the following parameter:

// int arr[n][m]: an array of integers


function diagonalDifference(arr) {
  var n = arr.length; 
  var d1 = 0;
  var d2 = 0;
for(var i=0; i<n; i++){
   for(var j=0; j<n; j++){
     // finding the sum of primary diagonal
       if(i === j) {
         d1 += arr[i][j];
       }
     // finding the sum of secondary diagonal
       if(i + j === n - 1){
          d2 += arr[i][j];
       }
    }
}
return Math.abs(d1 - d2);
}

// notes
// https://medium.com/@florinpop17/javascript-coding-challenge-6-22a76975baed

// a matrix is a square of a give size n * n ( basically describes the grid)
// 3 * 3 grid  is our above  example, can be 4*4 or even 10 * 10
// the square grid gives us diagonals which we can add
// problems like to ask for the absoulte value shown with pipes | |

// In JavaScript we’re going to have a matrix by combining multiple arrays into a bigger array
// var matrix = [[1, 2, 3], [4, 5, 6], [9, 8, 9]]
// we can manipulate like usual array

// To get the first term we would write it like this: arr[0][0]

// we need to calculate it more dynamically, using two loops.

// One loop will iterate through each one of the rows (in the big array) 
// and the other one will iterate through each element in the smaller arrays (or the inner arrays).

// Suppose you have a function calculateDiagonals which will get a matrix as it’s input. 
//Let’s first write those loops:

function calculateDiagonals(matrix){
  var n = matrix.length;
  for(var i=0; i<n; i++){
      for(var j=0; j<n; j++){
      }
  }
}
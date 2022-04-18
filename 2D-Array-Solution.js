/* 2D Array Solution

Given a 6x6 2D Array, 'arr':
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

An hourglass in 'A' is a subset of values with indicides falling in this pattern in 'arrs' graphical representation

a b c
  d
e f g



arr = [
  [1,1,1],
  [0,1,0],
  [1,1,1],
]
 rowIndxSum = arr[0][0] + [0][1] + [0][2]
 rowSum1 = arr[i][j] + [i][j+1] + [i][j+2]
 rowSum2 = arr[i+1][j+1]
 rowSum3 = arr[i+2][j] + [i+2][j+1] + [i+2][j+2]


There are '16 hourglassess in arr. An hourglass sum is the sum of an hourglass' values.
Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum
The array will always be 6 x 6

FUNCTION DESCTIPTION -
hourglassSum has the following parameters
-int arr[6][6]: an array of integers

RETURNS
- int: the maximum hourglass sum

INPUT FORMAT
Each of the 6 linkes of inputs 'arr[i] contains 6 space-seperated integers arr[i][j]

OUTPUT FORMAT
Print the largest (maximum) hourglass sum found in arr

------------ Pseudo Code ---------------

there will be 4 hourglasses across
there will be 4 hourglasses down

calculate the hourglass sum for every hourglass in arr  i 4 times and 
must iterate through array 4 times across and down only to find all hour glass

print the maxSum

let rowSum1 = 0
  let rowSum2 = 0
  let rowSum3 = 0
  let hourglassSum = 0

*/
// sample data for console
const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

// first declare some variables
let sumArray = []; // store sums of each hour glass
let i = 0; // stores the i row
let j = 0; // stores the j column
// console.log(s[i][j]) with variables will yeild value

// there are 16 hourglasses so have to iterate 16 times to find all
let x = 0;
//while loop to iterate thru
while (x < 16) {
  if (x == 4 || x == 8 || x == 12) {
    i++;
    j = 0;
  }
  const sum =
    arr[i][j] +
    arr[i][j + 1] +
    arr[i][j + 2] +
    arr[i + 1][j + 1] +
    arr[i + 2][j] +
    arr[i + 2][j + 1] +
    arr[i + 2][j + 2];
  sumArray.push(sum);
  j++;
  x++;
}
console.log(Math.max(...SumArray));

// function hourglassSum(arr) {
//   return maxSum();
// }

function hourglassSum(arr) {
  let sumArray = [];
  let i = 0;
  let j = 0;
  let x = 0;
  while ((x, 16)) {
    if (x == 4 || x == 8 || x == 12) {
      i++;
      j = 0;
    }
    const sum =
      arr[i][j] +
      arr[i][j + 1] +
      arr[i][j + 2] +
      arr[i + 1][j + 1] +
      arr[i + 2][j] +
      arr[i + 2][j + 1] +
      arr[i + 2][j + 2];
    j++;
    x++;
  }
  maxHourglassSum = Math.max(...SumArray);

  return maxHourglassSum;
}

/* DYNAMIC ARRAY PROBLEM

Declare a 2- dimensional array, 'arr' of 'n' empty arrays. All arrays are zero indexed

Declare and integer 'lastAnswer' and initialize it to 0

There are 2 types of queries given as an array of strings for you to parse

1. Query 1 x y
  1. let idx=((x ^lastAnswer)%n)
  2. Append the integer y to arr[idx]

2. Query 2 x y
  1.Letidx = ((x ^ lastAnswer)%n)
  2.Assign the value arr[idx][y%size(arr[idx])] to lastAnswer
  3 Store the new value to lastAnswer to an answers array

  */

// psuedo code

// Declare a 2-dimensional array,'arr' , of 'n' empty arrays. All arrays are zero indexed.
//let arr = [[n][n]];
let arr = [];
// Declare an integer,'lastAnswer', and initialize it to 0.
let lastAnswer = 0;
// There are '2' types of queries, given as an array of strings for you to parse:

for (let i = 0; i < queries.size(); i++) {
  // declare querys
  // first query has value of 1 x and y (1 is at index 0, x is at index1, and y is at index 2)
  let x = queries[i][1];
  let y = queries[i][2];
  let index = (x ^ last) % n; // index = x 'x-or' last divided by n
  // check which query to use
  if (queries[i][0] == 1) {
    arr[index].push(y);
  } else if (queries[i][0] == 2) {
    last = arr[index][y % arr[index].size()];
    lastAnswer.push(last);
  }
  return lastAnswer;
}

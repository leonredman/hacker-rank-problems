// Given an array of integers, find the sum of its elements.

// For example, if the array ar =[1,2,3], 1+2+3 = 6, so return 6.

// Function Description

// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.

// simpleArraySum has the following parameter(s):

// ar: an array of integers

// SOLUTION

/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
  // So we have an array [1,2,3,4,5] for example

  // we need to take 1 and add it to 2 and then add that to 3 etc.
  // so we are going to reference the array by the index and loop thru the array

  // we need return a total of the array

  let sum = 0;

  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }

  return sum;

  //a +b + c +d +e +f= G
}

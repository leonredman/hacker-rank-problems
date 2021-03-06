// A very big sum

// In this challenge, you are required to calculate and print the sum of the elements 
// in an array, keeping in mind that some of those integers may be quite large.

// Function Description

// Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

// aVeryBigSum has the following parameter(s):

// int ar[n]: an array of integers .

// Return

// long: the sum of all array elements

Sample Input
5
1000000001 1000000002 1000000003 1000000004 1000000005

Output

5000000015


function aVeryBigSum(ar) {

  // we have an array ar = [1,2,3,4,5]

  //  find sum of integers in an array
   let sum = 0
  // loop thru array and add all elements
  for(let i = 0; i < ar.length; i++) {
    sum += ar[i]
  }
  return sum;

}
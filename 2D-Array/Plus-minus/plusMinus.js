/*
Given an array of integers, calculate the ratios of its elements that are positive, 
negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, 
though answers with absolute error of up to 10^-4  are acceptable.

Example
arr = [1,1,0,-1,-1]

There are n=5 elements, two positive, two negative and one zero. Their ratios are 2/5 = 0.400000, 2/5 = 0.400000,  and 1/5 = 0.200000 
. Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers

Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, n , the size of the array.
The second line contains n space-separated integers that describe arr[n] .

Output Format

Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:
*/

const plusMinus = (arr) => {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) positive++;
    else if (arr[i] < 0) negative++;
    else zero++;
  }
};
// we console.log the number over the length(divided) for a decimal and then use
// method toFixed to set the number of dec places
console.log((positive / arr.length).toFixed(6));
console.log((negative / arr.length).toFixed(6));
console.log((zero / arr.length).toFixed(6));

//console.log(plusMinus([-4, 3, -9, 0, 4, 1]));

// Complete the reverseArray function below.
// Complete the reverseArray function below.

// ------- solution -------
let arr = [1, 2, 3, 4, 5, 6];
// create empty array
let newArr = [];
console.log(arr);

function reverseArray() {
  // Loop through array from the end to the beginning
  for (let i = arr.length - 1; i >= 0; i--) {
    // console.log(a[i])
    newArr.push(arr[i]);
    console.log(newArr);
  }
}
// return reversed array
reverseArray(arr);

// can also use the built in method '.reverse' in javascript. It takes in an array and returns and array
// returns Array(a) and reverses it and returns an array

function reverseArray(arr) {
  return arr.reverse();
}

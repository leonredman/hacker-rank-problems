/* LEFT ROTATION 
A left rotation operation on an array of size n shifts each of the arrays elemets 1 unit to the left. Given an integer d
rotate the array that many steops left and return the result
Example d = 2
arr = [1, 2, 3, 4, 5];
after 2 rotations arr = [3.4,5,1,2]
*/

let d = 2;
let arr = [1, 2, 3, 4, 5];

function rotateLeft(d, arr) {
  // Write your code here
  for (let i = 0; i < d; i++) {
    // shift() removes 1st element
    const firstElement = arr.shift();
    // push()
    const addElement = arr.push(firstElement);
  }
  return arr;
}

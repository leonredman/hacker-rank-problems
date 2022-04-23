// contains duplicates - leet code
// given an integer array nums, return true if any value appears at least twice
// in the array, and return false if every element is distinct
// array called nums
// example 1

// Input nums = [1,2,3,1]
//Output: true

// ------- solution ------ https://youtu.be/tVr0xWxnX14

//Psuedo code
// we need to create a memory check
// go through array and check if what I see now is something I have seen before
// if number is never seen before put in memory
// if the number does exist in memory check return true

nums = [1, 2, 3, 4, 1];
function containsDuplicate(nums) {
  let memCheck = [];
  for (let i = 0; i < nums.length; i++) {
    if (memCheck[nums[i]] === undefined) {
      memCheck[nums[i]] = i;
    } else {
      return true;
    }
  }
  return false;
}

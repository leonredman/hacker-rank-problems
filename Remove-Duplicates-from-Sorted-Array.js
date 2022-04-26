// Remove Duplicates -leet code arrays - easy

// nums =[ array sorted in non decreasing order]

// remove the duplicates in place so that each element appears only once

// the relative order of the elements should be kept the same

// place first part of array in nums

// if there are k elements after removing duplicates the the firs ke elements of nums should hold the final result

// it does not mater what you leave beyond the first k elements

// return K after placing the final result in the first k slots of nums

// input nums = [0,0,1,1,1,2,2,3,3,4]

// loop through array and remove the duplicates

// https://medium.com/swlh/javascript-remove-duplicates-from-sorted-array-in-place-d3d959fb4d77

//Psuedo code

var removeDuplicates = function (nums) {
  // 1. return 0 if the given array is empty
  // 2. Declare 2 pointers, i and j, and set them to 0 and 1 respectively
  // 3. use while loop to check if the number with index j is equal to the number with index i
  // 4. If not increment i by 1
  // and copy the value of the number with the index j to the element at the index i
  // and increment j by 1
  // 5. If they are equal, increment J to skip the duplicate
  // 6. after loop finishes return the length of the unique numbers  which equals i + 1
};

// ----------------- Solution --------------

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
//Psuedo code

var removeDuplicates = function (nums) {
  // 1. return 0 if the given array is empty
  if (nums.length === 0) return 0;
  // 2. Declare 2 pointers, i and j, and set them to 0 and 1 respectively
  let i = 0;
  let j = 1;
  // 3. use while loop to check if the number with index j is equal to the number with index i
  while (j < nums.length) {
    if (nums[j] !== nums[i]) {
      // 4. If not increment i by 1
      i++;
      // and copy the value of the number with the index j to the element at the index i
      nums[i] = nums[j];
      // and increment j by 1
      j++;
      // 5. If they are equal, increment J to skip the duplicate
    } else j++;
  }
  // 6. after loop finishes return the length of the unique numbers  which equals i + 1
  return i + 1;
};

// skip duplicates and use 2 pointers i and j slowpointer and fast pointers
// copy unique value when nums of i is not equal to nums of j until j has reached the end

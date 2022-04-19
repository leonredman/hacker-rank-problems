// Two Sum Problem - leet code

// given an array of integers nums and an integer target, return indicies of the two numbers such that they add up to taget
// You may assume that each input would have exactly one solution, and you may not use the same element twice
// you can return the answer in any order
// Input nums = [2,7,11,15], taget = 9
// Output: [0,1]

// Input: nums = [3,2,4], target = 6
//Output : [1,2]

function returnIndex(nums, tar) {
  //find 2 nums that add to target
  for (let i = 0; i < nums.length; i++) {
    // i = 1
    // take index and add to each element to see if equal to target
    val1 = nums[i];
    //val1 = 2
    for (j = i + 1; j < nums.length; j++) {
      //j = 2
      val2 = nums[j];
      if (val1 + val2 == tar)
        //return index
        return [i, j]; //[1,2]
    }
  }
}

//brute force solution, time complexity can use only one loop

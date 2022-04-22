// the array [1,2,3] represents the number 123
// we add one to 123 so we get 124  - and return as an array [1,2,4] ( seems simple but)
// we need to carry over in some cases  ( if we have 129 - we need to return 130) as there is a constraints 0 <= digits[i] <= 9
// The way to solve this is to  work the array backwards because if there is a carry we have to move to the left like arithmatic

// we have an array

digits = [4, 3, 2, 1];

// need to array.length[i]

var plusOne = function (digits) {
  // we work thru the array backwards so we minus one
  for (let i = digits.length - 1; i >= 0; i--) {
    //if digits is less than 9 we dont have to worry about carry operation
    if (digits[i] < 9) {
      // then we say digits [i] equals itself plus one
      digits[i] = digits[i] + 1;
      // and return digits immediately  123 becomes 124
      return digits;
      // if digit is a 9 we cannot return 10, we turn it to a 0 and to do a carry over operation
    } else {
      // we set i = 0 and the loop will run on the next element to the left ( loop handles both carry and non carry)
      digits[i] = 0;
    }
  }
  // last edge case - if input array is [9, 9]  need to return --> [1, 0, 0] ( have to add a 1 to array as loop retuns zeros only)
  digits.unshift(1);
  return digits;
};

// time complexity O(n) - we loop once from right to left ( end to beginning)
// space complexity O(1)

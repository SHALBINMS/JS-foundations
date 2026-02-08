let nums = [10, 20, 30, 40, 50];

// Maximum
let max = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}
console.log("Max:", max);

// Minimum
let min = nums[0];
for (let i = 1; i < nums.length; i++) {
  if (nums[i] < min) {
    min = nums[i];
  }
}
console.log("Min:", min);

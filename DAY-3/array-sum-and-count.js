let nums = [10, 20, 30, 40, 50];

// Sum of elements
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log("Sum:", sum);

// Count even numbers
let count = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    count++;
  }
}
console.log("Even count:", count);

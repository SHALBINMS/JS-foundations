let nums = [10, 20, 30, 40, 50];
let target = 16;
let found = false;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === target) {
    found = true;
    break;
  }
}

if (found) {
  console.log("Found");
} else {
  console.log("Not Found");
}

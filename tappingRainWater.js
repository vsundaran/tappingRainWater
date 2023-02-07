// Input: height = [4,2,0,3,2,5]
// Output: 9

let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let leftMaxArr = [];
let rigthMaxArr = [];

leftMaxArr[0] = 0;
rigthMaxArr[0] = 0;

let leftMax = arr[0]
// left to right traversal
for (let i = 1; i < arr.length; i++) {
  leftMaxArr.push(leftMax);
  if (arr[i] > leftMax) {
    leftMax = arr[i];
  }
}

let rigthMax = arr[arr.length - 1];
// from rigth to left traversal
for (let i = arr.length - 2; i >= 0; i--) {
  rigthMaxArr.unshift(rigthMax);
  if (arr[i] > rigthMax) {
    rigthMax = arr[i]
  }
}

// main traversal
let trappedWater = 0;

for (let i = 1; i < arr.length - 1; i++) {
  let min = Math.min(leftMaxArr[i], rigthMaxArr[i]);
  let val = min - arr[i];
  if (val < 0) {
    val = 0;
  }
  trappedWater += val
}

console.log(trappedWater)
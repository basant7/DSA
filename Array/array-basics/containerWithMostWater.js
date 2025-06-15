let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let max = 0;
  while (i < j) {
    let width = j - i;
    let hght = height[i] < height[j] ? height[i] : height[j];
    let area = width * hght;
    max = max < area ? area : max;
    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
};

console.log(maxArea(arr));

// https://leetcode.com/problems/container-with-most-water/submissions/1664610201/

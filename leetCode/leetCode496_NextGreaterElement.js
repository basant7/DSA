let nums1 = [4, 1, 2];

let nums2 = [1, 3, 4, 2];

function nextGreaterElement(nums1, nums2) {
  let stack = [];
  let obj = {};
  for (let i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
      let top = stack.pop();
      obj[top] = nums2[i];
    }
    stack.push(nums2[i]);
  }
  while (stack.length) {
    let top = stack.pop();
    obj[top] = -1;
  }
  for (let j = 0; j < nums1.length; j++) {
    nums1[j] = obj[nums1[j]];
  }
  return nums1;
}

console.log(nextGreaterElement(nums1, nums2));

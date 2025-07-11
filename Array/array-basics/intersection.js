var intersection = function (nums1, nums2) {
  let obj1 = {};
  let result = [];
  let i = 0;
  while (i < nums1.length) {
    obj1[nums1[i]] = (obj1[nums1[i]] || 0) + 1;
    i++;
  }
  let j = 0;
  while (j < nums2.length) {
    if (obj1[nums2[j]] > 0) {
      console.log(nums2[j]);
      result.push[nums2[j]];
    }
    j++;
  }
  console.log(result);
  //   return result;
};

intersection([1, 2, 2, 1], [2, 2]);

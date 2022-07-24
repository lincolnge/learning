/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/#/description
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const nl = nums1.length + nums2.length;
  const pos = Math.floor(nl / 2);
  let i = 0;
  let t = 0;
  let avg = 0;
  while (t < nums2.length) {
    console.log('nums1', nums1, 'pos', pos);
    if (i > pos + 1) {
      // console.log('break nums1', nums1);
      break;
    }
    if (nums1[i] > nums2[t]) {
      nums1.splice(i, 0, nums2[t]);
      t++;
    } else {
      if (nums1[i] === undefined) {
        nums1.push(nums2[t]);
        t++;
      }
    }
    i++;
  }

  if (nl % 2 === 0) {
    avg = (nums1[pos - 1] + nums1[pos]) / 2;
  } else {
    avg = nums1[pos];
  }
  console.log('nums1', nums1);
  return avg;
};

const findMedianSortedArrays2 = function (nums1, nums2) {
  // TODO: 未完待续。。。可以写成 O(log(Min(N, M))) 的算法，还有 log(M + N) 的，目前这里写的是 O((M + N) / 2)
};

const nums1 = [0, 3, 4, 10, 15, 22, 23, 33];
const nums2 = [0, 2, 3, 4, 5, 6, 7, 9, 11, 19];
// [ 0, 0, 2, 3, 3, 4, 4, 5, 6, 7, 9, 10, 11, 15, 19, 22, 23, 33 ]

console.log('findMedianSortedArrays', findMedianSortedArrays(nums1, nums2));

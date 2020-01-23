/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     var index = 2;
//     while(index < nums.length) {
//         // console.log('index', index, 'nums', nums);
//         if (nums[index] === nums[index - 2]) {
//             nums.splice(index, 1);
//         } else {
//             index++;
//         }
//     }
// };

var removeDuplicates = function(nums) {
    var index = 1;
    var newIndex = 1;
    var count = 1;
    while (index < nums.length) {
        if (nums[index] == nums[index - 1]) {
            count++;
        } else {
            count = 1;
        }
        if (count < 3) {
            nums[newIndex] = nums[index];
            newIndex++;
        }
        index++;
    }
    // JS 需要加上这一句
    nums.length = newIndex;
}


var nums1;
nums1= [1,1,1,2,2,3];
removeDuplicates(nums1)
console.log(nums1, 'removeDuplicates', nums1.length);

nums1 = [0,0,1,1,1,1,2,3,3];
removeDuplicates(nums1)
console.log(nums1, 'removeDuplicates', nums1.length);

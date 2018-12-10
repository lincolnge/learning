/**
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height <= 1) return 0;
    var res = 0;
    var currentHeight;
    var index1 = 0;
    var index2 = height.length - 1;
    var distance = index2 - index1;
    while(true) {
        if (index1 >= height.length) {
            break;
        }
        if (index2 <= index1) {
            break;
        }

        distance = index2 - index1;

        if (height[index1] < height[index2]) {
            currentHeight = height[index1];
            index1++;
        } else {
            currentHeight = height[index2]
            index2--;
        }
        var tmpRes = currentHeight * distance;
        if (res < tmpRes) {
            res = tmpRes;
        }
    }
    // algorithm 2
    // for (var index1 = 0; index1 < height.length; index1++) {
    //     for (var index2 = height.length; index2 > index1; index2--) {
    //         if (height[index1] < height[index2]) {
    //             currentHeight = height[index1];
    //         } else {
    //             currentHeight = height[index2]
    //         }
    //         distance = index2 - index1;
    //         var tmpRes = currentHeight * distance;
    //         if (res < tmpRes) {
    //             res = tmpRes;
    //         }
    //     }
    // }
    return res;
};

var arr;
arr = [1,8,6,2,5,4,8,3,7];
console.log('maxArea', maxArea(arr), 49);
arr = []
console.log('maxArea', maxArea(arr));
arr = [1];
console.log('maxArea', maxArea(arr), 0);

arr = [1,8,6,2,5,4,8,3,7, 8];
console.log('maxArea', maxArea(arr), 64);
arr = [2,3,4,5,18,17,6]
console.log('maxArea', maxArea(arr), 17);

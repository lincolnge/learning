/*
 *
 */

var arr1 = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 3, 2],
];

var arr2 = [
    [10, 45, 90, 11],
    [23, 68, 29, 09],
    [49, 39, 23, 79],
    [46, 92, 21, 99],
];

threeMaxProduct(arr1);
threeMaxProduct(arr2);

function threeMaxProduct (arr) {
    // var n = arr.length;

    var result = 0;
    var tmp_res = 0;
    var threeInteger = Array(3);

    // 水平方向
    for (var i = 0; i < arr.length; i++) {
        for (var k = 0; k < arr[i].length - 2; k++) {
            result = arr[i][k] * arr[i][k + 1] * arr[i][k + 2];
            if (result > tmp_res) {
                threeInteger[0] = arr[i][k];
                threeInteger[1] = arr[i][k + 1];
                threeInteger[2] = arr[i][k + 2];
                tmp_res = result;
            };
        };
    };

    // 竖直方向
    for (var k = 0; k < arr[0].length; k++) {
        for (var i = 0; i < arr.length - 2; i++) {
            result = arr[i][k] * arr[i + 1][k] * arr[i + 2][k];
            // console.log("result", arr[i][k], arr[i + 1][k], arr[i + 2][k], result)
            if (result > tmp_res) {
                threeInteger[0] = arr[i][k];
                threeInteger[1] = arr[i + 1][k];
                threeInteger[2] = arr[i + 2][k];
                tmp_res = result;
            };
        };
    };

    // 斜线方向
    for (var i = 0; i < arr.length - 2; i++) {
        for (var k = 0; k < arr.length - 2; k++) {
            result = arr[i][k] * arr[i + 1][k + 1] * arr[i + 2][k + 2];
            // console.log("result", arr[i][k], arr[i + 1][k + 1], arr[i + 2][k + 2], result)
            if (result > tmp_res) {
                threeInteger[0] = arr[i][k];
                threeInteger[1] = arr[i + 1][k + 1];
                threeInteger[2] = arr[i + 2][k + 2];
                tmp_res = result;
            };
        };
    };
    // 反斜线方向
    for (var i = arr.length - 1; i > 1; i--) {
        for (var k = 0; k < arr.length - 2; k++) {
            result = arr[i][k] * arr[i - 1][k + 1] * arr[i - 2][k + 2];
            // console.log("result", arr[i][k], arr[i - 1][k + 1], arr[i - 2][k + 2], result);
            if (result > tmp_res) {
                threeInteger[0] = arr[i][k];
                threeInteger[1] = arr[i - 1][k + 1];
                threeInteger[2] = arr[i - 2][k + 2];
                tmp_res = result;
            };
        };
    };

    console.log(threeInteger, tmp_res);
}

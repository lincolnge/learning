/**
 * https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var arr = s;
    var result = 0;
    // arr = [ 'I1', 'I2', 'I3' ];
    // console.log('arr', arr);

    // arr.reduce(function(x, y) {
    //     // console.log('x, y', x, y)
    //     if (romanValue[x] >= romanValue[y]) {
    //         result += (romanValue[x]);
    //     } else {
    //         result -= (romanValue[x]);
    //     }
    //     return y;
    // });

    // for 循环比 reduce 应该要快一些。
    for(var arrIndex = 1; arrIndex < arr.length; arrIndex++) {
        // console.log('arr[arrIndex - 1]', arr[arrIndex - 1], arr[arrIndex]);
        var last = romanValue[arr[arrIndex - 1]];
        // console.log('...last', last, romanValue[arr[arrIndex]]);
        if (last >= romanValue[arr[arrIndex]]) {
            result += last;
        } else {
            result -= last;
        }
    }

    result += romanValue[arr[arr.length - 1]];
    return result;
};

var romanValue = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};

// console.log('romanToInt(\'IV\')', romanToInt('IV'), 4);


console.log('romanToInt(\'I\')', romanToInt('I'), 1);
console.log('romanToInt(\'II\')', romanToInt('II'), 2);
console.log('romanToInt(\'III\')', romanToInt('III'), 3);
console.log('romanToInt(\'IV\')', romanToInt('IV'), 4);
console.log('romanToInt(\'V\')', romanToInt('V'), 5);
console.log('romanToInt(\'VI\')', romanToInt('VI'), 6);
console.log('romanToInt(\'VII\')', romanToInt('VII'), 7);
console.log('romanToInt(\'VIII\')', romanToInt('VIII'), 8);
console.log('romanToInt(\'IX\')', romanToInt('IX'), 9);
console.log('romanToInt(\'XIX\')', romanToInt('XIX'), 19);
console.log('romanToInt(\'XL\')', romanToInt('XL'), 40);
console.log('romanToInt(\'CXLIV\')', romanToInt('CXLIV'), 144);
console.log('romanToInt(\'CD\')', romanToInt('CD'), 400);

console.log('romanToInt(\'LVIII\')', romanToInt('LVIII'), 58);
console.log('romanToInt(\'MCMXCIV\')', romanToInt('MCMXCIV'), 1994);

console.log('romanToInt(\'XC\')', romanToInt('XC'), 90);
console.log('romanToInt(\'XCI\')', romanToInt('XCI'), 91);
console.log('romanToInt(\'XCIX\')', romanToInt('XCIX'), 99);
console.log('romanToInt(\'CM\')', romanToInt('CM'), 900);
console.log('romanToInt(\'CMXCIX\')', romanToInt('CMXCIX'), 999);
console.log('romanToInt(\'MCMXCIX\')', romanToInt('MCMXCIX'), 1999);
console.log('romanToInt(\'MM\')', romanToInt('MM'), 2000);

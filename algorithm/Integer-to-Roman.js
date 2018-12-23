/**
 * https://leetcode.com/problems/integer-to-roman/
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    if (num >= 4000) {
        new Error('无法处理');
        return null;
    }

    var result = '';
    var count = 0;
    var currentIndex = currentRomanValue.length - 1;
    var currentSymbol = null;
    var lastSymbol = null;
    // var nextSymbol = '';
    var minuend;

    while(num) {
        currentSymbol = currentRomanValue[currentIndex];
        if (currentIndex + 1 < currentRomanValue.length) {
            lastSymbol = currentRomanValue[currentIndex + 1];
        } else {
            // 处理 lastSymbol 为 1000 的时候
            lastSymbol = currentSymbol;
        }

        if (currentIndex >= 2) {
            minuend = currentRomanValue[currentIndex - 1];
            if (!minuend.isMinuend) {
                minuend = currentRomanValue[currentIndex - 2];
            }
        }
        if (currentSymbol.value === minuend.value) {
            // 当前的不能为被减数
            lastSymbol = null;
        }
        count = Math.floor(num / currentSymbol.value);
        num = num % currentSymbol.value;

        // console.log(
        //     'count', count, 'num', num,
        //     'lastSymbol', lastSymbol && lastSymbol.value,
        //     'currentSymbol', currentSymbol.symbol,
        //     'minuend', minuend.value,
        // );

        if (count >= 1) {
            result += repeat(count, currentSymbol.symbol);
        }
        if (lastSymbol && (currentSymbol.value - minuend.value <= num)) {
            result += minuend.symbol + currentSymbol.symbol;
            num = num - (currentSymbol.value - minuend.value);
        }

        if (num < 0) {
            break;
        }
        currentIndex--;
    }
    return result;
};

var repeat = function( num, str ) {
    return new Array(num + 1).join(str);
};

var currentRomanValue = [
    { symbol: 'I', value: 1, isMinuend: true },
    { symbol: 'V', value: 5, isMinuend: false },
    { symbol: 'X', value: 10, isMinuend: true },
    { symbol: 'L', value: 50, isMinuend: false },
    { symbol: 'C', value: 100, isMinuend: true },
    { symbol: 'D', value: 500, isMinuend: false },
    { symbol: 'M', value: 1000, isMinuend: true },
];

// 方法二
var intToRoman = function(num) {
    var M = ['', 'M', 'MM', 'MMM'];
    var C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    var X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    var I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    return M[Math.floor(num/1000)] + C[Math.floor((num%1000)/100)] + X[Math.floor((num%100)/10)] + I[num%10];
};

// 方法三
var intToRoman = function(num) {
	if (num >= 1000) {
		return "M" + intToRoman(num - 1000)
	}

	if (num >= 900) {
		return "CM" + intToRoman(num - 900)
	}

	if (num >= 500) {
		return "D" + intToRoman(num - 500)
	}

	if (num >= 400) {
		return "CD" + intToRoman(num - 400)
	}

	if (num >= 100) {
		return "C" + intToRoman(num - 100)
	}

	if (num >= 90) {
		return "XC" + intToRoman(num - 90)
	}

	if (num >= 50) {
		return "L" + intToRoman(num - 50)
	}

	if (num >= 40) {
		return "XL" + intToRoman(num - 40)
	}

	if (num >= 10) {
		return "X" + intToRoman(num - 10)
	}

	if (num >= 9) {
		return "IX" + intToRoman(num - 9)
	}

	if (num >= 5) {
		return "V" + intToRoman(num - 5)
	}

	if (num >= 4) {
		return "IV" + intToRoman(num - 4)
	}

	if (num >= 1) {
		return "I" + intToRoman(num - 1)
	}
	return '';
};

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

console.log('intToRoman(1)', intToRoman(1), 'I');
console.log('intToRoman(2)', intToRoman(2), 'II');
console.log('intToRoman(3)', intToRoman(3), 'III');
console.log('intToRoman(4)', intToRoman(4), 'IV');
console.log('intToRoman(5)', intToRoman(5), 'V');
console.log('intToRoman(6)', intToRoman(6), 'VI');
console.log('intToRoman(7)', intToRoman(7), 'VII');
console.log('intToRoman(8)', intToRoman(8), 'VIII');
console.log('intToRoman(9)', intToRoman(9), 'IX');
console.log('intToRoman(19)', intToRoman(19), 'XIX');
console.log('intToRoman(40)', intToRoman(40), 'XL');
console.log('intToRoman(144)', intToRoman(144), 'CXLIV');
console.log('intToRoman(400)', intToRoman(400), 'CD');

console.log('intToRoman(58)', intToRoman(58), 'LVIII');
console.log('intToRoman(1994)', intToRoman(1994), 'MCMXCIV');

console.log('intToRoman(90)', intToRoman(90), 'XC');
console.log('intToRoman(91)', intToRoman(91), 'XCI');
console.log('intToRoman(99)', intToRoman(99), 'XCIX');
console.log('intToRoman(900)', intToRoman(900), 'CM');
console.log('intToRoman(999)', intToRoman(999), 'CMXCIX');
console.log('intToRoman(1999)', intToRoman(1999), 'MCMXCIX');
console.log('intToRoman(2000)', intToRoman(2000), 'MM');

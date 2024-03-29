/**
 * https://leetcode.com/problems/zigzag-conversion/
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  if (numRows === 1) return s;

  // let rows = new Array(numRows);
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows[i] = [];
  }

  let curRow = 0;
  let goingDown = false;
  for (let i = 0; i < s.length; i++) {
    // if (!rows[curRow]) rows[curRow] = [];
    rows[curRow].push(s[i]);
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }

  let result = '';
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows[i].length; j++) {
      result += rows[i][j];
    }
    // result += rows[i].join(''); // 原生的 for 循环更快。
    // result = result.concat(rows[i]); // concat 更慢。。。
  }
  return result;
};

console.log(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR', convert('PAYPALISHIRING', 3) === 'PAHNAPLSIIGYIR');
console.log(convert('PAYPALISHIRING', 4), 'PINALSIGYAHRPI', convert('PAYPALISHIRING', 4) === 'PINALSIGYAHRPI');
console.log(convert('Apalindromeisaword,phrase,number,orothersequenceofunitsthatcanbereadthesamewayineitherdirection,withgeneralallowancesforadjustmentstopunctuationandworddividers.', 2) ===
    'Aaidoeswr,haenme,rtesqecouishtabrateaeaietedrcinwtgnrlloacsoajsmnsoucutoadodiiesplnrmiaodprs,ubroohreunefnttacneedhsmwynihrieto,iheeaalwnefrdutettpntainnwrdvdr.',
);

// convert('PAYPALISHIRING', 3);

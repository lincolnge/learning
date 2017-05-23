/**
 * n * n matrix
 */

var findMatrix = function(matrix, num) {
	var found = false;
	var rows = matrix.length;
	var columns = rows;
	if (!rows) {
		return 0;
	}
	var row = 0;
	var col = columns - 1;
	var test = 0;
	while(row < rows && col >= 0 && test < 100) {
		test++;
		if (matrix[row][col] === num) {
			found = true;
			break;
		} else if (matrix[row][col] > num) {
			col--;
		} else {
			row++;
		}
	}
	return found;
}

var matrix = [
	[ 1,  5,  9],
	[10, 11, 13],
	[12, 13, 15]
];

findMatrix(matrix, 5);

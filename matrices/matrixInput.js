var readlineSync = require('readline-sync');

function matrixInput() {
  var rows = readlineSync.questionInt('Enter No. of Rows: ');
  var cols = readlineSync.questionInt('Enter No. of Cols: ');
  console.log(`Matrix Dimention is: (${rows}x${cols})`);
  var matrixInput = new Array(rows);
  for (var i = 0; i < rows; i++) {
    matrixInput[i] = new Array(cols);
  }
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      matrixInput[i][j] = readlineSync.questionInt(
        `Enter Element for row ${i} x col ${j}: `
      );
    }
  }
  return matrixInput;
}

module.exports = matrixInput;

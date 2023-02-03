var readlinesync = require('readline-sync');
var matrixInput = require('./matrixInput.js');

function matrixAddition() {
  console.log('Enter Elements for First Matrix:');
  var matrix1 = matrixInput();
  console.log('Enter Elements for Second Matrix:');
  var matrix2 = matrixInput();
  var addMatrix = new Array(matrix1.length);
  for (var i = 0; i < matrix1.length; i++) {
    addMatrix[i] = new Array(matrix1[0].length);
  }
  for (var i = 0; i < addMatrix.length; i++) {
    for (var j = 0; j < addMatrix[i].length; j++) {
      addMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  console.log('First Matrix:');
  console.log(matrix1);
  console.log('Second Matrix:');
  console.log(matrix2);
  console.log('After Addition:');
  console.log(addMatrix);
}

module.exports = matrixAddition;

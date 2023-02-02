var readlinesync = require('readline-sync');

function matrixAddition() {
  var matrix1 = [
    [1, 2, 3],
    [1, 2, 3]
  ];
  var matrix2 = [
    [1, 2, 3],
    [1, 2, 3]
  ];
  var matrix3 = [[], []];
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {
      matrix3[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  console.log(matrix3);

  //   for (let i = 0; i < matrix1.length; i++) {
  //     for (let j = 0; j < matrix2.length; j++) {
  //       matrix3[i][j] = matrix1[i][j] + matrix2[i][j];
  //     }
  //     console.log('\n');
  //   }
  //   console.log(matrix3);
}

// matrixAddition();

module.exports = matrixAddition;

var readlineSync = require('readline-sync');
var matrixAddition = require('./matrices/addition.js');
var matrixSubtraction = require('./matrices/subtraction.js');

function main() {
  console.log(`--------------------`);
  console.log('     Options');
  console.log(`--------------------`);
  var options = ['Matrix Addition', 'Matrix Sutraction', 'Matrix Subtraction'];
  options.forEach((ele, index) => {
    console.log(`${index} ${ele}`);
  });
  console.log(`--------------------`);
  var option = readlineSync.questionInt('Select from the menu: ');
  if (option >= 0 && option <= 2) {
    switch (option) {
      case 0:
        console.clear();
        console.log('Okay! Exiting from program. Bye Bye...');
        return;
      case 1:
        matrixAddition();
        break;
      case 2:
        matrixSubtraction();
        break;
    }
    var again = readlineSync.question('Want to perform again? y/N: ');
    if (again === 'y' || again === 'Y' || again === 'yes' || again === 'YES') {
      console.clear();
      main();
    } else {
      console.clear();
      console.log('Okay! Exiting from program. Bye Bye...');
    }
  } else {
    console.clear();
    console.log('Invalid Option. Select correct option from the menu.');
    main();
  }
}

main();

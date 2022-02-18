"use strict"
let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year == 2015) alert( 'Вы правы!' );

if (year == 2015) {
    alert( "Правильно!" );
    alert( "Вы такой умный!" );
  }

if (0) { // 0 is falsy
    ...
  }

  if (1) { // 1 is truthy
    ...
  }

  let condition = (year == 2015); // преобразуется к true или false

if (condition) {
  ...
}

result = a && b;


alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false


let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}


if (1 && 0) { // вычисляется как true && false
    alert( "не сработает, так как результат ложный" );
  }


  result = value1 && value2 && value3;



  // Если первый операнд истинный,
// И возвращает второй:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0


alert( 1 && 2 && null && 3 ); // null

alert( 1 && 2 && 3 ); // 3


let x = 1;

(x > 0) && alert( 'Greater than zero!' );


let x = 1;

if (x > 0) {
  alert( 'Greater than zero!' );
}
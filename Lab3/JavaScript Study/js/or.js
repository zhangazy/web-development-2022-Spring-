result = a || b;


alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false


if (1 || 0) { // работает как if( true || false )
    alert( 'truthy!' );
  }


  let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'Офис закрыт.' );
}


let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'Офис закрыт.' ); // это выходной
}


result = value1 || value2 || value3;


alert( 1 || 0 ); // 1
alert( true || 'no matter what' ); // true

alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)



let currentUser = null;
let defaultUser = "John";

let name = currentUser || defaultUser || "unnamed";

alert( name ); // выбирается "John" – первое истинное значение


let x;

true || (x = 1);

alert(x); // undefined, потому что (x = 1) не вычисляется


let x;

false || (x = 1);

alert(x); // 1
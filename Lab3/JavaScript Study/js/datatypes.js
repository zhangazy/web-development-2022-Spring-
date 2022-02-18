// numbers
let n = 123;
n = 12.345;
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
alert( "не число" / 2 ); // NaN, такое деление является ошибкой
alert( "не число" / 2 + 5 ); // NaN
//big integers символ "n" в конце означает, что это BigInt
const bigInt = 1234567890123456789012345678901234567890n;
// string
let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

// Обратные же кавычки имеют расширенную функциональность. Они позволяют нам встраивать выражения в строку, заключая их в ${…}. Например:
let name = "Иван";

// Вставим переменную
alert( `Привет, ${name}!` ); // Привет, Иван!

// Вставим выражение
alert( `результат: ${1 + 2}` ); // результат: 3
// boolean
let nameFieldChecked = true; // да, поле отмечено
let ageFieldChecked = false; // нет, поле не отмечено
let isGreater = 4 > 1;

alert( isGreater ); // true (результатом сравнения будет "да")
// Оно формирует отдельный тип, который содержит только значение null:
let age = null;

// Специальное значение undefined также стоит особняком. Оно формирует тип из самого себя так же, как и null.
let age;

alert(age); // выведет "undefined"
let age = 123;

// изменяем значение на undefined
age = undefined;

alert(age); // "undefined"


// Вызов typeof x возвращает строку с именем типа:
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
result = (a !== null && a !== undefined) ? a : b;

let user;

alert(user ?? "Аноним"); // Аноним

let user = "Иван";

alert(user ?? "Аноним"); // Иван


let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

// показывает первое определённое значение:
alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер


let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

// показывает первое истинное значение:
alert(firstName || lastName || nickName || "Аноним"); // Суперкодер


let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0



let height = null;
let width = null;

// важно: используйте круглые скобки
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000



// без круглых скобок
let area = height ?? 100 * width ?? 50;

// ...то же самое, что предыдущее выражение (вероятно, это не то, что нам нужно):
let area = height ?? (100 * width) ?? 50;


let x = 1 && 2 ?? 3; // Синтаксическая ошибка


// будет height=100, если переменная height равна null или undefined
height = height ?? 100;
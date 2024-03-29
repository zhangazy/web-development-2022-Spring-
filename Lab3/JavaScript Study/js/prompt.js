// Функция prompt принимает два аргумента:
// result = prompt(title, [default]);
// Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена.

// title
// Текст для отображения в окне.
// default
// Необязательный второй параметр, который устанавливает начальное значение в поле для текста в окне.
// Пользователь может напечатать что-либо в поле ввода и нажать OK. Введённый текст будет присвоен переменной result. Пользователь также может отменить ввод нажатием на кнопку «Отмена» или нажав на клавишу Esc. В этом случае значением result станет null.

// Вызов prompt возвращает текст, указанный в поле для ввода, или null, если ввод отменён пользователем.

// Например:
let age = prompt('Сколько тебе лет?', 100);

alert(`Тебе ${age} лет!`); // Тебе 100 лет!
// comfirm (true or false)
let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK

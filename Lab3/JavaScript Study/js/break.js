let sum = 0;

while (true) {

  let value = +prompt("Введите число", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Сумма: ' + sum );


for (let i = 0; i < 10; i++) {

    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;
  
    alert(i); // 1, затем 3, 5, 7, 9
  }



  for (let i = 0; i < 10; i++) {

    if (i % 2) {
      alert( i );
    }
  
  }


  for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Значение на координатах (${i},${j})`, '');
  
      // Что если мы захотим перейти к Готово (ниже) прямо отсюда?
  
    }
  }
  
  alert('Готово!');


  labelName: for (...) {
    ...
  }
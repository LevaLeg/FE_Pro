console.log('test test test test test');

let currentRate = 50000;

function checkEquality() {      //Функция, проверяющая равны все три числа в полях ввода или нет.
    let inputValue1 = document.querySelector(".input-1").value;
    let inputValue2 = document.querySelector(".input-2").value;
    let inputValue3 = document.querySelector(".input-3").value;

    if (inputValue1 === inputValue2 && inputValue1 === inputValue3){
        console.log('Числа равны');
        document.querySelector(".result-1").innerText = 'Все числа равны';
    }
    else {
        console.log('Числа не равны');
        document.querySelector(".result-1").innerText = 'Числа не равны';
    }
}

function hasZero() {        //Функция, определяющая наличие нуля в одном или нескольких полях ввода.
    //Корректно работает только если явно указывать, что оперируем числами (+).
    let inputValue1 = +document.querySelector(".input-1").value;
    let inputValue2 = +document.querySelector(".input-2").value;
    let inputValue3 = +document.querySelector(".input-3").value;

    console.log(inputValue1);
    console.log(inputValue2);
    console.log(inputValue3);

    if (inputValue1 === 0 || inputValue2 === 0 || inputValue3 === 0){
        console.log('Обнаружен ноль');
        document.querySelector(".result-1").innerText = 'Обнаружен ноль';
    }
    else {
        console.log('Ноль не обнаружен');
        document.querySelector(".result-1").innerText = 'Ноль не обнаружен';
    }
}

function sameOne() {        //Функция для проверки наличия совпадающих чисел.
    let inputValue1 = +document.querySelector(".input-1").value;
    let inputValue2 = +document.querySelector(".input-2").value;
    let inputValue3 = +document.querySelector(".input-3").value;


    console.log('inputValue1: ' + inputValue1);
    console.log('inputValue2: ' + inputValue2);
    console.log('inputValue3: ' + inputValue3);


    if (inputValue1 === inputValue2 || inputValue1 === inputValue3 || inputValue2 === inputValue3){
        console.log('Обнаружены поля с совпадающими значениями.');
        document.querySelector(".result-1").innerText = 'Обнаружены поля с совпадающими значениями.';
    }
    else {
        console.log('Полей с совпадающими значениями не обнаружено.');
        document.querySelector(".result-1").innerText = 'Полей с совпадающими значениями не обнаружено.';
    }
}

let num_1 = 0; //Переменные, которые будут использоваться для сортировки чисел.
let num_2 = 0;
let num_3 = 0;

function sortNumbers() {    //Функция для сортировки трех чисел в порядке возрастания.
    let inputValue1 = +document.querySelector(".input-1").value;
    let inputValue2 = +document.querySelector(".input-2").value;
    let inputValue3 = +document.querySelector(".input-3").value;


    console.log('inputValue1: ' + inputValue1);
    console.log('inputValue2: ' + inputValue2);
    console.log('inputValue3: ' + inputValue3);

// Сортировка при помощи условных операторов.

if (inputValue1 > inputValue2 && inputValue1 > inputValue3) {
    if (inputValue2 > inputValue3) {
        num_3 = inputValue1;
        num_2 = inputValue2;
        num_1 = inputValue3;
    } else {
        num_3 = inputValue1;
        num_2 = inputValue3;
        num_1 = inputValue2;
    }
}

if (inputValue2 > inputValue1 && inputValue2 > inputValue3) {
    if (inputValue1 > inputValue3) {
        num_3 = inputValue2;
        num_2 = inputValue1;
        num_1 = inputValue3;
    } else {
        num_3 = inputValue2;
        num_2 = inputValue3;
        num_1 = inputValue1;
    }
}

if (inputValue3 > inputValue1 && inputValue3 > inputValue2) {
    if (inputValue2 > inputValue1) {
        num_3 = inputValue3;
        num_2 = inputValue2;
        num_1 = inputValue1;
    } else {
        num_3 = inputValue3;
        num_2 = inputValue1;
        num_1 = inputValue2;
    }
}

if (inputValue1 === inputValue2 && inputValue1 > inputValue3) {
 num_3 = inputValue1;
 num_2 = inputValue1;
 num_1 = inputValue3;
}

if (inputValue1 === inputValue3 && inputValue1 > inputValue2) {
    num_3 = inputValue1;
    num_2 = inputValue3;
    num_1 = inputValue2;
   }

// if (inputValue1 === inputValue3 && inputValue2 > inputValue1) {
//     num_3 = inputValue2;
//     num_1 = inputValue1;
//     num_2 = inputValue1;
//    }

if (inputValue2 === inputValue3 && inputValue2 > inputValue1) {
    num_3 = inputValue2;
    num_2 = inputValue2;
    num_1 = inputValue1;
   }

if (inputValue1 === inputValue2 && inputValue1 === inputValue3) {
    num_1 = inputValue1;
    num_2 = inputValue1;
    num_3 = inputValue1;
   }


document.querySelector(".result-1").innerText = `Отсортированные числа: ${num_1}, ${num_2}, ${num_3}`;

// Сортировка при помощи метода sort
    //let array = []; //Создание пустого массива.
    //array.push (inputValue1, inputValue2, inputValue3); //Добавление элементов в массив.
    //array.sort(function(a, b) {return a - b}); //Сортировка массива при помощи метода sort.
    ////b.sort((a, b) => a - b); //Эта строка добавлена позже, после урока 1 марта 2024 с Тиграном.
    // console.log(array);

    // document.querySelector(".result-1").innerText = 'Отсортированные числа: ' + array; //При таком варианте вывода числа выводятся без пробела.
    // document.querySelector(".result-1").innerText = `Отсортированные числа: ${array[0]}, ${array[1]}, ${array[2]}`;

}
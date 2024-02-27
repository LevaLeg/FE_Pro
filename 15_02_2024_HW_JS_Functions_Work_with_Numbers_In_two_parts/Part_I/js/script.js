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


function sortNumbers() {    //Функция для сортировки трех числе в порядке возрастания.
    let inputValue1 = +document.querySelector(".input-1").value;
    let inputValue2 = +document.querySelector(".input-2").value;
    let inputValue3 = +document.querySelector(".input-3").value;


    console.log('inputValue1: ' + inputValue1);
    console.log('inputValue2: ' + inputValue2);
    console.log('inputValue3: ' + inputValue3);


    let array = []; //Создание пустого массива.
    array.push (inputValue1, inputValue2, inputValue3); //Добавление элементов в массив.
    array.sort(function(a, b) {return a - b}); //Сортировка массива при помощи метода sort.
    console.log(array);

    // document.querySelector(".result-1").innerText = 'Отсортированные числа: ' + array; //При таком варианте вывода числа выводятся без пробела.
    document.querySelector(".result-1").innerText = `Отсортированные числа: ${array[0]}, ${array[1]}, ${array[2]}`;

}
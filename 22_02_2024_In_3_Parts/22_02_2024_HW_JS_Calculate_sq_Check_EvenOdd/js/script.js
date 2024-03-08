function calculateSquare() {        //Функция вычисления квадрата числа.
    let num = +document.querySelector(".input-1").value;
    result = Math.pow(num, 2);
    console.log(result);
    document.querySelector(".result").innerText = `Квадрат ${num}: ${result}`;
}


function checkEvenOdd() {           //Функция определения четности числа.
    let num = +document.querySelector(".input-1").value;
    if (num % 2 === 0) {
        console.log(`${num} - четное число`);
        document.querySelector(".result_2").innerText = `${num} - четное число`;
    }
    else {
        console.log(`${num} - нечетное число`);
        document.querySelector(".result_2").innerText = `${num} - нечетное число`;
    }
    
}

document.addEventListener('keyup', function(event) { //Функция определения нажатия Любой клавиши Enter. Настроено именно на Отпускание клавиши, для того, чтобы не фиксировать повторы при удержании клавиши.
    if (event.key == 'Enter') {
        calculateSquare();
        checkEvenOdd();
        console.log('Обнаружено нажатие клавиши ENTER');
    }
});

function clickDetect() {        //Функция, которая при нажатии ЛКМ на поле ввода очищает его и результаты возведения числа в квадрат и проверки его четности.
    console.log('Mouse click detected!');
    document.querySelector(".result").innerText = 'РЕЗУЛЬТАТ';
    document.querySelector(".result_2").innerText = 'РЕЗУЛЬТАТ';
    document.getElementById("frm").value = '';
}

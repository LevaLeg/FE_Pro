let currentRate = 50000;

function change() {
    let inputValue = document.querySelector(".input-1").value;
    let result = inputValue / currentRate;

    // console.log(inputValue + '$ = ' + result + 'BTC'); // 50000$ = 1BTC

    // let x = document.querySelector(".result-1");
    // x.innerText = "Hello";

    document.querySelector(".result-1").innerText = inputValue + '$ = ' + result + 'BTC';
}

function changeBack(){
    let inputValue = document.querySelector(".input-2").value;
    let result = inputValue * currentRate;

    document.querySelector(".result-2").innerText = inputValue + 'BTC = ' + result + '$';
}

function subtract(){
    let input1 = document.querySelector(".input-3").value;
    let input2 = document.querySelector(".input-4").value;

    let result = input1 - input2;

    document.querySelector(".result-3").innerText = input1 + " - " + input2 + " = " + result;
}

function add(){
    let input1 = +document.querySelector(".input-5").value;
    let input2 = Number(document.querySelector(".input-6").value);

    let result = input1 + input2;

    document.querySelector(".result-4").innerText = input1 + " + " + input2 + " = " + result;
}

function multiply(){                                            //Умножение
    let input1 = +document.querySelector(".input-7").value;
    let input2 = Number(document.querySelector(".input-8").value);

    let result = input1 * input2;

    document.querySelector(".result-5").innerText = input1 + " * " + input2 + " = " + result;
}

function divide(){                                            //Деление
    let input1 = +document.querySelector(".input-9").value;
    let input2 = Number(document.querySelector(".input-10").value);

    let result = input1 / input2;

    document.querySelector(".result-6").innerText = input1 + " / " + input2 + " = " + result;
}

function getMinutes(){                          //Преобразование часов в минуты
    let input1 = +document.querySelector(".input-11").value;
    
    let result = input1 * 60;

    document.querySelector(".result-7").innerText = input1 + " hours " + " that's " + result + " minutes";
}

function calculateAverage(){                    //Среднее арифметическое
    let input1 = +document.querySelector(".input-12").value;
    let input2 = +document.querySelector(".input-13").value;
    let input3 = +document.querySelector(".input-14").value;
    
    let result = (input1 + input2 + input3) / 3;

    document.querySelector(".result-8").innerText = "Arithmetic Mean of " + input1 + " , " + input2 + " , " + input3 + " is " + result;
}
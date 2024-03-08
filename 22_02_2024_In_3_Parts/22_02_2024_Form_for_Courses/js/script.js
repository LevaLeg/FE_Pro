console.log('Test test test');

//HTML
let html_count = 0; //Количество заказанных курсов по HTML.
let html_cost = 200; //Значение стоимости одного курса по HTML.
let html_cost_sum = 0; //Общая стоимость всех курсов по HTML, без учета скидки.

function click_html() {    
    if (html_count < 3) { //Можно заказать от одного до трех курсов.
        html_count++;
        document.querySelector(".html").style.backgroundColor = "lightgreen"; //Если курс заказан, то, изменяется цвет ячейки.
    } else {
    html_count = 0;
    document.querySelector(".html").style.backgroundColor = "Khaki";
}
html_cost_sum = html_cost * html_count;

    document.querySelector(".html").innerText = `${html_count} HTML ${html_cost_sum}$` //Вывод количества заказанных курсов по определенной дисциплине и сумма.
    console.log('Click on HTML detected!');
    total(); //Вызов функции total (функция для расчета и вывода результатов по отдельным группам курсов).
}

//Java
let java_count = 0;
let java_cost = 300;
let java_cost_sum = 0;

function click_java() {
    if (java_count < 3) {
        java_count++;
        document.querySelector(".java").style.backgroundColor = "lightgreen";
    } else {
        java_count = 0;
        document.querySelector(".java").style.backgroundColor = "Khaki";
    }
    java_cost_sum = java_cost * java_count;
    document.querySelector(".java").innerText = `${java_count} Java ${java_cost_sum}$`
    console.log('Click on Java detected!');
    total();
}

//Painting
let painting_count = 0;
let painting_cost = 150;
let painting_cost_sum = 0;

function click_painting() {
     
    if (painting_count < 3) {
        painting_count++;
        document.querySelector(".painting").style.backgroundColor = "lightgreen";
    } else {
        painting_count = 0;
        document.querySelector(".painting").style.backgroundColor = "Khaki";
    }
    painting_cost_sum = painting_cost * painting_count;
    document.querySelector(".painting").innerText = `${painting_count} Painting ${painting_cost_sum}$`
    console.log('Click on painting detected!');
    total();
}

//PHP
let php_count = 0;
let php_cost = 180;
let php_cost_sum = 0;

function click_php() {
        
    if (php_count < 3) {
        php_count++;
        document.querySelector(".php").style.backgroundColor = "lightgreen";
    } else {
        php_count = 0;
        document.querySelector(".php").style.backgroundColor = "Khaki";
    }

    php_cost_sum = php_cost * php_count;
    document.querySelector(".php").innerText = `${php_count} PHP ${php_cost_sum}$`
    console.log('Click on PHP detected!');
    total();
}

//Algorithms
let algo_count = 0;
let algo_cost = 160;
let algo_cost_sum = 0;

function click_algo() {
        
    if (algo_count < 3) {
        algo_count++;
        document.querySelector(".algo").style.backgroundColor = "lightgreen";
    } else {
        algo_count = 0;
        document.querySelector(".algo").style.backgroundColor = "Khaki";
    }
    algo_cost_sum = algo_cost * algo_count;
    document.querySelector(".algo").innerText = `${algo_count} Algorithms ${algo_cost_sum}$`
    console.log('Click on Algorithms detected!');
    total();
}

//2D Modeling
let d2d_count = 0;
let d2d_cost = 300;
let d2d_cost_sum = 0;
function click_d2d() {
        
    if (d2d_count < 3) {
        d2d_count++;
        document.querySelector(".d2d").style.backgroundColor = "lightgreen";
    } else {
        d2d_count = 0;
        document.querySelector(".d2d").style.backgroundColor = "Khaki";
    }
    d2d_cost_sum = d2d_cost * d2d_count;
    document.querySelector(".d2d").innerText = `${d2d_count} 2D Modeling ${d2d_cost_sum}$`
    console.log('Click on 2D detected!');
    total();
}

//JavaScript
let js_count = 0;
let js_cost = 250;
let js_cost_sum = 0;

function click_js() {
        
    if (js_count < 3) {
        js_count++;
        document.querySelector(".js").style.backgroundColor = "lightgreen";
    } else {
        js_count = 0;
        document.querySelector(".js").style.backgroundColor = "Khaki";
    }
    js_cost_sum = js_cost * js_count;

    document.querySelector(".js").innerText = `${js_count} JavaScript ${js_cost_sum}$`
    console.log('Click on JS detected!');
    total();
}

//Project Management
let pm_count = 0;
let pm_cost = 100;
let pm_cost_sum = 0; 

function click_pm() {
        
    if (pm_count < 3) {
        pm_count++;
        document.querySelector(".pm").style.backgroundColor = "lightgreen";
    } else {
        pm_count = 0;
        document.querySelector(".pm").style.backgroundColor = "Khaki";
    }
    pm_cost_sum = pm_cost * pm_count;
    document.querySelector(".pm").innerText = `${pm_count} Project Management ${pm_cost_sum}$`
    console.log('Click on PM detected!');
    total();
}

//3D Modeling
let d3d_count = 0;
let d3d_cost = 450;
let d3d_cost_sum = 0;

function click_d3d() {
        
    if (d3d_count < 3) {
        d3d_count++;
        document.querySelector(".d3d").style.backgroundColor = "lightgreen";
    } else {
        d3d_count = 0;
        document.querySelector(".d3d").style.backgroundColor = "Khaki";
    }
    d3d_cost_sum = d3d_cost * d3d_count;
    document.querySelector(".d3d").innerText = `${d3d_count} 3D Modeling ${d3d_cost_sum}$`
    console.log('Click on 3D Modeling detected!');
    total();
}

let result = 0; //Создание переменной для хранения результата (без учета скидки).
function total () { //Функция для расчета и вывода результатов по отдельным группам курсов.

    result_frontend = html_cost_sum + php_cost_sum + js_cost_sum;
    document.querySelector(".result_frontend").innerText = result_frontend;

    result_backend = java_cost_sum + algo_cost_sum + pm_cost_sum;
    document.querySelector(".result_backend").innerText = result_backend;

    result_design = painting_cost_sum + d2d_cost_sum + d3d_cost_sum;
    document.querySelector(".result_design").innerText = result_design;

    result = result_frontend + result_backend + result_design; //Результат.

    if (result < 3001) {
        total_without_discount(); //Если общая стоимость заказа 3000 или менее, то происходит вызов функции для расчета вывода результата без скидки.
    }else {
        total_with_discount(); //Если общая стоимость заказа составляет более 3000, то вызывается функция, которая расчитывает результат со скидкой, выводит его и также - результат без скидки.
    }
}

function total_without_discount() { //Функция для вывода на экран результата без скидки и очистки поля результата со скидкой.
    document.querySelector(".result").innerText = `Сумма заказа: ${result}$`;//Вывод результата (суммы).
    document.querySelector(".discount_result").innerText = '';//Вывод пустой строки в поле результата со скидкой. Это актуально для случая, если заказ сначала составляет, например, 3100, а потом - 2900. Без этой строки, в поле вывода результата со скидкой будет неверное значение.
}

let discount_result = 0; //Переменная для хранения финального результа с учетом скидки.
let discount = .7; //Переменная для хранения коэффициента, на котоый следует умножать стоимость с учетом скидки.
function total_with_discount() { //Функция, которая расчитывает результат со скидкой и выводит на экран оба результата - со скидкой и без.
    discount_result = result * discount; //Расчет скидки.
    document.querySelector(".result").innerText = `Сумма заказа: ${result}$`;
    document.querySelector(".discount_result").innerText = `Сумма заказа c учетом скидки: ${discount_result}$!`;
}


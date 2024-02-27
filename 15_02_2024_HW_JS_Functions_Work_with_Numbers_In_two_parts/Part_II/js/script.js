function getExamResult() {
    let score = 0; // 2, 4

    let num1 = Number(document.querySelector(".exam-1").value);
    let num2 = Number(document.querySelector(".exam-2").value);
    let num3 = Number(document.querySelector(".exam-3").value);
    let num4 = Number(document.querySelector(".exam-4").value);
    let num5 = Number(document.querySelector(".exam-5").value);
    let num6 = Number(document.querySelector(".exam-6").value);
    let num7 = Number(document.querySelector(".exam-7").value);
    let num8 = Number(document.querySelector(".exam-8").value);
    let num9 = Number(document.querySelector(".exam-9").value);
    let num10 = Number(document.querySelector(".exam-10").value);

    if (num1 === 15) {
        score += 2;

        document.querySelector(".exam-1").style.border = "4px solid green";
    } else {
        document.querySelector(".exam-1").style.border = "4px solid red";
    }

    if (num2 === 10) {
        score += 2;

        document.querySelector(".exam-2").style.border = "4px solid green";
    } else {
        document.querySelector(".exam-2").style.border = "4px solid red";
    }

    if (num3 === 12) {
        score += 2;

        document.querySelector(".exam-3").style.border = "4px solid green";
    } else {
        document.querySelector(".exam-3").style.border = "4px solid red";
    }

    if (num4 === 36) {
        score += 2;

        document.querySelector(".exam-4").style.border = "4px solid green";
    } else {
        document.querySelector(".exam-4").style.border = "4px solid red";
    }

    if (num5 === 1) {
        score += 2;

        document.querySelector(".exam-5").style.border = "4px solid green";
    } else {
        document.querySelector(".exam-5").style.border = "4px solid red";
    }



    if (num6 === 26) {
        score += 2;

        document.querySelector(".exam-6").style.border = "4px solid green";
    } else {
        document.querySelector(".exam-6").style.border = "4px solid red";
    }

    if (num7 === 81) {
        score += 2;

        document.querySelector(".exam-7").style.border = "4px solid green";
    } else {
        document.querySelector(".exam-7").style.border = "4px solid red";
    }

    if (num8 === 6) {
        score += 2;

        document.querySelector(".exam-8").style.border = "4px solid green";
    } else {
        document.querySelector(".exam-8").style.border = "4px solid red";
    }

    if (num9 === 5) {
        score += 2;

        document.querySelector(".exam-9").style.border = "4px solid green";
    } else {
        document.querySelector(".exam-9").style.border = "4px solid red";
    }

    if (num10 === 7) {
        score += 2;

        document.querySelector(".exam-10").style.border = "4px solid green";
    } else {
        document.querySelector(".exam-10").style.border = "4px solid red";
    }


    if (score >= 18) {
        document.querySelector(".result-4").innerText = `Вы получили: ${score} баллов. Отлично!`;
    }
    else if (score >= 12 && score < 18) {
        document.querySelector(".result-4").innerText = `Вы получили: ${score} баллов. Хорошо!`;
    }
    else if (score >= 8 && score < 12){
        document.querySelector(".result-4").innerText = `Вы получили: ${score} баллов. Удовлетворительно.`;
    }
    else {
        document.querySelector(".result-4").innerText = `Вы получили: ${score} баллов. Неудовлетворительно.`;
    }
}
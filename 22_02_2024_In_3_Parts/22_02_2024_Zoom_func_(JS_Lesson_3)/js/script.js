
let img = document.querySelector(".gallery > img");
let isToggle = true;


let xy = 200; //Начальная длина и ширина квадратного изображения - 200.

function zoom(){

    if (xy < 500) {
        xy += 50;
        img.style.width = `${xy}px`;
        img.style.height = `${xy}px`;
        console.log(`Значение xy увеличилось до ${xy} px`);
    }
    else {
        xy = 200;
        img.style.width = `${xy}px`;
        img.style.height = `${xy}px`;
        console.log(`Значение xy сброшено до ${xy} px`);
    }
}

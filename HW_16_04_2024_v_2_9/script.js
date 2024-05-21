console.log("Скрипт подключен успешно.");
console.log("A - Атака Героя 1");
console.log("В - Атака Героя 2");
console.log("Z - Исцеление Героя 1");
console.log("/ - Исцеление Героя 2");

let p_battle = document.getElementById('p_battle')
let hero_1 = document.getElementById("h1");
let hh1 = document.getElementById("h1");
let hero_2 = document.getElementById('h2');
let hh2 = document.getElementById("h2");
let hero_1_health_indicator = document.getElementById('h1')
let hero_2_health_indicator = document.getElementById('h2')

p_battle.style.color = 'blue'

//=============================================================================================================
//Создание класса Hero:
class Hero {
    constructor(name, health, attacked_hero, hero){
        this.name = name;
        this.health = health;
        this.attacked_hero = attacked_hero;
		this.hero = hero;
    }

//--------------------------------------------------------------------------------------------------------------
    attack(target, hero){
		this.hero = hero;
     
        target.health -= 10;
        if (target.health <= 0) target.health = 0;

        if (target.health >= 100){
            target.health = 100
            console.log(`${this.name} исцелен. Здоровье: ${this.health}%`);
        }

        target.innerText = `${target.health}%`;
        
        this.attacked_hero.innerText = `${target.health}%`;

        // console.log(hero_1_health_indicator.innerText);
        
        console.log(`${target.name} получает урон. Здоровье: ${target.health}%`);
        p_battle.innerText = `${target.name} получает урон. Здоровье: ${target.health}%`;
        
                //----------------------------------------------------------------------
                if (target.health < 50 && target.health > 0) {
                    attacked_hero.style.backgroundColor = 'red';

                } else if (target.health <= 0)
                    {
                    target.health = 0;    
                    attacked_hero.style.backgroundColor = 'black';
                    console.log((`${target.name} повержен. Победу одерживает ${this.name}`))
                    treasure.collect(this.hero);
                }
    }

    heal(name){
		if (this.health >= 100){
			this.health = 100;
        	console.log(`${this.name} исцелен. Здоровье: ${this.health}%`);
			p_battle.innerText = `${this.name} исцелен. Здоровье: ${this.health}%`;
            name.innerText = `${this.health}%`;
		} else {
			this.health += 5;
        	console.log(`${this.name} исцеляет себя!`);
			name.innerText = `${this.health}%`;
        	p_battle.innerText = `${this.name} исцеляет себя! Здоровье: ${this.health}%`;
		}
    }
}

//---------------------------------------------------------------------------------
class Treasure {
    constructor(value){
        this.value = value;
    }

    collect(hero){
        console.log(`${hero.name} получает сокровище стоимостью ${this.value}$`);
        p_battle.innerText = `${hero.name} получает сокровище стоимостью ${this.value}$`

		document.removeEventListener("keyup", keyPress);
    }
}
//---------------------------------------------------------------------------------

const hero1 = new Hero("Герой 1", 100, hero_2, hero_1);
const hero2 = new Hero("Герой 2", 100, hero_1, hero_2);
const treasure = new Treasure(500);

function keyPress (event){
    if(event.code === "KeyA"){
        hero1.attack(hero2, hero1);
        attacked_hero = hero_2;
    }else if(event.code === "KeyB"){
        hero2.attack(hero1, hero2);
        attacked_hero = hero_1;
    }

    if(event.code === "KeyZ") {  
        hero1.heal(hero_1)
    } else if (event.code === "Slash"){
        hero2.heal(hero_2);
    }
}

document.addEventListener("keyup", keyPress);

//Функция, обновляющая страницу
function refreshPage(){
    window.location.reload();
}
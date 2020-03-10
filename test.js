// Первый квест

/*

console.log("Hello World!")
var i
for(i = 0; i <= 150; i++){
    console.log("Hello World!")
}


Второй квест (нормальная версия)


function rabotai () {
    var i
    for(i = 0; i < 300; i++){ 
        if (i < 150) 
            console.log("Hello World!");
        else if (i < 300) 
            console.log("Piska")
    }
}
rabotai()
*/


// Второй квест (предпологаемое решение)


/*
function rabotai () {
var i
    for(i = 0; i < 150; i++){ 

    console.log("Hello World!");
    console.log("Piska")
    }
}
rabotai()
rabotai()


Третий квест


var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var birdYellow = new Image();
var birdRed = new Image();

birdYellow.src = "img/birdYellow.png";
birdRed.src = "img/birdRed.png";


// document.addEventListener("keydown", olert);

// function olert () {
//     alert ("Засчитало")
// }

// function draw() { 
//     ctx.drawImage(birdYellow, 75, 150);
// }

// document.addEventListener("keydown", changecolor);

// var KeypressFunctions = [];
// KeypressFunctions['Z'.charCodeAt(0)] = changecolor;
// KeypressFunctions['z'.charCodeAt(0)] = changecolor;


var isBirdYellow = true;

document.onkeydown = function changecolor (e) {
    if (e.keyCode === 90) {
        if (isBirdYellow === true) {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Чтобы холст (канвас) очищался
            ctx.drawImage(birdYellow, 75, 150);
            isBirdYellow = false;
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Чтобы холст (канвас) очищался
            ctx.drawImage(birdRed, 75, 150);
            isBirdYellow = true;
        }
    }
}

onload = document.onkeydown;

*/

// Изучение ООП

// class human {
//     constructor(name, gender,) {
//         this.name = name;
//         this.gender = gender;
//     }

//     shout(message) {
//         alert(message);
//     }
// }


// Четвёртый квест


var cvs = document.getElementById("canvas"); // Мы обращаемся к тому что написали в html и получаем объект класса HTMLElement, который из себя паредставлчет канвас
var ctx = cvs.getContext("2d"); // Что такое контекст понять сложно. До того как мы напишем эту строку с канвасом работать мы не можем. Всё рисуекм мы именно здесь. Мы создаём двухмерный контекст

class bird{
    xPos = 10;
    yPos = 150;
    isBirdYellow = true;

    constructor(xPos, yPos, isBirdYellow) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.isBirdYellow = isBirdYellow;
        
        setInterval(this.changeflag, 500);
        document.addEventListener("onkeydown", this.moveUp);
    }

    changeflag () { 
        if (this.isBirdYellow === true) {
            this.isBirdYellow = false;
        } else {
            this.isBirdYellow = true;
        }
    }

    moveUp() {
        this.yPos -= 25 // Переместить птицу вверх. Минус равно потому что в левом верхнем углу точка 0;0, а в правом нижнем углу - самая большая (в данном случае 288;512).
        fly.play(); // Проиграть звук подлёта
    }

    drawBird(ctx) {
        if (this.isBirdYellow === true) {
            ctx.drawImage(birdYellow, this.xPos, this.yPos)
        } else {
            ctx.drawImage(birdRed, this.xPos, this.yPos)
        }
    }
}

var birdYellow = new bird;
var birdRed = new bird;

var bg = new Image(); // Создание экземпляра класса картинка, картинка в данном случае как чертёж, модель. Конкретная машина (экз. класса) - чертёж машины (сам класс)
var fg = new Image(); // Создание объекта (низа)
var pipeUp = new Image(); // Создание объекта (верхней трубы)
var pipeBottom = new Image(); // Создание объекта (нижней трубы)

// Заполнение переменных - какя переменная где находится (в какой папке)

// Переменная соурс является полем класса картинка. Мы заполняем переменную соурс строкой имг...

birdYellow.src = "img/birdYellow.png";
birdRed.src = "img/birdRed.png";
bg.src = "img/bg.png"; // Присваиваем экземпляру bg класса картинка поле (свойство) источник, которое является переменной, а не константой, которым является имг/...
fg.src = "img/fg.png"; // Заполнение переменных
pipeUp.src = "img/pipeUp.png"; // Заполнение переменных
pipeBottom.src = "img/pipeBottom.png"; // Заполнение переменных 

//Звуковые файлы

var fly = new Audio // Создание объекта (звука подлёта птыцы)
var score_audio = new Audio // Создание объекта (звука получения очка)

fly.src = "audio/fly.mp3" // Заполнение переменных 
score_audio.src = "audio/score.mp3" // Заполнение переменных 

var gap = 90; //Расстояние между трубами

// Создание блоков
var pipe = []

pipe[0] = { // Массив (куча переменных вместе)
    x: cvs.width,
    y: 0
}

var score = 0; // Переменная счёт чтобы оно считало сколько этих штук ты пролетел

//Птичья позиция

var grav = 1.5;

//Чтобы всё было на своих местах

function draw() {
    ctx.drawImage(bg, 0, 0); // Где фон

    for (var i = 0; i < pipe.length; i++) {
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y); // Где верзняя труба
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap); // Где нижняя труба

        pipe[i].x--;

        if (pipe[i].x == 125) {
            pipe.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height // Чтобы дальше трубы рандомно генерировались
            });
        }

        // Чтобы при столкновениях страница перезагружалась

        if (bird.xPos + bird.width >= pipe[i].x &&
            bird.xPos <= pipe[i].x + pipeUp.width &&
            (bird.yPos <= pipe[i].y + pipeUp.height ||
            bird.yPos + bird.height >= pipe[i].y + pipeUp.height + gap) ||
            bird.yPos + bird.height >= cvs.height - fg.height) {
                alert("Вы проиграли");
                location.reload();// Перезагрузка страницы
        }

        // Чтобы добавлялся счёт

        if (pipe[i].x == 5) {
            score++; // Прибавить 1 очко
            score_audio.play(); // Проиграть звук получения очка
        }
    }
    ctx.drawImage(fg, 0, cvs.height - fg.height); // Где эта штука снизу короче
    //        ctx.drawImage(bird, xPos, yPos) // Где птица
    bird.drawBird(ctx);

    yPos += grav; // Чтобы птытьса падала

    ctx.fillSryle = "#000"; // Цвет шрифта
    ctx.font = "24px Verdana" // Размер шрифта
    ctx.fillText("Счёт: " + score, 10, cvs.height - 20) // Чтобы счёт показывался

    requestAnimationFrame(draw);
}

document.getElementById("reload").onclick = function () {
    location.reload();
}

document.getElementById("btn").onclick = function () {
    alert("Игра приостановлена");
}

onload = draw;

// Интервалы (setinterval) Первый аргумент - какую функцию он будет выполнять, а второй - раз в какой промежуток времени

/*
// Не по теме

// Summ - функция.
// firstNum и secondNum - аргументы функции (параметры тоже самое что и аргументы)
function Summ(firstNum, secondNum)
{
// считаем сумму и результат записываем в переменную result
var result = firstNum + secondNum;
// возвращаем полученный результат из функции
return result;
}
// А теперь нам надо как-то воспользоваться функцией, ведь просто функция, пока ты ее не попросишь ни чего делать не будет:
var summResult = Summ(5, 10); // Самое важное: вместо аргументов мы можем подставлять что угодно (в данном случае любые числа)
// В этой строке мы подставляем вместо аргументов числа 5 и 10, в другой можем 7 и 8 и т.д.
*/
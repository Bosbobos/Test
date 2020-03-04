// Первый квест


//console.log("Hello World!")
// var i
// for(i = 0; i <= 150; i++){
//     console.log("Hello World!")
// }


// Второй квест (нормальная версия)


// function rabotai () {
//     var i
//     for(i = 0; i < 300; i++){ 
//         if (i < 150) 
//             console.log("Hello World!");
//         else if (i < 300) 
//             console.log("Piska")
//     }
// }
// rabotai()


// Второй квест (предпологаемое решение)


// function rabotai () {
// var i
//     for(i = 0; i < 150; i++){ 
    
//     console.log("Hello World!");
//     console.log("Piska")
//     }
// }
// rabotai()
// rabotai()


// Третий квест


// var cvs = document.getElementById("canvas");
// var ctx = cvs.getContext("2d");

// var birdYellow = new Image();
// var birdRed = new Image();

// birdYellow.src = "img/birdYellow.png";
// birdRed.src = "img/birdRed.png";

// Начало ненужного кода

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

// Конец ненужного кода

// var isBirdYellow = true;

// document.onkeydown = function changecolor (e) {
//     if (e.keyCode === 90) {
//         if (isBirdYellow === true) {
//             ctx.clearRect(0, 0, canvas.width, canvas.height); // Чтобы холст (канвас) очищался
//             ctx.drawImage(birdYellow, 75, 150);
//             isBirdYellow = false;
//         } else {
//             ctx.clearRect(0, 0, canvas.width, canvas.height); // Чтобы холст (канвас) очищался
//             ctx.drawImage(birdRed, 75, 150);
//             isBirdYellow = true;
//         }
//     }
// }

// onload = document.onkeydown;


// Четвёртый квест


var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image(); // Создание объекта (картинки птыцы)
var birdRed = new Image();
var bg = new Image(); // Создание объекта (фона)
var fg = new Image(); // Создание объекта (низа)
var pipeUp = new Image(); // Создание объекта (верхней трубы)
var pipeBottom = new Image(); // Создание объекта (нижней трубы)

// Заполнение переменных - какя переменная где находится (в какой папке)

bird.src = "img/birdYellow.png"; // Заполнение переменных
birdRed.src = "img/birdRed.png";
bg.src = "img/bg.png"; // Заполнение переменных
fg.src = "img/fg.png"; // Заполнение переменных
pipeUp.src = "img/pipeUp.png"; // Заполнение переменных
pipeBottom.src = "img/pipeBottom.png"; // Заполнение переменных 

//Звуковые файлы

var fly = new Audio // Создание объекта (звука подлёта птыцы)
var score_audio = new Audio // Создание объекта (звука получения очка)

fly.src = "audio/fly.mp3" // Заполнение переменных 
score_audio.src = "audio/score.mp3" // Заполнение переменных 

var gap = 90; //Расстояние между трубами

// Чтобы птыться подлетала

document.addEventListener("keydown", moveUp); // Чтобы оно засчитывало нажатия

function moveUp() {
    yPos -= 25 // Переместить птицу вверх
    fly.play(); // Проиграть звук подлёта
}

// Создание блоков
var pipe = []
    
pipe[0] = { // Массив (куча переменных вместе)
    x : cvs.width,
    y : 0
}

var score = 0; // Переменная счёт чтобы оно считало сколько этих штук ты пролетел

//Птичья позиция

var xPos = 10;
var yPos = 150;
var grav = 1.5;



//Чтобы всё было на своих местах

function draw() { 
    ctx.drawImage(bg, 0, 0); // Где фон

    for(var i = 0; i < pipe.length; i++) {
     ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y); // Где верзняя труба
    ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap); // Где нижняя труба
    
    pipe[i].x--;

    if(pipe[i].x == 125) {
        pipe.push({
            x : cvs.width,
            y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height // Чтобы дальше трубы рандомно генерировались
        });
    }

    // Чтобы при столкновениях страница перезагружалась

    if(xPos + bird.width >= pipe[i].x
        && xPos <= pipe[i].x + pipeUp.width 
        && (yPos <= pipe[i].y + pipeUp.height
            || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >=cvs.height - fg.height) {
//                location.reload(); // Перезагрузка страницы
            }

// Чтобы добавлялся счёт

            if(pipe[i].x == 5) {
                score++; // Прибавить 1 очко
                score_audio.play(); // Проиграть звук получения очка
            }
    }



    ctx.drawImage(fg, 0, cvs.height - fg.height); // Где эта штука снизу короче
    ctx.drawImage(bird, xPos, yPos) // Где птица

    yPos += grav; // Чтобы птытьса падала

    ctx.fillSryle = "#000"; // Цвет шрифта
    ctx.font = "24px Verdana" // Размер шрифта
    ctx.fillText("Счёт: " + score, 10, cvs.height - 20) // Чтобы счёт показывался

    requestAnimationFrame(draw);
}

// Интервалы. Первый аргумент - какую функцию он будет выполнять, а второй - раз в какой промежуток времени

var id = setInterval(changecolor, 2500);
var isBirdYellow = true;

function changecolor () {
    if (isBirdYellow === true) {
        ctx.drawImage(bird, 10, 150);
        isBirdYellow = false;
    } else {
        ctx.drawImage(birdRed, 10, 150);
        isBirdYellow = true;
    }
}

onload = draw, id, changecolor;
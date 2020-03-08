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

// Четвёртый квест


var cvs = document.getElementById("canvas"); // Мы обращаемся к тому что написали в html и получаем объект класса HTMLElement, который из себя паредставлчет канвас
var ctx = cvs.getContext("2d"); // Что такое контекст понять сложно. До того как мы напишем эту строку с канвасом работать мы не можем. Всё рисуекм мы именно здесь. Мы создаём двухмерный контекст

var bird = new Image(); // Создание экземпляра класса картинка, картинка в данном случае как чертёж, модель (а бирд - ). Конкретная машина (экз. класса) - чертёж машины (сам класс)
var birdRed = new Image();
var bg = new Image(); // Создание объекта (фона)
var fg = new Image(); // Создание объекта (низа)
var pipeUp = new Image(); // Создание объекта (верхней трубы)
var pipeBottom = new Image(); // Создание объекта (нижней трубы)

// Заполнение переменных - какя переменная где находится (в какой папке)

bird.src = "img/birdYellow.png"; // Присваиваем экземпляру бирд класса картинка поле (свойство) источник, которое является переменной, а не константой, которым является имг/...
// Переменная соурс является полем класса картинка. Мы заполняем переменную соурс строкой имг...
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

function moveUp() { // Функция, аналогичные слова - процесс, действие, алгоритм, ИНСТРУКЦИЯ
    yPos -= 25 // Переместить птицу вверх. Минус равно потому что в левом верхнем углу точка 0;0, а в правом нижнем углу - самая большая (в данном случае 288;512).
    fly.play(); // Проиграть звук подлёта
}

// Создание блоков
var pipe = []

pipe[0] = { // Массив (куча переменных вместе)
    x: cvs.width,
    y: 0
}

var score = 0; // Переменная счёт чтобы оно считало сколько этих штук ты пролетел

//Птичья позиция

var xPos = 10;
var yPos = 150;
var grav = 1.5;



var isBirdYellow = true;

//Чтобы всё было на своих местах

var id = setInterval(changeflag, 500);

function changeflag() {
    if (isBirdYellow === true) {
        isBirdYellow = false;
    } else {
        isBirdYellow = true;
    }
}

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

        if (xPos + bird.width >= pipe[i].x &&
            xPos <= pipe[i].x + pipeUp.width &&
            (yPos <= pipe[i].y + pipeUp.height ||
            yPos + bird.height >= pipe[i].y + pipeUp.height + gap) ||
            yPos + bird.height >= cvs.height - fg.height) {
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
    if (isBirdYellow === true) {
        ctx.drawImage(bird, xPos, yPos)
    } else {
        ctx.drawImage(birdRed, xPos, yPos)
    }

    yPos += grav; // Чтобы птытьса падала

    ctx.fillSryle = "#000"; // Цвет шрифта
    ctx.font = "24px Verdana" // Размер шрифта
    ctx.fillText("Счёт: " + score, 10, cvs.height - 20) // Чтобы счёт показывался

    requestAnimationFrame(draw);
}

// Задача: добавить игре старотовый экран и геймовер



document.getElementById("reload").onclick = function () {
    location.reload();
}

document.getElementById("btn").onclick = function () {
    alert("Игра приостановлена");
}

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

onload = draw;
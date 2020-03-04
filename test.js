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
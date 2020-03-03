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

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var birdYellow = new Image();
var birdRed = new Image();
var bg = new Image();

birdYellow.src = "img/birdYellow.png";
birdRed.src = "img/birdRed.png";
bg.src = "img/bg.png";

function draw() { 
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(birdYellow, 150, 150);
}
draw ()
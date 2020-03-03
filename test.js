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

birdYellow.src = "img/birdYellow.png";

function draw() { 
    ctx.drawImage(birdYellow, 75, 150);
}

// document.addEventListener("keydown", olert);

// function olert () {
//     alert ("Засчитало")
// }

document.addEventListener("keydown", changecolor);

function changecolor () {
    if (birdYellow.src === "img/birdYellow.png") 
        birdYellow.src = "img/birdRed.png";
    else 
        birdYellow.src = "img/birdYellow.png";
}

onload = draw;
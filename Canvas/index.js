function exercice6()
{

}

function exercice5()
{

}

function exercice4()
{
let canvas = document.getElementById('ex4');
let ctx = canvas.getContext('2d');
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 1;
let dy = 0;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 100, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}

setInterval(draw, 1000);
}

function exercice3()
{
let canvasDom = document.querySelector('#ex3');
let ctx = canvasDom.getContext('2d');
ctx.font = 'bold 68px Montserrat';
ctx.fillStyle = '#000000';
ctx.fillText('Geometry.io', 50, 200);
}

function exercice2()
{
    let circle = {
    color: "#4444CC",
    radius:100,
    x:160,
    y:200
};
    
    canvasDom = document.querySelector('#ex2');
    ctx = canvasDom.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvasDom.width, canvasDom.height);
    ctx.fillStyle= circle.color;
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

}

function exercice1()
{
let canvas = document.querySelector('#ex1');
let ctx = canvas.getContext('2d');

ctx.fillStyle = '#FF0000';
ctx.fillRect(60, 100, 200, 200);
}

function initCanvasSize()
{
    // setting the size of the canvas
    let canvasList = document.querySelectorAll("canvas");

    for(canvas of canvasList)
    {
        let section = canvas.parentNode;

        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
    }
}

window.addEventListener("DOMContentLoaded", function(){
   initCanvasSize();
   exercice1();
   exercice2();
   exercice3();
   exercice4();
   exercice5();
   exercice6();
});
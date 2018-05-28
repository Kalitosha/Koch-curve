var canvas = document.getElementById("myCanvas");
var cxt  = canvas.getContext("2d");

elem = document.querySelector("#canv");

canvas.width = elem.offsetWidth;
canvas.height = elem.offsetHeight;

console.log("canvas.width="+canvas.width);
console.log("canvas.height="+canvas.height);

window.addEventListener('resize', function() {
	elem = document.querySelector("#canv");

	canvas.width = elem.offsetWidth;
	canvas.height = elem.offsetHeight;	
	Draw();

});

function Koch(p1,p2,n){
    if(n==0){ // если это прямая
        drawLine(p1.x, p1.y, p2.x, p2.y);
        return;
    }

    var p3 = {}, p4={}, p5 = {}; // создаем три новые точки

    p3.x = (2*p1.x + p2.x) / 3; // левая точка
    p3.y = (2*p1.y + p2.y) / 3;

    p5.x = (p1.x + 2*p2.x) / 3; // правая точка
    p5.y = (p1.y + 2*p2.y) / 3;

    var sideX = (p2.x - p1.x)/3;
    var sideY = (p2.y - p1.y)/3;

    p4.x = p3.x + sideX * Math.cos(Math.PI/3) + sideY * Math.sin(Math.PI/3); // это верхняя точка
    p4.y = p3.y - sideX * Math.sin(Math.PI/3) + sideY * Math.cos(Math.PI/3);

    Koch(p1, p3, n-1);
    Koch(p3, p4, n-1);
    Koch(p4, p5, n-1);
    Koch(p5, p2, n-1);
}

function Draw(){
    clearCanvas();
    var n = parseInt(document.getElementById("range").value); // номер пордка
    var point1 = { x:0, y:canvas.offsetHeight * 2 / 3}; // объект - координаты
    var point2 = { x:canvas.offsetWidth, y:canvas.offsetHeight * 2 / 3}; // 

    Koch(point1, point2, n);
}

function drawLine(x0, y0, x1, y1){
    cxt.beginPath();
    cxt.strokeStyle ="00ff00";
    cxt.moveTo(x0, y0);
    cxt.lineTo(x1, y1);
    cxt.stroke();
}

function clearCanvas() {
    cxt.clearRect(0, 0, canvas.width, canvas.height);
}

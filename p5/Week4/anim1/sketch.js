var y = 0;
var x = 800;
var xspid = 5;
var yspid = 3.2;

function setup() {
        createCanvas(800,800);
}

function draw() {
        background('blue');

        ellipse(x, y, 100, 100);


        if(y> height|| y< 0)
                yspid = yspid*-1;
        y = y + yspid;
        if(x> width|| x< 0)
                xspid = xspid*-1;
        x = x - xspid;
}

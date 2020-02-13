var x = 100;
var w = 100;
var y = 100;
var h = 100;

function setup()
{
        // put setup code here
        createCanvas(800,800);
        background('green');
}

function draw()
{
        // put drawing code here

        rect(x,y,w,h);
}

function mouseReleased()
{
        if (mouseX > x && mouseX < x + w
      && mouseY > y && mouseY < y + h){
                background(random(255),random(255), random(255));
        }
}

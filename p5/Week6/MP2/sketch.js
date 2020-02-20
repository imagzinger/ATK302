var state = 0;
var y = 100;
var x = 100;
var xspid = 5;
var yspid = 3.2;

function setup()
{
        createCanvas(800,800);

}

function draw()
{
        switch(state)
        {

                case 0:
                        titleScreen();
                        break;
                case 1:
                        screenSaver();
                        break;
                case 2:
                        backgroundChanger();
                        break;
                case 3:
                        drawWithCircle();
                        break;
        }
}

function mousePressed()
{
        state = (state +1) ;
        if(state > 3)
        {
                state -= 4;
        }
}

function titleScreen()
{
        background('red');
        text("TITLE SCREEN ", 400,400);
}

function screenSaver()
{

        background('blue');

        ellipse(x, y, 100, 100);


        if(y> height|| y< 0)
                yspid = yspid*-1;
        y = y + yspid;
        if(x> width|| x< 0)
                xspid = xspid*-1;
        x = x - xspid;

}

function backgroundChanger()
{
        var x = 100;
        var w = 400;
        var y = 100;
        var h = 400;

        if (mouseX > x && mouseX < x + w
      && mouseY > y && mouseY < y + h){
                background(random(255),random(255), random(255));
        }
}

function drawWithCircle()
{
        background(200);
        fill(20);
        ellipse(mouseX, mouseY, 2, 2) ;
}

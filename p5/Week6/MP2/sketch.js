var state = 1;
var y = 400;
var x = 400;
var xspid = 5;
var yspid = 3.2;
var s = 100;
var loseTimer = 5;
var G1timer = 10;
var G2timer = 10;
var G3timer = 10;
var infoTimer = 5;
var pongx = 0;
var pongy = 400;
var velocity =0;
var acceleration = -10;
var position = 0;
var ballx;
var lives = 4;
function setup()
{
        createCanvas(800,800);
        ballx = random(800);
}
function draw()
{
        fill('white');
        if(lives == 0)
                state =0;
        textFont('Georgia');
        textSize(20);
        switch(state)
        {

                case 0:
                        LoseScreen();
                        break;
                case 1:
                        console.log('case1');
                        background('black');
                        textFont('white');
                        text('Keep your mouse on the white ball so it does not roll away!!!',300,100);
                        ellipse(x, y, s, s);

                        infoTimer-= 1/60;
                        if(infoTimer < 0)
                        {
                                state = 2;
                                infoTimer = 5;
                        }
                        break;
                case 2:
                        GameOne();
                        break;
                case 3:
                        background('green');
                        textFont('white');
                        text('Bounce the ball! Every time it will fall in a different place!',300,300);
                        //ellipse(x, y, s, s);

                        infoTimer-=1/60;
                        if(infoTimer < 0)
                        {
                                state = 4;
                                infoTimer = 5;
                        }
                        break;
                case 4:
                        GameTwo();
                        break;
                case 5:
                        background('blue');
                        textFont('white');
                        text('Play PONG with the wall for 20 seconds!',300,300);
                        //ellipse(x, y, s, s);

                        infoTimer-=1/60;
                        if(infoTimer < 0)
                        {
                                state = 6;
                                infoTimer = 5;
                        }
                        break;
                case 6:
                        GameThree();
                        break;
                case 7:
                        WinScreen();
                        break;
        }
}

function LoseScreen()
{

        background('red');
        text("YOU SUCK! HAHA", 600,600);
        loseTimer -=1/60;
        //console.log(loseTimer);
        //console.log(lives);
        if(loseTimer <=0){
                velocity = 0;
                state = 1;
                lives = 4;
                xspid = 5;
                yspid = 3.2;
                G1timer = 20;
                G2timer = 20;
                G3timer = 20;
        }

}
function GameOne()
{
        loseTimer = 5;
        background('black');
        textSize(20);
        text("time left:"+G1timer,650,20);
        text("lives: "+lives,20,20);
        fill('white');
        ellipse(x, y, s, s);

        x += (x - mouseX) /50;
        y += (y - mouseY) /50;
        //console.log(G1timer);
        if(y> height|| y< 0)
        {
                lives--;
                G1timer+=10;
                x = mouseX;
                y = mouseY;
        }
        if(x> width|| x< 0)
        {
                lives--;
                G1timer+=10
                x = mouseX;
                y = mouseY;
        }
        if(G1timer <= 0)
                state = 3;
        G1timer-=1/60;

}
function GameTwo()
{
        if(mouseX > x)
                x += 20;
        if(mouseX < x)
                x -= 20;
        background('green');
        textSize(20);
        text("lives: "+lives,20,20);
        text("time left:"+G2timer,650,20);
        fill('black');
        rect(x,750,200,25);

        acceleration = 1000;
        velocity = velocity + acceleration/60;
        //console.log(velocity);
        //console.log(position);
        position =  position + velocity/60 + acceleration/3600;

        if(ballx>x&& ballx<x+200&&position>=725)
        {
                velocity = velocity *-1.1;
                //G2timer = 0;
                position = 724;
        }
        if(position < 0)
        {
                ballx = random(800);
                velocity = 0;
        }
        if (position > 726)
        {
                G2timer+=10;
                position = 0;
                ballx = random(800);
                velocity = 0;
                velocity *= 0.9;
                lives--;
        }
        ellipse(ballx,position,50,50);
        G2timer-=1/60;
        if(G2timer < 0)
                state = 5;
        //console.log(G2timer);
}
function GameThree()
{
        background('blue');
        text("time left:"+G3timer,650,20);
        text("lives: "+lives,20,20);
        fill('white');
        rect(750, mouseY, 25, 100);
        ellipse(pongx,pongy,25,25);
        pongx += xspid;
        pongy += yspid;
        if(pongy<0||pongy>775)
                yspid*=-1;
        if(pongx<0)
                xspid*=-1;
        if(pongx > 725&&(pongy>mouseY&&pongy<mouseY+100))
                xspid *= -1.1;
        if(pongx > 800){
                pongx = 0;
                pongy = random(4)+2;
                G3timer +=10;
                lives--;
        }
        G3timer-=1/60;
        //console.log(G3timer);
        if(G3timer <= 0)
                state = 7;
}
function WinScreen()
{
        background('yellow');
        fill('black');
        textSize(100);
        text("YOU WIN!", 150,400);
}

var state = 0;
var y = 100;
var x = 100;
var xspid = 5;
var yspid = 3.2;

var timer = 3600;

function setup()
{
        createCanvas(800,800);

}

function draw()
{
        timer -= 1/60;
        if ( x >750 || x <50||y >750 || y <50 )
        {
                        state --;
                        x = width/2;
                        y = height/2;
        }
        if(timer == 0)
        {
                state ++;
        }
        switch(state)
        {

                case 0:
                        youLoseScreen();
                        break;
                case 1:
                        var xspid = 5;
                        var yspid = 3.2;
                        screenSaver();
                        break;
                case 2:
                        backgroundChanger();
                        break;
                case 3:
                        drawWithCircle();
                        break;
        }
        if( timer ==)
}

function mousePressed()
{
        state = (state +1) ;
        if(state > 3)
        {
                state -= 4;
        }
}

function youLoseScreen()
{
        background('red');
        text("YOU SUCK! HAHA", 600,600);
}

function screenSaver()
{

        background('blue');

        ellipse(x, y, 100, 100);


/*if(y> height|| y< 0)
                yspid = yspid*-1;
        y = y + yspid;
        if(x> width|| x< 0)
                xspid = xspid*-1;
                x = x - xspid;*/

}


window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "ArrowDown":
      // code for "down arrow" key press.
      break;
    case "ArrowUp":
      // code for "up arrow" key press.
      break;
    case "ArrowLeft":
      // code for "left arrow" key press.
      break;
    case "ArrowRight":
      // code for "right arrow" key press.
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
// the last option dispatches the event to the listener first,
// then dispatches event to window




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

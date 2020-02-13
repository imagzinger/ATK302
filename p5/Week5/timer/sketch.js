var timer = 200;
function setup()
{
        // put setup code here
        createCanvas(800,800);
        background('green');
}

function draw()
{
        // put drawing code here
        timer = timer - 1;
        if(timer <= 0)
        {
                background(random (256),random (256),random (256) )
                timer = 200;
        }



}

function mouseReleased()
{
        if (mouseX > x && mouseX < x + w
      && mouseY > y && mouseY < y + h){
                background(random(255),random(255), random(255));
        }
}

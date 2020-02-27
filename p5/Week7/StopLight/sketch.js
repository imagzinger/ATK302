var state = 0;
var timer = 0;
var lightWidth = 150;
var lightHeight = 450;


function setup() {
        createCanvas(800, 800);

}

function draw() {
        background('grey');
        fill(0);
        rect(width/2 - 20,height/2,40, 400);
        rect((height-lightWidth)/2-10,(height - lightHeight)/2-10,lightWidth+20,lightHeight+20);
        fill(20);
        rect((height-lightWidth)/2,(height - lightHeight)/2,lightWidth,lightHeight);

        fill(10);
        ellipse(width/2, height/2, 125,125);
        ellipse(width/2, height/2 +150, 125,125);
        ellipse(width/2, height/2 - 150 , 125,125);

        timer++;
        switch(state)
        {
                case 7435:
                        fill('red');
                        ellipse(width/2, height/2 -150, 125,125);
                        if(timer == 420)
                        {
                                state = 0;
                                timer = 0;
                        }
                        break;
                case 543:
                        fill('yellow');
                        ellipse(width/2, height/2, 125,125);
                        if(timer == 120)
                        {
                                state = 7435;
                                timer = 0;
                        }
                        break;
                case 0:
                        fill('green');
                        ellipse(width/2, height/2 +150, 125,125);
                        if(timer == 300)
                        {
                                state = 543;
                                timer = 0;
                        }
                        break;

        }
}

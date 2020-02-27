var state = 0;
var timer = 0;

function setup() {
        createCanvas(800, 800);
}

function draw() {
        background('green');
        timer++;
        switch(state)
        {
                case 0:
                        text("I ordered a chicken and an egg  from amazon...",260,320);
                        break;
                case 1:
                        text("I'll let you know.",320,320);
                        break;
        }
        timerHandler();
}

function timerHandler()
{
        if(timer > 200)
        {
                state = (++state) % 2;
                timer = 0;
        }
}

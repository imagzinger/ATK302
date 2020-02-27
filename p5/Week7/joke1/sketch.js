var state = 0;

function setup() {
        createCanvas(800, 800);
}

function draw() {
        background('blue');

        switch(state)
        {
                case 0:
                        text("how do you make holy water?", 320,320);
                        break;
                case 1:
                        text("You boil the hell out of it", 320, 320);
                        break;
        }
}

function mouseReleased()
{
        state = (++state) % 2;
}

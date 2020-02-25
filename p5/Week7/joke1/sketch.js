var state = 0;

function setup() {
        createCanvas(800, 800);
}

function draw() {
        background('black');
        switch(state)
        {
                case 0:
                        text("how do you make holy water?");
                        break;
                case 1:
                        text("You boil the hell out of it");
                        break;

        }


}

function mouseReleased()
{
        state = (++state) % 2;
}

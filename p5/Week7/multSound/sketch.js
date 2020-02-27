var donkey;
var thrill;
var skate;

var state = [0, 1, 2, 3, 4, 5];
var currState = 0;

function setup() {
        createCanvas(800,800);
        background(255,0,0);

        // donkey.loop();
        // donkey.stop();
        // thrill.loop();
        // thrill.stop();
        // skate.loop();
        // skate.stop();
}

function draw() {
        switch(currState)
        {
                case state[0]:
                        donkey.play();
                        currState = 1;
                        break;
                case state[1]:
                        //donkey.pause();
                        break;
                case state[2]:
                        thrill.play();
                        currState++;
                        break;
                case state[3]:
                        //thrill.pause();
                        break;
                case state[4]:
                        skate.play();
                        currState++;
                        break;
                case state[5]:
                        //skate.pause();
                        break;
        }
}

function preload()
{
        donkey = loadSound("assets/donkey.mp3");
        thrill = loadSound("assets/thrill.mp3");
        skate = loadSound("assets/skate.mp3");
}

function mouseReleased()
{
        donkey.pause();
        thrill.pause();
        skate.pause();
        currState = (++currState) % state.length;
}

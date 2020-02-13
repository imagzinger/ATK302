var state = 0;
var timer;
//  x;

function setup() {
        // put setup code here
        createCanvas(800, 800);
}

function draw() {
        switch (state) {
                case 0:
                        background(255, 0, 0);
                        fill('white');
                        textSize(100);
                        text("case 0", width / 2, 100);
                        break;

                case 1:
                        background(0, 255, 0);
                        fill('black');
                        textSize(100);
                        text("case 1", 100, 100);
                        break;
                case 2:
                        background(0, 0, 255);
                        fill('gold');
                        textSize(100);
                        text("case 2", 100, 100);
                        break;
        }
}

function mouseReleased() {
        // add one to myState
        // if myState got past 2, reset it to 0
        state++;
        if (state > 2) {
                state = 0;
        }
}

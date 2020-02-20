let mic;
var x  = 0;

function setup() {
  createCanvas(710,710);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
        background(200);

        // Get the overall volume (between 0 and 1.0)
        let vol = mic.getLevel();
        fill(127);
        stroke(0);
        x+=1;
        if (x > 750)
        {
                x = -50;
        }
        // Draw an ellipse with height based on volume
        let size = map(vol, 0, 1, height, 0);
        //ellipse(width / 2, height/2, 10,10);
        ellipse(x, size-100, size/5,  size/5);
}
// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}

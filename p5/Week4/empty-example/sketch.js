var song1;

function preload() {
        song1 = loadSound('assets/starwars.mp3');
}

function setup() {
        createCanvas(720, 200);
        background(255, 0, 0);
        song1.play();  // this is what starts the sound

}

function draw() {
  // put drawing code here
}

function touchStarted()
{

}
function mouseIsPressed()
{
        song1.play();
}
function mouseReleased()
{
         song1.pause();
}

function setup() {
  // put setup code here
  createCanvas(750, 500);
}

function draw() {
  background(color(76, 200, 255));

//sun
  fill(255, 255, 0);
  noStroke();
  ellipse(120, 70, 100, 100);

//cloud
  var x = 200;
  var y = 30;
  var s = 1.5;
  fill(250);
  ellipse(150, 100, 70, 70);
  fill(253);
  ellipse(190, 110, 40, 40);
  fill(254);
  ellipse(110, 110, 40, 40);

  fill(255);
  ellipse(150 + x, 100 + y, 70, 70);
  fill(250);
  ellipse(190 + x, 110 + y, 40, 40);
  fill(248);
  ellipse(110 + x, 110 + y, 40, 40);

  fill(255);
  ellipse(150 + 2*x, 100 - y, s*70, s*70);
  fill(252);
  ellipse(210 + 2*x, 110 - y, s*40, s*40);
  fill(250);
  ellipse( 90 + 2*x, 110 - y, s*40, s*40);

//tree
  fill(80,80,50);
  quad(300,430,340,430,320,250,310,250);
  fill(20, 170, 20);
  ellipse(280,280,70,70);
    fill(20, 180, 20);
  ellipse(315,250,100,100);
    fill(20, 175, 20);
  ellipse(315,285,60,60);
    fill(20, 165, 20);
  ellipse(350,285,50,50);


//ground
  noStroke();

  fill(20, 245, 20);
  ellipse(0, 500, 400, 200);
  fill(20, 250, 20);
  ellipse(700, 450, 300, 200);
  fill(20, 255, 20);
  ellipse(375, 500, 750, 200);



  fill(0);
  text(mouseX +", "+ mouseY, 20, 20);
}

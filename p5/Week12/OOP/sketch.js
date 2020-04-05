var cars = [];
var frooggy;
var num_cars = 50;
var outline_offset = 50;
var state = 0;
var points = 0
var timer = 30;

function setup() {
        createCanvas(1000,1000);

        for(var i = 0; i< num_cars; i++)
        {
                cars.push(new Car());
        }
        frooggy = new Frog();
        textAlign(CENTER);
}

function draw() {

        switch(state)
        {
                case 0:
                        menu();
                        break;
                case 1:
                        game();
                        break;
                case 2:
                        win();
                        break;
                case 3:
                        lose();
                        break;
        }
}

function menu()
{
        background("lightblue");
        fill(0,200,0);
        stroke(0,150,0);
        strokeWeight(6);
        rect(width/2-150, height/2-165,300,300,50);
        fill(0,150,0);
        textSize(50);
        text("PLAY",width/2,height/2);
}

function win()
{
        points = 0;
        timer = 30;
        cars = [];
        frooggy.pos = createVector(500,500);
        for(var i = 0; i< num_cars; i++)
        {
                cars.push(new Car());
        }
        background("lightblue");
        fill(0,200,0);
        stroke(0,150,0);
        strokeWeight(10);
        textSize(200);
        text("YOU WIN!",width/2,height/2);
}
function lose()
{
        frooggy.pos = createVector(500,500);
        points = 0;
        timer = 30;
        cars = [];
        for(var i = 0; i< num_cars; i++)
        {
                cars.push(new Car());
        }
        background("pink");
        fill(200,0,0);
        stroke(150,0,0);
        strokeWeight(10);
        textSize(150);
        text("YOU LOSE!",width/2,height/2);
}

function mouseClicked()
{
        if(state == 0)
        {
                if(mouseX > width/2-150 && mouseX < width/2+150 && mouseY > width/2-165 && mouseY < width/2+135)
                {
                        state++;
                }
        }
        else if( state != 1)
        {
                        state = 0;
        }
}

function game()
{
        background('lightblue');
        for(var i = 0; i< cars.length; i++)
        {
                cars[i].display();
                cars[i].drive();
                if(cars[i].pos.dist(frooggy.pos) < frooggy.radius)
                {
                        points+=cars[i].size;
                        cars.splice(i,1);
                }
        }
        textSize(30);
        fill(0,200,0);
        stroke(0,150,0);
        strokeWeight(4);
        text("points: " + round(points), 200,100);
        text("time: " + round(timer), 200,150);
        frooggy.display();
        checkForKeys(frooggy);
        //console.log(points);
        if(points >= 1000){
                //console.log("you won")
                state = 2;
        }
        if(timer < 0){
                state = 3;
        }
        timer -= 1/60;
}

function checkForKeys(frooggy)
{
        if(keyIsDown(RIGHT_ARROW))
        {
                //console.log("right");
                frooggy.pos.x+=5;
                frooggy.moveRight();
        }
        if(keyIsDown(LEFT_ARROW))
        {
                //console.log("left");
                frooggy.pos.x-=5;
                frooggy.moveLeft();
        }
        if(keyIsDown(UP_ARROW))
        {
                //console.log("up");
                frooggy.pos.y-=5;
                frooggy.moveUp();
        }
        if(keyIsDown(DOWN_ARROW))
        {
                //console.log("down");
                frooggy.pos.y+=5;
                frooggy.moveDown();
        }
}

function Frog()
{
        this.radius = 100;
        this.pos = createVector(500,500);
        this.vel = 5;//createVector(5,5);

        this.display = function()
        {
                //fill(255,50,50);
                //stroke(255,0,0);
                //tounge
                //ellipse(this.pos.x,this.pos.y+this.radius*.6,this.radius*.1,this.radius*.7)
                fill(0,200,0);
                stroke(0,150,0);
                strokeWeight(4);
                //legs
                ellipse(this.pos.x+this.radius*.4,this.pos.y+this.radius*.4,this.radius*.3,this.radius*.3);
                ellipse(this.pos.x-this.radius*.4,this.pos.y+this.radius*.4,this.radius*.3,this.radius*.3);
                ellipse(this.pos.x+this.radius*.45,this.pos.y-this.radius*.35,this.radius*.35,this.radius*.45);
                ellipse(this.pos.x-this.radius*.45,this.pos.y-this.radius*.35,this.radius*.35,this.radius*.45);
                //body
                ellipse(this.pos.x,this.pos.y,this.radius,this.radius);
                fill(255,255,255);
                //eyes
                ellipse(this.pos.x+this.radius*.15,this.pos.y+this.radius*.1,this.radius*.3,this.radius*.3);
                ellipse(this.pos.x-this.radius*.15,this.pos.y+this.radius*.1,this.radius*.3,this.radius*.3);
                noStroke();
                fill(0);
                //pupils
                ellipse(this.pos.x+this.radius*.15,this.pos.y+this.radius*.1,this.radius*.2,this.radius*.2);
                ellipse(this.pos.x-this.radius*.15,this.pos.y+this.radius*.1,this.radius*.2,this.radius*.2);
        }
        this.moveUp = function()
        {
                this.pos.y -= this.vel;
        }
        this.moveDown = function()
        {
                this.pos.y += this.vel;
        }
        this.moveRight = function()
        {
                this.pos.x += this.vel;
        }
        this.moveLeft = function()
        {
                this.pos.x -= this.vel;
        }
}

function Car()
{
        this.pos = createVector(random(width),random(height));
        this.vel = createVector(random(-3,3),random(-3,3));
        this.size = abs(randomGaussian(20,20))+5;
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        this.display = function()
        {
                stroke(this.r-outline_offset,this.g-outline_offset,this.b-outline_offset);
                strokeWeight(4);
                fill(this.r,this.g,this.b);
                rect(this.pos.x,this.pos.y,this.size,this.size,this.size/8);
        }
        this.drive = function()
        {
                this.pos.add(this.vel);
                if(this.pos.x > width+this.size)
                {
                        this.pos.x = -1*this.size;
                        this.r = random(255);
                        this.g = random(255);
                        this.b = random(255);
                }
                if(this.pos.x < -1 * this.size)
                {
                        this.pos.x = width + this.size;
                        this.r = random(255);
                        this.g = random(255);
                        this.b = random(255);
                }
                if(this.pos.y > height+this.size)
                {
                        this.pos.y = -1*this.size;
                        this.r = random(255);
                        this.g = random(255);
                        this.b = random(255);
                }
                if(this.pos.y < -1*this.size)
                {
                        this.pos.y = height + this.size;
                        this.r = random(255);
                        this.g = random(255);
                        this.b = random(255);
                }
        }
}

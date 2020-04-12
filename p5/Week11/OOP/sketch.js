var cars = [];
var num_cars = 50;
var outline_offset = 50;

function setup() {
        createCanvas(2766,1463);

        for(var i = 0; i< num_cars; i++)
        {
                cars.push(new Car());
        }
}

function draw() {
        background('lightblue');
        for(var i = 0; i< num_cars; i++)
        {
                cars[i].display();
                cars[i].drive();
        }

}

function Car()
{
        this.pos = createVector(random(width),random(height));
        this.vel = createVector(random(-3,3),random(-3,3));
        this.size = abs(randomGaussian(100,200));
        this.r = random(255);
        this.g = random(255);
        this.b = random(255);
        this.display = function()
        {
                stroke(this.r-outline_offset,this.g-outline_offset,this.b-outline_offset);
                strokeWeight(4);
                fill(this.r,this.g,this.b);
                ellipse(this.pos.x,this.pos.y,this.size,this.size);
                fill(255,255,255,150);
                ellipse(this.pos.x+this.size*0.7,this.pos.y+this.size*0.7,this.size/2,this.size/2);
                ellipse(this.pos.x-this.size*0.7,this.pos.y+this.size*0.7,this.size/2,this.size/2);
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

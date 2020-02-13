var x = 5;
var spid = 4;

function setup() {
        createCanvas(800,800)
}

function draw() {
        greenEgg();
}


function greenEgg()
{
        background('black');

        push();
        translate(x, 0);
        if(x > width|| x < 0)
                spid = spid*-1;
        x = x + spid;

        ellipse(100,100,100,100);
        pop();
        // eggBody(true);
        // eggYoke(true);
        // eggEyes(true);
        // eggMouth(true);
}

function eggBody() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                ctx.beginPath();
                ctx.lineWidth = "2";
                ctx.strokeStyle = "black";
                ctx.moveTo(427, 389);
                ctx.bezierCurveTo(-7, 360, 485, 412, 206, 462); //1
                ctx.bezierCurveTo(95, 482, 190, 528, 340, 547); //2
                ctx.bezierCurveTo(382, 551, 352, 639, 426, 607); //3
                ctx.bezierCurveTo(512, 559, 485, 485, 626, 542); //4
                ctx.bezierCurveTo(731, 598, 668, 460, 721, 442); //5
                ctx.bezierCurveTo(777, 423, 675, 440, 601, 402); //6
                ctx.fillStyle = "white";
                ctx.fill();
                ctx.stroke();
        }
}//done

function eggEyes(pressed) {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                if (mouseIsPressed) {
                        ctx.beginPath();
                        ctx.lineWidth = "2";
                        ctx.strokeStyle = "black";
                        ctx.moveTo(463, 384);
                        ctx.bezierCurveTo(455, 400, 489, 405, 487, 392); //1
                        ctx.fillStyle = "white";
                        ctx.fill();
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.lineWidth = "2";
                        ctx.strokeStyle = "black";
                        ctx.moveTo(460, 384);
                        ctx.bezierCurveTo(470, 379, 481, 394, 490, 393); //2
                        ctx.fillStyle = "white";
                        ctx.fill();
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.lineWidth = "2";
                        ctx.strokeStyle = "black";
                        ctx.moveTo(521, 392);
                        ctx.bezierCurveTo(520, 400, 548, 407, 545, 390); //3
                        ctx.fillStyle = "white";
                        ctx.fill();
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.lineWidth = "2";
                        ctx.strokeStyle = "black";
                        ctx.moveTo(518, 391);
                        ctx.bezierCurveTo(525, 394, 534, 384, 547, 391); //4
                        ctx.fillStyle = "white";
                        ctx.fill();
                        ctx.stroke();
                }

                else {
                        ctx.beginPath();
                        ctx.ellipse(460,400,8,15,0,2*Math.PI,0);
                        ctx.fillStyle =  "white";
                        ctx.fill();
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.ellipse(520,400,8,15,0,2*Math.PI,0);
                        ctx.fillStyle =  "white";
                        ctx.fill();
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.ellipse(460,398,4,8,0,2*Math.PI,0);
                        ctx.fillStyle =  "black";
                        ctx.fill();
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.ellipse(519,398,4,8,0,2*Math.PI,0);
                        ctx.fillStyle =  "black";
                        ctx.fill();
                        ctx.stroke();
                }
        }
}//done

function eggYoke(pressed){
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {

                var ctx = canvas.getContext('2d');
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(510, 443, 100, Math.PI, 0);
                ctx.arc(510, 203, 260, 3 * Math.PI / 8, 5 * Math.PI / 8);

                if(mouseIsPressed){
                        ctx.fillStyle = "green";
                }
                else{
                        ctx.fillStyle = "yellow";
                }
                ctx.fill();
                ctx.stroke();
        }}//done

function eggMouth(pressed) {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
                if(mouseIsPressed){
                        var ctx = canvas.getContext('2d');
                        ctx.beginPath();
                        ctx.moveTo(517, 427);
                        ctx.bezierCurveTo(430, 432, 522, 393, 517, 427);
                        ctx.fillStyle = "black";
                        ctx.fill();
                        ctx.stroke();
                }
                else {
                        var ctx = canvas.getContext('2d');
                        ctx.beginPath();
                        ctx.arc(490, 433, 20, 0, Math.PI);
                        ctx.fillStyle = "black";
                        ctx.fill();
                        ctx.stroke();
                }
        }}//done

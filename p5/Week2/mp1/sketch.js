function setup() {}

function draw() {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                ctx.beginPath();
                ctx.rect(0, 0, 800, 800);
                ctx.fillStyle = "#8888ff";
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.lineWidth = "0.1";
                //ctx.strokeStyle = "black";
                ctx.rect(600,260,80,40)
                ctx.fillStyle = "#fffdd0";
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.lineWidth = "0.1";
                //ctx.strokeStyle = "black";
                ctx.ellipse(680,260,20,20,0,2*Math.PI,0)
                ctx.fillStyle = "fffdd0";
                ctx.fill();
                ctx.stroke();

                ctx.beginPath();
                ctx.lineWidth = "0.1";
                //ctx.strokeStyle = "black";
                ctx.ellipse(680,295,20,20,0,2*Math.PI,0)
                ctx.fillStyle = "fffdd0";
                ctx.fill();
                ctx.stroke();

                eggBody();
                eggYoke(mouseIsPressed);
                eggEyes(mouseIsPressed);
                eggMouth(mouseIsPressed);
                hamBody(mouseIsPressed);
                hamEyes(mouseIsPressed);
                hamMouth(mouseIsPressed);
        }
}

function mousePressed() {
    console.log(mouseX + ", " + mouseY, 20, 20);
}

function hamMouth(pressed) {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                if (mouseIsPressed) {
                        ctx.beginPath();
                        ctx.moveTo(160, 248);
                        ctx.lineTo(235, 269);
                        ctx.lineWidth = "2";
                        ctx.strokeStyle = "black";
                        ctx.stroke();
                }
                else {
                        ctx.beginPath();
                        ctx.arc(220, 233, 40, 0, Math.PI);
                        ctx.stroke();
                }
        }}//done

function hamEyes(pressed) {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                if (mouseIsPressed) {
                        ctx.beginPath();
                        ctx.lineWidth = "2"
                        ctx.strokeStyle = "black";
                        ctx.moveTo(218, 205);
                        ctx.bezierCurveTo(211, 218, 244, 226, 238, 203);
                        ctx.fillStyle = "white";
                        ctx.fill();
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.lineWidth = "2"
                        ctx.strokeStyle = "black";
                        ctx.moveTo(204, 205);
                        ctx.bezierCurveTo(222, 208, 232, 196, 250, 198);
                        ctx.fillStyle = "white";
                        ctx.fill();
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.lineWidth = "2"
                        ctx.strokeStyle = "black";
                        ctx.moveTo(145, 202);
                        ctx.bezierCurveTo(143, 221, 173, 223, 169, 207);
                        ctx.fillStyle = "white";
                        ctx.fill();
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.lineWidth = "2"
                        ctx.strokeStyle = "black";
                        ctx.moveTo(134, 200);
                        ctx.bezierCurveTo(148, 198, 162, 209, 179, 206);
                        ctx.fillStyle = "white";
                        ctx.fill();
                        ctx.stroke();
                }
                else {
                        ctx.beginPath();
                        ctx.ellipse(190,200,8,15,0,2*Math.PI,0);
                        ctx.fillStyle =  "white";
                        ctx.fill();
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.ellipse(250,200,8,15,0,2*Math.PI,0);
                        ctx.fillStyle =  "white";
                        ctx.fill();
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.ellipse(190,198,4,8,0,2*Math.PI,0);
                        ctx.fillStyle =  "black";
                        ctx.fill();
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.ellipse(249,198,4,8,0,2*Math.PI,0);
                        ctx.fillStyle =  "black";
                        ctx.fill();
                        ctx.stroke();
                }
        }}//done

function hamBody(pressed) {
        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                if (pressed) {
                ctx.beginPath();
                ctx.moveTo(182, 80);
                ctx.bezierCurveTo(400, 100, 347, 80, 570, 224);
                ctx.bezierCurveTo(667, 248, 753, 342, 383, 333);
                ctx.bezierCurveTo(272, 336, -84, 373, 182, 80);
                ctx.fillStyle = "#004d00";
                ctx.fill();
                ctx.stroke();
            }
                else {
                        ctx.beginPath();
                        ctx.moveTo(182, 80);
                        ctx.bezierCurveTo(400, 100, 347, 80, 570, 224);
                        ctx.bezierCurveTo(667, 248, 753, 342, 383, 333);
                        ctx.bezierCurveTo(272, 336, -84, 373, 182, 80);
                        ctx.fillStyle = "#552211";
                        ctx.fill();
                        ctx.stroke();
                }
        }
}// done

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
        }
}//done

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

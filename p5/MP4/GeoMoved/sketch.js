var num;
var distance;
var scale = 1000;
var locationData;

function preload() {
	locationData = getCurrentPosition();
}

function setup() {
	num = 0;
	intervalCurrentPosition(positionPing, 5000);
	createCanvas(displayWidth, displayHeight);
}

function draw() {


}

function positionPing(position) {
	textSize(24);
	num++;
	background(255);
	text("lat: " + position.latitude, 10, 40);
	text("long: " + position.longitude, 10, 90);
	text("number of updates " + num, 10, 140);

	distance = calcGeoDistance(locationData.latitude, locationData.longitude, position.latitude, position.longitude, 'mi');
	text("you have moved " + (distance * scale), 10, 190);
	YouMoved(distance * scale);


}

function YouMoved(distance) {
	if (distance > 20)
		text("okay yeah stop before you kill your self....", 10, 220);
	else if (distance > 15)
		text("Woow.. thats alot...", 10, 220);
	else if (distance > 10)
		text("nice!", 10, 220);
	else if (distance > 5)
		text("heeeyyy... nice your getting somewhere", 10, 220);
	else if (distance > 3)
		text("okay, okay.. but dont stop now... jeez", 10, 220);
	else if (distance > 1)
		text("ehh... you should probably keep going...", 10, 220);
	else if (distance > 0.5)
		text("Wow... congrats you moved...", 10, 220);
	else if (distance < 0.5)
		text("k... you are at your starting point...how about you try moving", 10, 220);
}

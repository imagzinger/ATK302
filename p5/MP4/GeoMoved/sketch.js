var num;
var distance;
var s = 1500;
var locationData;

function preload() {
	locationData = getCurrentPosition();
}

function setup() {
	num = 0;
	intervalCurrentPosition(positionPing, 10000);
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
	text("you have moved " + distance, 10, 190);
	YouMoved(distance);


}

function YouMoved(distance) {
	console.log(distance + " : " + (20 / 1500));
	if (distance > (20 / s))
		text("okay yeah stop before you hurt your self....", 10, 220);
	else if (distance > (15 / s))
		text("Woow.. thats alot...", 10, 220);
	else if (distance > (10 / s))
		text("nice!", 10, 220);
	else if (distance > (5 / s))
		text("heeeyyy... nice your getting somewhere", 10, 220);
	else if (distance > (3 / s))
		text("okay, okay.. but dont stop now... jeez", 10, 220);
	else if (distance > (1 / s))
		text("ehh... you should probably keep going...", 10, 220);
	else if (distance > (0.5 / s))
		text("Wow... congrats you moved...", 10, 220);
	else if (distance < (0.5 / s))
		text("k... you are at your starting point...how about you try moving", 10, 220);
}

var school = [];
var quarasch = [];
var quarantine = [];
var w = 800;
var h = 600;

function setup() {

	// Tabletop stuff, for getting google spreadsheet data in.
	let url = '1f2i1cRKZ1bA1-kY56MVRIcVSimKrqiA7uXfF4aB1eeg'; // this is KEY of the URL from the sheet
	let settings = {
		key: url, // The url of the published google sheet
		callback: gotData, // A callback for when the data comes in
		simpleSheet: true // This makes things simpler for just a single worksheet of rows
	};

	Tabletop.init(settings); // Grab the data from the spreadsheet!
	// End Tabletop initialization stuff


	// Regular setup code we usually have
	createCanvas(w, h);
	textAlign(CENTER);
	ellipseMode(CENTER);
	rectMode(CENTER);
	background('blue');
}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

	//console.log(data); // Print the data in the console

	// iterate through the array of data and create an object and push it on an array called school
	for (let i = 0; i < data.length; i++) {
		fill(0, 0, 0, 0);
		rect((w / 6), 340, -w / 3 * .9, -h * 5 / 6);
		school.push(new Circle(data[i].Name, data[i].school, i, 0));
		rect((w / 2), 340, -w / 3 * .9, -h * 5 / 6);
		quarasch.push(new Circle(data[i].Name, data[i].quarantineschool, i, 1));
		rect((5 * w / 6), 340, -w / 3 * .9, -h * 5 / 6);
		quarantine.push(new Circle(data[i].Name, data[i].quarantine, i, 2));

		fill(0);
		textSize(20);

		text("Boredom in School", w / 6, 80);
		text("Boredom in School Quarantine", w / 2, 80);
		text("Boredom in Quarantine", 5 * w / 6, 80);
	}

}

function draw() {
	//iterate through the school and display the objects!
	for (let i = 0; i < school.length; i++) {
		//console.log(i + " , " + school[i].name);
		//console.log(school[i].pos);
		school[i].display();
		quarasch[i].display();
		quarantine[i].display();
	}
}

function Circle(myName, myHeight, myWidth, offset) {
	this.size = 30;
	this.pos = createVector(this.size + (this.size * 1.5) * myWidth + w / 3 * offset, h - (this.size * myHeight) - this.size);
	this.name = myName;
	//this.shape = myShape;
	this.display = function() {
		// put an ellipse
		//console.log("displaying");

		fill(255);
		ellipse(this.pos.x, this.pos.y, this.size, this.size);
		fill(0);
		textSize(10);
		text(this.name, this.pos.x, this.pos.y);
		//console.log("done");
	}
}

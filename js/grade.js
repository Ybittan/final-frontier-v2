const request = require('request');

const files = [
  {filename: "Randomize6.wav", size: 65816, type: "audio/wav"},
  {filename: "403a8184.jpg", size: 1768988, type: "image/jpeg"},
  {filename: "benefits-for-humanity_third.pdf", size: 16801193, type: "application/pdf"},
  {filename: "BLUE_STEREO_3D_Time_for_Space_Wiggle.gif", size: 690793, type: "image/gif"},
  {filename: "ep93_space_medicine.mp3", size: 78200768, type: "audio/mpeg"},
  {filename: "index.css", size: 11, type: "text/css"},
  {filename: "index.html", size: 14, type: "text/html"},
  {filename: "index.js", size: 8, type: "text/js"},
  {filename: "JPL-20190213-MERf-0001.mp4", size: 42730221, type: "video/mp4"},
  {filename: "shuttle.svg", size: 13799, type: "application/octet-stream"},
  {filename: "nasa-282190.png", size: 21718, type: "image/png"},
  {filename: "TNG_Credits.ttf", size: 58796, type: "font/ttf"},
  {filename: "TNG_Credits.woff", size: 33968, type: "font/woff"}
]

var unableToRequest = [];
var unrecognizedTypes = [];
var wrongLengths = [];
var leftToCheck = files.length;

function checkForDone() {
  console.log(`${leftToCheck} to do`);
  leftToCheck -= 1;
  if(leftToCheck === 0) {
    console.log(`Serving from public folder: ${95 - 5 * unableToRequest.length} points`)
    console.log(`Unable to request ${unableToRequest.length} files:`);
    unableToRequest.forEach(function(name) {
      console.log(`\t${name}`);
    });
    console.log(`Content Types: ${210 - 15 * unrecognizedTypes.length} points`)
    console.log(`${unrecognizedTypes.length} unrecognized MIME types:`);
    unrecognizedTypes.forEach(function(name) {
      console.log(`\t${name}`);
    });
    console.log(`Content Length: ${95 - 5 * wrongLengths.length} points`)
    console.log(`${wrongLengths.length} incorrect content-lengths:`);
    wrongLengths.forEach(function(name) {
      console.log(`\t${name}`);
    });
    process.exit(0);
  }
}

files.forEach(function(file) {
  console.log(`requesting ${file.filename}`);
  request(`http://localhost:3000/assets/assets/${file.filename}`, function(err, res, body) {
    if(err) {
      console.error(`Unable to request ${file.filename}`);
      unableToRequest.push(file.filename);
      return;
    }

    // Check Content-Type
    if(res.headers["content-type"] !== file.type) {
      unrecognizedTypes.push(file.type);
    }

    // Check Content-Length
    if(parseInt(res.headers["content-length"],10) !== file.size) {
      wrongLengths.push(file.filename);
    }

    checkForDone();
  });
});

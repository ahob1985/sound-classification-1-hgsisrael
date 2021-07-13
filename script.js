// Author:

// Global UI Variables
let canvasDiv;
let canvas;
let textDiv;
let textP;
let textP2;

//Global ML Variables
let soundClassifier;

function setup() {
canvasDiv = createDiv();
canvas = createCanvas(640, 480);
textDiv = createDiv();
textP = createP("Model loading, please wait...");
textP.parent(textDiv);
textP2 = createP();
textP2.parent(textDiv);

let options = {
  probilitlyThreshold: 0.95
};
soundClassifier = ml5.soundClassifier("SpeechCommands18w", options, modelReady);
}

function draw() {
  let label = textP.html();
}

function modelReady() {
  textP.html("Model loaded. Say any of the commands below")
}

function gotResults(error, results) {
  if(error) {
    console.error(error);
  } else {
    // Complete the code below
    let label;
    let confidence;

  }
}

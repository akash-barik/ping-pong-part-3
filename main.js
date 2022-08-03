x="";
y="";

function setup(){
canvas=createCanvas(500,350);
canvas.parent('modal-body');
video=createCapture(VIDEO);
video.size(500,350);
video.hide();
}

function modelLoaded(){
    console.log("model is loaded");
    game.detect(video,gameapp);
}
























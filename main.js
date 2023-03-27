
status=""

function setup(){
    canvas=createCanvas(680,500);
    canvas.center()
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,680,500)
}

function start(){
 objectDetector=ml5.objectDetector('cocossd',modelloaded);
 document.getElementById("found").innerHTML="Status : Detecting Objects"
 inputbox=document.getElementById("typehere").value;

}

function modelloaded(){
console.log("modelloaded")
status=true
}
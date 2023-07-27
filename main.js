var left_wristX=0
var right_wristX=0
var noseX=0
var noseY=0
var distance=0;
function setup(){
    canvas=createCanvas(640,480)
    background("cyan")
    video=createCapture(VIDEO)
     poseNet=ml5.poseNet(video,listo);
     poseNet.on("pose",resultado);
}
function listo(){
    console.log("listisimo")
}
function resultado(e){
if(e.length>0){
 console.log(e)   
 var left_wristX=e[0].pose.leftWrist.x
var right_wristX=e[0].pose.rightWrist.x
distance=left_wristX-right_wristX
noseX=e[0].pose.nose.x
noseY=e[0].pose.nose.x
}
}
function preload(){
    perico=loadImage("perico.jpg")
}
function draw(){
    background("cyan")
    var mitad=distance/2
    image(perico,noseX-mitad,noseY-mitad,distance,distance)
}
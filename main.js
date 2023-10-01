nosex="";
nosey="";
function setup(){

    canvas=createCanvas(600,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initialised");
}
function take_snap(){
    save("yourimage.png");
}
function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    nosex=results[0].pose.nose.x-50;
    nosey=results[0].pose.nose.y+30;
    console.log(nosex,nosey);
}
}
function draw(){
    image(video,0,0,600,600);
    image(clown,nosex,nosey,60,60)
    // fill("#8B0000");
    // stroke("#8B0000");
    // circle(nosex,nosey,60);
}
function preload(){
    clown=loadImage("hitler.png")
}
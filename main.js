difference = 0;
rightWristX = 0;
leftWristX = 0

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background("#969A97");
}
function modelLoaded() {
    console.log("PoseNet Is Initialized");
}
function gotPoses() {
    if(results.length > 0) 
    {
        console.log(results);
    }
}
var leftWristX = 0;
var leftWristY = 0;

var rightWristX = 0;
var rightWristY = 0;

var scoreRightWrist = 0;
var scoreLefttWrist = 0;

var gameStatus

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoad);
    poseNet.on("pose", gotPose);
}

function gotPose(results) {
  if (results.length > 0) {
      console.log(results);
      
      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;

      scoreLefttWrist = results[0].pose.keypoints[9].score;
      scoreRightWrist = results[0].pose.keypoints[10].score;

      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
  }
}

function draw() {
    image(video, 0, 0, 500, 500);
    fill("#ed1405");
    stroke("#ed1405");
    if(scoreLefttWrist > 0){        
      circle(leftWristX,leftWristY,10);
        
        }
    
     if(scoreRightWrist > 0){ 
        circle(rightWristX,rightWristY,10);
     }
     if(gameStatus == "status") {

     }
    
}

function modelLoad() {
    console.log("model load!");
}


function Play() {
  gameStatus = "status"
  document.getElementById("status").innerHTML = "O jogo esta carregando"
}



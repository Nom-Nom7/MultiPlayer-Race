var hypnoticBall,database;
var position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";
    hypnoticBallposition = database.ref('Ball/Position');
    hypnoticBallposition.on("value",readPosition,showError);

}

function draw(){
    background("white");

    if(position !==  undefined){

    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }

    drawSprites();

    }
}

function writePosition(x,y) {
    
    database.ref('Ball/Position').set({

    'x':position.x+x,
    'y':position.y+y, 

    })  
    
}

function readPosition(data) {
   position = data.val();
   hypnoticBall.x = position.x;
   hypnoticBall.y = position.y;
}

function showError() {
    console.log("E");
}

var dog,happyDog;
var database;
var foodS, foodStock;
var foodS = 25;

function preload()
{
  dog = loadImage("images/doglmg.png");
  happyDog = loadImage("images/doglmg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  
  var foodStock = database.ref('Food');
    foodStock.on("value",readStock);
}


function draw() {  
backround(46,139,87);
 
 textSize(30);
 stroke(4);
 fill('white')
 text("Number of milk bottles left: "+ Score,900,50);
 
  }

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
}

  drawSprites();
  //add styles here

}

//Function to read values from database
function readStock(data){
   foodS=data.val();
}

//Function to write values in database
function writeStock(x){

    if(x<=0){
    x = 0;
    } else{
      x = x-1;
    }
  database.ref('/').update({
    Food:x 
  })
}
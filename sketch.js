var dog,sadDog,happyDog;
var bottle;

var feedBtn, addBtn;

var db;

var fs;

var milkBottle =[];

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");

  bottle = loadImage("Images/Milk.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feedBtn = createButton("Feed Dog");
  feedBtn.position(500,150);

  addBtn = createButton("Add Food");
  addBtn.position(600,150);

  db = firebase.database();

  db.ref("foodStock").on("value",function(data) {
     fs = data.val();
    
  });

  for(var i = 0; i < 200; i++)
  {
   milkBottle.push(createSprite(i+100,200,20,20));
   milkBottle[i].scale = 0.1;
   milkBottle[i].addImage(bottle);
  }
  

}

function draw() {
  background(46,139,87);
  
  addBtn.mousePressed(function() {
    fs +=1;
    
    db.ref("/").update({
      foodStock: fs
    })
  })

  feedBtn.mousePressed(function() {
    fs -=1;
    
    db.ref("/").update({
      foodStock: fs
    })
  })

  
  

   console.log(fs);

  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock

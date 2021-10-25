var gamestate="answer"

function preload(){
  i=loadImage("glass.jpg")
}
function setup() {
  createCanvas(1530,3000);
 Answers=new options()
 up=new Update()
 im=createSprite(80,1200,20,20)
 im.addImage(i)

}

function draw() {
  background("black");  
  code();
 
  Answers.display();
  questionFive()
  questionFour()
  questionOne()
  questionSix()
  questionThree()
  questionTwo()
  up.display()
 
  drawSprites();

  up.result();
  console.log(up.optimist+","+up.realist+","+up.pessimist)
 text("Click on the console for the results later",10,1600)
}
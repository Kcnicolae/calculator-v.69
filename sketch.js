var numone;
var numtwo;
var b1;
var b2;
var b3, b4;
var n1,n2;

function setup() {
  createCanvas(400, 400);
numone = createInput();
numone.position(5,60);
numtwo = createInput();
numtwo.position(200,60);

b1=createButton("add")
b1.position(10,200);
b1.mousePressed(add)

b2=createButton("multiply");
b2.position(100,200);
b2.mousePressed(multiply);

b3=createButton("subtract");
b3.position(190,200);
b3.mousePressed(sub);

b4=createButton("divide");
b4.position(280,200);
b4.mousePressed(division);

textAlign(CENTER);
textSize(25);
}

function draw() {
  background(0,250,200);
  text("number 1",70,50);
  text("number 2",270,50);
  n2=parseInt(numtwo.value());
  n1=parseInt(numone.value());
  if(b4.mousePressed(division)){
    division();
  }
  if(b3.mousePressed(sub)){
  sub();
  }
  if(b1.mousePressed(add)){
  add();
  }
  if(b4.mousePressed(multiply)){
  multiply();
  }
}


function add(){
console.log(n1+n2);
text(n1+n2,30,300)
}

function multiply(){
console.log(n1*n2);
text(n1*n2,120,300)
}

function sub(){
console.log(n1-n2);
text(n1-n2,210,300)
}

function division(){
console.log(n1/n2);
text(n1/n2,300,300);
}
let pi = 4;
let iterations = 0;
let block;
let history = [];
function setup() {
  createCanvas(600, 400);
  block = createDiv(pi).style('font-size','20pt');
  block.style('background','#FFFFFF');
}

function draw(){
  background(0);
  colorMode(HSB);
  let denominator = iterations*2+3;
  if(iterations%2 == 0){
    pi -= (4/denominator);
  }
  else{
    pi += (4/denominator);
  }
  history.push(pi);
  let piY = map(PI, 2,4,0,height);
  line(0,piY,width,piY);
  let spacing = width/history.length;
  stroke(255);
  noFill();
  beginShape();
  for(let i = 0; i<history.length; i++){
    let x = i*spacing;
    let y = map(history[i], 2,4,0,height);
    vertex(x,y);
  }
  endShape();
  block.html(pi);
  iterations++;
}
//Variáveis tipo let nomeDaVar;
let numDiv;
function setup() { //código que só corre uma vez

  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas


}

  function draw() {
    background(230, 181, 156);
  numDiv = 8;//map(mouseX,0,width,5,50);

    for (i = 0; i < numDiv-1; i++){
      for (j = 0; j <numDiv-1; j++){
        avatar((i+1)*width/numDiv,(j+1)*height/numDiv, 35);

      }
    }
  }

  function avatar(posX, posY, diam){
    //cara
    fill(207, 201, 198)
    ellipse(posX,posY,diam);
    //olhos
    fill(0,250,0)
    ellipse(posX-diam/4,posY-diam/5,diam/5);
    ellipse(posX+diam/4,posY-diam/5,diam/5);
     //olhos
    fill(0)
    ellipse(posX-diam/4,posY-diam/5,diam/9);
    ellipse(posX+diam/4,posY-diam/5,diam/9);
    //nariz
    fill(0,0,0)
    ellipse(posX+diam/20,posY-diam/80,diam/5);
    //boca
    fill(247, 135, 69)
    ellipse(posX+diam/40,posY+diam/4,diam/5);
      //orelhas
    fill(41, 39, 38)
    ellipse(posX-diam/4,posY-diam/2,diam/5);
    ellipse(posX+diam/4,posY-diam/2,diam/5);

  }

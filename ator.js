//código do ator
let xAtor = 25;
let yAtor = 366;
let colisao = false;

function moverAtor(){
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 4;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 4;
  }
  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 4;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 4;
  }
}

function colisaoAtorBordas(){
  yAtor = constrain(yAtor, 0, height - 30);
  xAtor = constrain(xAtor, 0, width - 30);
}

function naoVoltarAcostamento(){
  if(yAtor <= 334){
    yAtor = constrain(yAtor, 40, 330);
  }
}

function verificaColisao(){
  for(let i=0; i<imagensCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], 35, 35, xAtor, yAtor+30/2, 14);
    if(colisao){
      yAtor = 366;
      xAtor = 25
      xCarros = [650, 750, 850, 950, 1000];
      somColisao.play();
      return true;
    }
  }
  return false;
}
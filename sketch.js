let meusPontos = 0;
let ultimaPontuacao;

function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  image(ator, xAtor, yAtor, 30, 30);
  mostrarCarros();
  
  moverAtor();
  colisaoAtorBordas();
  naoVoltarAcostamento();
  
  movimentaCarros();
  voltarCarroAoInicio();
  
  let verifica = verificaColisao();
  if(verifica == true){
    ultimaPontuacao = meusPontos;
    voltarInicio();
  }
  mostrarPontos();
  salvarPonto();
}

function mostrarPontos() {
  textSize(25);
  textAlign(CENTER);
  
  fill(color(255, 0, 0));
  rect(255, 4, 85, 30);

  // Adicionando cor, sombra e ajustando posição do texto
  fill(255);
  textFont("Verdana");
  textStyle(BOLD);
  text(meusPontos, 297, 28);

  // Adicionando sombra ao texto
  fill(0, 50);  // Cor da sombra
  text(meusPontos, 298, 29);
}

function voltarInicio(){
  meusPontos = 0;
  for (let i = 0; i < xCarros.length; i++) {
    velocidadeCarros[i] = 3;
  }
}

function salvarPonto(){
  textSize(18);
  textAlign(CENTER);
  
  fill(color(178,34,34));
  rect(460, 4, 65, 20);

  // Adicionando cor, sombra e ajustando posição do texto
  fill(255);
  textFont("Verdana");
  textStyle(BOLD);
  text(ultimaPontuacao, 495, 23);

  // Adicionando sombra ao texto
  fill(0, 50);  // Cor da sombra
  text(ultimaPontuacao, 495, 23);
}








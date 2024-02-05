//imagens do jogo

let imagemEstrada;
let carro1;
let carro2;
let carro3;
let ator;
let imagensCarros = [];

let somDaTrila;
let somColisao;
let somPonto;

function preload(){
  imagemEstrada = loadImage("imgs/estrada.png");
  carro1 = loadImage("imgs/carro-1.png");
  carro2 = loadImage("imgs/carro-2.png");
  carro3 = loadImage("imgs/carro-3.png");
  ator = loadImage("imgs/ator-1.png");
  imagensCarros = [carro1, carro2, carro3, carro1, carro2];
  somDaTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}
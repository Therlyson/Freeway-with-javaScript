let xCarros = [650, 750, 850, 950, 1000];
let yCarros = [45, 150, 210, 270, 320];
let velocidadeCarros = [3, 3.5, 2, 3, 1];

function mostrarCarros(){
  for(let i = 0; i<imagensCarros.length; i++){
    image(imagensCarros[i], xCarros[i], yCarros[i], 35, 35);
  }
}

function movimentaCarros() {
  for (let i = 0; i < xCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltarCarroAoInicio() {
  for (let i = 0; i < xCarros.length; i++) {
    if (xCarros[i] < 0) {
      xCarros[i] = 650;
      yCarros[i] += 55;
      if (yCarros[i] > 350) {
        yCarros[i] = 45;
      }
      velocidadeCarros[i] += 0.2;
      meusPontos++;
      //somPonto.play();
    }
  }
}


//código sem listas
/*let xCarro1 = 650;
let yCarro1 = 45;
let yCarro2 = 150;
let xCarro2 = 750;
let yCarro3 = 320;
let xCarro3 = 850;

let velocidadeCarro1 = 2;
let velocidadeCarro2 = 3;
let velocidadeCarro3 = 3.5;

function movimentaCarros(){
  xCarro1 -= velocidadeCarro1;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
}

function voltarCarroAoInicio(){
  if(xCarro1 < -20){
    xCarro1 = 650;
    yCarro1 += 55;
    if(yCarro1 > 350){
      yCarro1 = 45;
    }
    velocidadeCarro1 += 0.2;
  }
  if(xCarro2 < -20){
    xCarro2 = 750;
    yCarro2 += 55;
    if(yCarro2 > 350){
      yCarro2 = 150;
    }
    velocidadeCarro2 += 0.2;
  }
  if(xCarro3 < -20){
    xCarro3 = 850;
    yCarro3 += 55;
    if(yCarro3 > 350){
      yCarro3 = 45;
    }
    velocidadeCarro3 += 0.2;
  }
}*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  jogo = new Jogo();
  jogo.setup();
  frameRate(40);
  telaInicial = new TelaInicial();
  cenas = {
    jogo,
    telaInicial
  }
  botaoGerenciador = new BotaoGerenciador('Iniciar',width/2,height/2);
}

function keyPressed() {
  jogo.keyPressed(key, keyCode)
}


function draw() {
  cenas[cenaAtual].draw();
}

function getRandomEnemy(){
  return parseInt(random(0,inimigos.length));
}

function gameOver() {
  jogo.gameOver()
}

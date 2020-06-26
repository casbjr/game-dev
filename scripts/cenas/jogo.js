class Jogo {
  constructor() {
    this.inimigoAtual = 0;
  }

  setup() {
    mode = 0;
    fimDeJogo = false;
    imagemTitulo = new Cenario(imagemTitulo, 0);
    imagemcenario1 = new Cenario(imagemcenario1, 0);
    imagemcenario2 = new Cenario(imagemcenario2, 0);
    imagemcenario3 = new Cenario(imagemcenario3, 0);
    imagemcenario4 = new Cenario(imagemcenario4, vCenario4);
    imagemcenario5 = new Cenario(imagemcenario5, vCenario5);
    imagemcenario6 = new Cenario(imagemcenario6, vCenario6);
    imagemcenario7 = new Cenario(imagemcenario7, vCenario7);
    imagemcenario8 = new Cenario(imagemcenario8, vCenario8);
    imagemcenario9 = new Cenario(imagemcenario9, vCenario9);
    pontuacao = new Pontuacao();
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 40, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 40, 100, 100, 175, 175, 10, 100);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100)
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width * 2, 40, 100, 150, 350, 550, 10, 100)

    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)
    somDoInicio.loop();
    somDoInicio.setVolume(0.3);

  }
  keyPressed(key, keyCode) {
    if (!fimDeJogo && (key === 'ArrowUp' || keyCode === 87)) {
      if (personagem.pula());
    } else if (fimDeJogo && key === 'Enter') {
      window.location.reload();
    }
    if (!fimDeJogo && (key === 'ArrowLeft' || keyCode === 65)) {
      personagem.atras();
    }
    if (!fimDeJogo && (key === 'ArrowRight' || keyCode === 68)) {
      personagem.frente();
    }
    if (mode == 0 && cenaAtual === 'jogo' && keyCode === 32) {
      mode = 1,
        somDoJogo.loop(),
        somDoJogo.setVolume(0.3, .1);
    }
  }
  draw() {
    clear();
    if (mode == 0) {
      somDoJogo.stop()
      //     imagemTitulo.exibe();
      imagemcenario1.exibe();
      imagemcenario2.exibe();
      imagemcenario3.exibe();
      imagemcenario4.exibe();
      imagemcenario5.exibe();
      imagemcenario6.exibe();
      //      image(seta,0, 0, 0);
      //      image(tecla,0,0);
      textAlign(CENTER)
      fill('#FFD700')
      textSize(20)
      text('Hipsta estava brincando com seus amigos no cemiterio,\n quando lembrou que havia deixado a panela de pressao no fogo.\n Agora ela deve correr antes que a panela exploda!\n\n\nutilize as setas do teclado para mover a personagem', width / 2, height / 2 - 200);
      textAlign(CENTER)
      textSize(35)
      textStyle(BOLD)
      text('pressione backspace para iniciar', width / 2, height / 2 + 50)
      //
      image(imagemSetas, width / 2 + 250, height / 2 - 300 / 2);
      image(imagemteclas, width / 2 - 450, height / 2 - 300 / 2);

      //
    }
    if (mode == 1) {
      somDoInicio.stop();
      imagemcenario1.exibe();
      imagemcenario2.exibe();
      imagemcenario3.exibe();
      imagemcenario4.exibe();
      imagemcenario5.exibe();
      imagemcenario6.exibe();
      imagemcenario7.exibe();
      imagemcenario8.exibe();
      imagemcenario9.exibe();
      imagemcenario4.move();
      imagemcenario5.move();
      imagemcenario6.move();
      imagemcenario7.movecapela();
      imagemcenario8.move();
      imagemcenario9.move();
      pontuacao.exibe()
      pontuacao.adicionaPonto()
      personagem.exibe();
      personagem.aplicaGravidade();

      const inimigo = inimigos[this.inimigoAtual];
      const inimigoVisivel = inimigo.x < -inimigo.largura;

      inimigo.exibe()
      inimigo.move()

      if (inimigoVisivel) {
        this.inimigoAtual = getRandomEnemy();
        inimigo.velocidade = parseInt(random(10, 30));
      }



      if (personagem.estaColidindo(inimigo)) {
        gameOver()
        noLoop()
      }

    }
  }
  gameOver() {
    background('rgba(0%,0%,0%,.80)');
    fill("fff");
    image(imagemGameOver, width / 2 - 412 / 2, height / 2 - 78 / 2);
    somDoJogo.stop()
    somMorreu.play();
    somMorreu.setVolume(0.1, 0.1)
    textAlign(CENTER)
    textSize(32);
    text("pressione ENTER para tentar novamente.", width / 2, height / 2 + 150)
    fimDeJogo = true;
  }
}

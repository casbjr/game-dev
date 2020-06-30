class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
    this.inimigoAtual = 0;
  }

  setup() {
    mode = 0;
    fimDeJogo = false;
    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)
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
    imagemFinal = new Cenario(imagemFinal, 0);
    pontuacao = new Pontuacao();
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 50, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 50, 100, 100, 175, 175, 10, 100);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 100)
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width * 2, 50, 100, 150, 350, 550, 10, 100)
    const inimigo2 = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 50, 100, 100, 175, 175, 10, 1000);
    const inimigoVoador2 = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 15000)
    const inimigoGrande2 = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width * 2, 50, 100, 150, 350, 550, 10, 2000)
    extra = new Extra(matrizChapeu, imagemVida, 100, 350, 75, 100, 500, 500);
    
    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)
    inimigos.push(inimigo2);
    inimigos.push(inimigoVoador2);
    inimigos.push(inimigoGrande2);
    somDoInicio.loop();
    somDoInicio.setVolume(0.3);

  }
  keyPressed(key, keyCode) {
    if (!fimDeJogo && ((keyIsDown(38)) || (keyIsDown(87)))) {
      if (personagem.pula());
    }
    if (fimDeJogo && key === 'Enter') {
      window.location.reload();
    }
    if (mode == 0 && cenaAtual === 'jogo' && keyIsPressed === true) {
      mode = 1,
        somDoJogo.setVolume(0.3, 0.1)//,
        somDoJogo.loop();
    }
  }
  draw() {
    clear();
    if (mode == 0) {
      somDoJogo.stop()
      imagemcenario1.exibe();
      imagemcenario2.exibe();
      imagemcenario3.exibe();
      imagemcenario4.exibe();
      imagemcenario5.exibe();
      imagemcenario6.exibe();
      textAlign(CENTER)
      fill('#ff7518')
      textFont(fonteTelaInicial);
      textSize(45)
      text('Uma feiticeira maligna transformou todos os habitantes\n de Alurownsville em monstros de Halloween. \n Ajude Hipsta a chegar em casa a tempo \nde criar uma magia para salvar a todos!', width / 2, height / 2 - 250);
      textAlign(CENTER)
      textSize(70)
      textStyle(BOLD)
      text('pressione qualquer tecla para iniciar', width / 2, height / 2 +30)
      textFont('Helvetica')
      textSize(15)
      fill("whitesmoke");
      text('← ↑ → ou "a", "w", "s" movem a personagem\npressione ↑↑ para dar saltos duplos\n\ncolete os chapéus no seu caminho, eles valem vidas extras', width / 2, height / 2 +200);

//      image(imagemSetas, width / 2 + 250, height / 2 - 300 / 2);
//      image(imagemteclas, width / 2 - 450, height / 2 - 300 / 2);
    }
    if (mode == 1) {
      if ((keyIsDown(37)) || (keyIsDown(65)))
        personagem.sideways(0);
      if ((keyIsDown(39)) || (keyIsDown(68)))
        personagem.sideways(1);

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
      vida.draw();
      textFont(fonteGO);
      pontuacao.exibe()
      pontuacao.adicionaPonto()
      
      extra.exibe();
      extra.move();
      
      if(personagem.estaColidindo(extra)){
        console.log('colidiu extra');  
        extra.remove()
        somColecionavel.setVolume(0.3);
        somColecionavel.play();
        vida.ganhaVida()
      
      }
      
      
      personagem.exibe();
      personagem.aplicaGravidade();
      const linhaAtual = this.mapa[this.indice];
      const inimigo = inimigos[this.inimigoAtual];
      const inimigoVisivel = inimigo.x < -inimigo.largura;
      inimigo.velocidade = linhaAtual.velocidade;

      inimigo.exibe()
      inimigo.move()  
      
     if (inimigoVisivel) {
      this.inimigoAtual++;
      if (this.inimigoAtual > 2) {
        this.inimigoAtual = 0;
      }
      inimigo.velocidade = parseInt(random(10, 30));
    }
    const inimigo2 = inimigos[3]; // poring 2
    const inimigoVisivel2 = inimigo2.x < -inimigo2.largura;

    inimigo2.velocidade = parseInt(random(5, 25));
    inimigo2.delay = 1000;
    inimigo2.exibe();
    inimigo2.move();

    const inimigo3 = inimigos[4]; // troll 2
    const inimigoVisivel3 = inimigo3.x < -inimigo3.largura;

    inimigo3.velocidade = parseInt(random(7, 15));
    inimigo3.delay = 5000;
    inimigo3.exibe();
    inimigo3.move();

    const inimigo4 = inimigos[5]; // voador 2
    const inimigoVisivel4 = inimigo4.x < -inimigo4.largura;

    inimigo4.velocidade = parseInt(random(5, 20));
    inimigo4.delay = 10000;
    inimigo4.exibe();
    inimigo4.move();

      if (personagem.estaColidindo(inimigo)) {
        vida.perdeVida();
        personagem.tornarInvencivel();
        somAtaque.setVolume(0.4);
        somAtaque.play();
        if (vida.vidas == 0) {
          vida.perdeVida();
          noLoop();
          pontuacao.exibe();
          gameOver();
        }
      }
       if (personagem.estaColidindo(inimigo2)) {
        vida.perdeVida();
        personagem.tornarInvencivel();
        somAtaque.setVolume(0.3);
        somAtaque.play();

      if (vida.vidas === 0) {
         vida.perdeVida();
          noLoop();
          pontuacao.exibe();
          gameOver();
      }
    }

    if (personagem.estaColidindo(inimigo3)) {
        vida.perdeVida();
        personagem.tornarInvencivel();
        somAtaque.setVolume(0.3);
        somAtaque.play();

      if (vida.vidas === 0) {
         vida.perdeVida();
          noLoop();
          pontuacao.exibe();
          gameOver();
      }
    }

    if (personagem.estaColidindo(inimigo4)) {
        vida.perdeVida();
        personagem.tornarInvencivel();
        somAtaque.setVolume(0.3);
        somAtaque.play();

      if (vida.vidas === 0) {
         vida.perdeVida();
          noLoop();
          pontuacao.exibe();
          gameOver();
      }
    }  

    }
   if (mode == 2) {  
    //venceu()
     noLoop();
    somDoJogo.stop();
    somAtaque.stop();     
    somMorreu.stop();
    background('rgba(0%,0%,0%,.80)');
    fill("whitesmoke");
    imagemFinal.exibe();
    somVenceu1.setVolume(0.35)
    somVenceu1.play();
    if(!somVenceu.isPlaying()){
      somVenceu.setVolume(0.2)
      somVenceu.play()} 
    textAlign(CENTER)
    textFont(fonteTelaInicial);
    textSize(50);
    text("Com a sua ajuda, Hipsta chegou em casa!\n Agora, ela pode salvar todos os seus amigos.", 0, height / 5 *2, width);
    text("Pressione 'ENTER' para jogar novamente.", width / 2, height / 5 * 3+30)    
    fimDeJogo = true;
 
   }

  }
  gameOver() {
    background('rgba(0%,0%,0%,.80)');
    fill("#ff7518");
///    image(imagemGameOver, width / 2 - 412 / 2, height / 2 - 78 / 2);
    somDoJogo.stop()
    somMorreu.setVolume(0.3, 0.1)
    somMorreu.play();
    textAlign(CENTER)
    textSize(50);
    textFont(fonteGO);
    text(`Hipsta fez ${parseInt(pontuacao.pontos)} pontos`, 0, height / 2 - 100, width);
    textFont(fonteTelaInicial);
    text("Pressione 'ENTER' para tentar novamente.", width / 2, height / 2 + 130)
    textFont(fonteGO);
    textSize(150);
    text("GAME OVER", width / 2, height / 2 +50)
    fimDeJogo = true;
  }

}
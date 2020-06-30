function preload() {
  /*** PRE JOGO ***/
  imagemTelaInicial = loadImage('imagens/cenario/telainicial.png');
  fonteTelaInicial = loadFont('imagens/assets/UnforgottenMore1.otf');
  fonteGO = loadFont('imagens/assets/doktermonstrowarpital.ttf');
  imagemTitulo = loadImage('imagens/cenario/Apresentacao1.png');
  imagemSetas = loadImage('imagens/assets/setas.png');
  imagemteclas = loadImage('imagens/assets/teclas.png');
 
  /*** CENARIOS PARALAX ***/
  imagemcenario1 = loadImage('imagens/cenario/cenario1/1.png');
  imagemcenario2 = loadImage('imagens/cenario/cenario1/2.png');
  imagemcenario3 = loadImage('imagens/cenario/cenario1/3.png');
  imagemcenario4 = loadImage('imagens/cenario/cenario1/4.png');
  imagemcenario5 = loadImage('imagens/cenario/cenario1/5.png');
  imagemcenario6 = loadImage('imagens/cenario/cenario1/6.png');
  imagemcenario7 = loadImage('imagens/cenario/cenario1/7.png');
  imagemcenario8 = loadImage('imagens/cenario/cenario1/8.png');
  imagemcenario9 = loadImage('imagens/cenario/cenario1/9.png');

  /*** CENARIOS FINALIZOU O GAME ***/
  imagemFinal = loadImage('imagens/cenario/bg_final.png');
 
  /*** HERO ***/
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');

  /*** INIMIGOS ***/
  imagemInimigo = loadImage('imagens/inimigos/jack.png');
  imagemInimigoGrande =
    loadImage('imagens/inimigos/mummy.png')
  imagemInimigoVoador =
    loadImage('imagens/inimigos/ghost.png')
 
  /*** JOGO ***/
  imagemVida = loadImage('imagens/assets/witch-hat.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  fita = loadJSON('fita/fita.json');

  /*** SONS ***/
  somDoInicio = loadSound('sons/church-bell.mp3');
  somDoJogo = loadSound('sons/true.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somMorreu = loadSound('sons/witch.mp3');
  somColecionavel = loadSound('sons/collectcoin.wav');
  somAtaque = loadSound('sons/do-you-hate-me.wav');
  somVenceu = loadSound('sons/crowd-cheer.wav');
  somVenceu1 = loadSound('sons/you_smart_you_loyal_long.mp3');
}
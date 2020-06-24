var mode;

const cenario1 = "imagens/cenario/teste/1.png";
const cenario2 = "imagens/cenario/teste/2.png";
const cenario3 = "imagens/cenario/teste/3.png";
const cenario4 = "imagens/cenario/teste/4.png";
const cenario5 = "imagens/cenario/teste/5.png";
const cenario6 = "imagens/cenario/teste/6.png";
const cenario7 = "imagens/cenario/teste/7.png";
const cenario8 = "imagens/cenario/teste/8.png";
const cenario9 = "imagens/cenario/teste/9.png";
const vCenario4 = 2;
const vCenario5 = 2;
const vCenario6 = 3.2;
const vCenario7 = 3;
const vCenario8 = 5;
const vCenario9 = 5.5;


let imagemCenario;
let imagemPersonagemInicio;
let imagemTituloInicio;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let fimDeJogo;

let somDoInicio;
let somDoJogo;
let somDoPulo;
let somMorreu;

let cenario;
let persongem;
let inimigo;
let pontuacao;

const matrizPersonagem = [
    [0,0],
    [220,0],
    [440,0],
    [660,0],
    [0,270],
    [220,270],
    [440,270],
    [660,270],
    [0,540],
    [220,540],
    [440,540],
    [660,540],    
    [0,810],
    [220,810],
    [440,810],
    [660,810]     
    ];
const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]
const matrizInimigoGrande = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]
const inimigos = []

function preload() {
imagemcenario1 = loadImage(cenario1);
imagemcenario2 = loadImage(cenario2);
imagemcenario3 = loadImage(cenario3);
imagemcenario4 = loadImage(cenario4);
imagemcenario5 = loadImage(cenario5);
imagemcenario6 = loadImage(cenario6);
imagemcenario7 = loadImage(cenario7);
imagemcenario8 = loadImage(cenario8);
imagemcenario9 = loadImage(cenario9);
  imagemTitulo = loadImage('imagens/cenario/Apresentacao1.png');  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemPersonagemInicio = loadImage('imagens/personagem/c00b_16victory_08.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = 
loadImage('imagens/inimigos/troll.png')
  imagemInimigoVoador = 
loadImage('imagens/inimigos/gotinha-voadora.png')
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  somDoInicio = loadSound('sons/inicial.mp3');
  somDoJogo = loadSound('sons/true.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  somMorreu = loadSound('sons/witch.mp3');
}    

function setup() {
  mode = 0;
  createCanvas(windowWidth, windowHeight);
  fimDeJogo = false;
  imgTitulo = new Cenario(imagemTitulo, 0)  
  cenarioFundo1 = new Cenario(imagemcenario1, 0)
  cenarioFundo2 = new Cenario(imagemcenario2, 0)
  cenarioFundo3 = new Cenario(imagemcenario3, 0)
  cenarioFundo4 = new Cenario(imagemcenario4, vCenario4)
  cenarioFundo5 = new Cenario(imagemcenario5, vCenario5)
  cenarioFundo6 = new Cenario(imagemcenario6, vCenario6)
  cenarioFundo7 = new Cenario(imagemcenario7, vCenario7)
  cenarioFundo8 = new Cenario(imagemcenario8, vCenario8)
  cenarioFundo9 = new Cenario(imagemcenario9, vCenario9)
  pontuacao = new Pontuacao()
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 40, 110, 135, 220, 270);
  personagemInicio = new Personagem([100,1020], imagemPersonagemInicio, 100, 400, 250, 250, 400, 400);
  const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 40, 52, 52, 104, 104, 10, 200);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 200, 100, 75, 200, 150, 10, 1500)
  const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width * 2, 20, 200, 200, 400, 400, 10, 2500)

  inimigos.push(inimigo)
  inimigos.push(inimigoGrande)
  inimigos.push(inimigoVoador)
  somDoInicio.loop();
  somDoInicio.setVolume(0.3);
    
  frameRate(40);
  
}

function keyPressed(){
  if(!fimDeJogo && key === 'ArrowUp'){
    if(personagem.pula());
  } else if(fimDeJogo && key === 'Enter'){
    window.location.reload();
  }
  if(!fimDeJogo && key === 'ArrowLeft'){
  personagem.atras();}
  if(!fimDeJogo && key === 'ArrowRight'){
  personagem.frente();    }
    if(mode == 0 && keyCode === 32){
      mode=1,   
      somDoJogo.loop(),
      somDoJogo.setVolume(0.3,.1);  
  }
}


function draw() {
  clear();
  if (mode==0){
    somDoJogo.stop()
 //   cenarioFundo1.exibe();
 //   cenarioFundo2.exibe(); 
 //   cenarioFundo3.exibe();
 //   cenarioFundo4.exibe();  
 //   cenarioFundo5.exibe();  
 //   cenarioFundo9.exibe();  
    imgTitulo.exibe();
    textAlign(CENTER)
    fill('#smokewhite')
    textSize(20)
    text('Lorem ipsum dolor sit amet consectetur adipisicing elit.\nEarum quidem atque architecto, odit doloremque consectetur vero!\nAut fugit neque sequi id non rerum facilis incidunt explicabo. \n\nOfficia beatae vitae laudantium!', width / 2, height/2-25);
    textAlign(CENTER)
    textSize(35)
    textStyle(BOLD)
    text('Pressione Backspace para começar', width / 2, height/2+150)};
   // personagemInicio.exibe();
    if (mode==1){
  somDoInicio.stop();
  cenarioFundo1.exibe();
  cenarioFundo2.exibe(); 
  cenarioFundo3.exibe();
  cenarioFundo4.exibe();  
  cenarioFundo5.exibe();  
  cenarioFundo6.exibe();  
  cenarioFundo7.exibe();  
  cenarioFundo8.exibe();  
  cenarioFundo9.exibe();  
  cenarioFundo4.move();  
  cenarioFundo5.move();  
  cenarioFundo6.move();  
  cenarioFundo7.movecapela();  
  cenarioFundo8.move();  
  cenarioFundo9.move();  
  pontuacao.exibe()
  pontuacao.adicionaPonto()
  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigos.forEach(inimigo => {
    inimigo.exibe()
    inimigo.move()
    
    if(personagem.estaColidindo(inimigo)){
    gameOver()
    noLoop()
      }
    
    })
  }
}

function gameOver() {  
  background('rgba(0%,0%,0%,.80)');
  fill("fff");
  image(imagemGameOver, width / 2 - 412 / 2, height / 2 - 78 / 2);
  somDoJogo.stop()
  somMorreu.play();
  somMorreu.setVolume(0.1,0.1)  
  textAlign(CENTER)
  textSize(32);
  text("Pressione ENTER para tentar novamente.", width / 2, height/2+150 )   
  fimDeJogo = true;
}
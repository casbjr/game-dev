var mode;

let imagemcenario1;
let imagemcenario2;
let imagemcenario3;
let imagemcenario4;
let imagemcenario5;
let imagemcenario6;
let imagemcenario7;
let imagemcenario8;
let imagemcenario9;
let setas;
let teclas;

const vCenario4 = 1;
const vCenario5 = 2;
const vCenario6 = 3.2;
const vCenario7 = 3.8;
const vCenario8 = 5;
const vCenario9 = 5.5;

let imagemCenario;
let imagemPersonagemInicio;
let imagemTituloInicio;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;
let FonteTelaInicial;
let imagemTelaInicial;
let imagemGameOver;

let jogo
let cenaAtual = 'telaInicial';
let cenas;
let telaInicial;
let fimDeJogo;
let botaoGerenciador;

let cenario;
let personagem;
let inimigo;
let pontuacao;

let somDoInicio;
let somDoJogo;
let somDoPulo;
let somMorreu;

const matrizPersonagem = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810]
];
const matrizInimigo = [
  [0,0],
  [175,0],
  [0,175],
  [175,175],
  [0,350],
  [175,350],
  [0,525],
  [175,525],]
const matrizInimigoGrande =  [
  [0,    0],
  [350,  0],
  [700,  0],
  [1050, 0],
  [1400, 0],
  [1750, 0],
  [0,   550],
  [350, 550],
  [700, 550],
  [1050, 550],
  [1400, 550],
  [1750, 550],  
  [0,   1100],
  [350, 1100],
  [700, 1100],
  [1050, 1100],
  [1400, 1100],
  [1750, 1100], 
  [0,   1650],
  [350, 1650],
  [700, 1650],
  [1050, 1650]
]
const matrizInimigoVoador = [
  [0, 0],
  [241, 0],
  [468, 0],
  [709, 0]
]
const inimigos = []
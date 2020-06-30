class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, somPulo) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.somPulo = somDoPulo;

    this.variacaoY = variacaoY
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.qntPulos = 2;
    this.invencivel = false;
  }

  pula() {
    if (this.qntPulos > 0) {
      this.velocidadeDoPulo = -31
      this.qntPulos--;
      this.somPulo.play();

    }
  }
  sideways(direcao) {
    if (direcao === 1) { //direita
      if (this.x < windowWidth-this.largura) {
        this.x += 10;
      }
    }
    else if (direcao === 0) //esquerda
      if (this.x > 0) {
        this.x -= 10;
      }
  }
    exibe() {  
//    console.log(this.frameAtual);
    if (this.invencivel) {
      if (this.frameAtual % 4 === 0) {
      image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);      
      }
    } else {
      image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
    }    
    this.anima();
  }  

  aplicaGravidade() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.qntPulos = 2;

    }
  }
  tornarInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    },1000)
  }
  estaColidindo(inimigo) {
    if(this.invencivel){
      return false
    }
    noFill()
/***TESTE DE PRECISAO DE COLISAO***/    
//    circle(this.x+60, this.y+(this.y/7.5), this.largura*0.85, this.altura*0.85);
//    circle(inimigo.x+60, inimigo.y+(inimigo.y/7.5), inimigo.largura * 0.85, inimigo.altura * 0.85);
    const precisao = 0.85
    const colisao = collideRectRect(
      this.x+60,
      this.y+(this.y/7.5),
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x+60,
      inimigo.y+(inimigo.y/7.5),
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    return colisao;

  }

}
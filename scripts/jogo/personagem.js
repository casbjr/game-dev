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
  }

  pula() {
    if (this.qntPulos > 0) {
      this.velocidadeDoPulo = -31
      this.qntPulos--;
      this.somPulo.play();

    }
  }

  frente() {
    this.xInicial = this.x
    this.x += 20;
    if (this.x > windowWidth - 85) {
      this.x = this.xInicial
    }
  }

  atras() {
    this.xInicial = this.x
    this.x -= 20;
    if (this.x >= this.xInicial * 3) {
      this.x = this.xInicial
    }
  }


  aplicaGravidade() {
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade;

    if (this.y > this.yInicial) {
      this.y = this.yInicial;
      this.qntPulos = 2;

    }
  }

  estaColidindo(inimigo) {
    noFill()
    const precisao = .65
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    return colisao;

  }

}
class Extra extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz,imagem,x, variacaoY, largura,altura, larguraSprite, alturaSprite)
    
    this.y = height - this.altura - this.variacaoY;
    this.velocidade = 5;
  }

  move(){
//   this.x = this.x - this.velocidade 
    this.x = this.x - this.velocidade
    
    if(this.x < -(this.largura*10)){
      this.x = width}
  }
  
  remove() {
    this.x = -100;
  }
  
  aparece(){
      this.x = width;
  }
}
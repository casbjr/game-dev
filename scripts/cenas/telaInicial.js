class TelaInicial {
  constructor() {}

  draw() {
    this._background();
    this._text();
    this._botao();
  }
  _background() {
    image(imagemTelaInicial, 0, 0, width, height);
  }
  _text() {
    textFont(fonteTelaInicial);
    textAlign(CENTER);
    fill('#ff7518')
    textSize(175);
    text('Corra, Hipsta!', width / 2, height / 5 * 2);
  }
  _botao() {
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
}
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
    textSize(50);
    text('As aventuras de', width / 2, height / 3);
    textSize(150);
    text('Hipstar', width / 2, height / 5 * 3);
  }
  _botao() {
    botaoGerenciador.y = height / 7 * 5;
    botaoGerenciador.draw();
  }
}
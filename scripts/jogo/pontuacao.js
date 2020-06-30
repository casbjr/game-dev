class Pontuacao {
  constructor() {
    this.pontos = 0
  }

  exibe() {
    textAlign(RIGHT)
    fill('#ff7518')
    textSize(50)
    text(parseInt(this.pontos), width - 30, 50)
  }

  adicionaPonto() {
    this.pontos = this.pontos + 0.2
    if (mode == 1 && cenaAtual === 'jogo' && this.pontos >1500) {
      mode = 2
    }
  }
}
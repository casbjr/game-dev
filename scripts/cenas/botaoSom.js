class BotaoSom {
    constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton(this.texto);
    this.botao.mousePressed(togglePlaying);
    this.botao.addClass('botao-som');
    }
  draw() {
    this.botao.position(this.x, this.y);
    this.botao.center('horizontal');
  }
  togglePlaying() {
  if(!somMorreu.isPlaying()) {
    somMorreu.play();
    masterVolume(0.3,0.1);
    button.html("pause")
  } else {
    song.pause()
    button.html("play")
  }
}
}
  
  
/*  
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.botao = createButton ('play')
    this.botao.mousePressed(_togglePlaying);
    this.botao.addClass('botao-som');
  }
  draw() {
    this.botao.position(this.x, this.y);
    this.botao.center('center');
  }
  _togglePlaying() {
  if(!somMorreu.isPlaying()) {
    somMorreu.play();
    masterVolume(0.3,0.1);
    button.html("pause")
  } else {
    song.pause()
    button.html("play")
  }
}
}

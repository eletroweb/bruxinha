this.matriz = [
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
      [660, 810],
    ] 

    exibe(){
  let x = this.frameAtual % 4 * this.tamX;
  let y = Math.floor(this.frameAtual / 4) * this.tamY;
  
  image(this.imagem, 0, height- this.alturaPersonagem, this.larguraPersonagem, this.alturaPersonagem, x, y, this.tamX, this.tamY); 
  this.anima();
}
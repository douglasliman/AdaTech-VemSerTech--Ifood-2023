class Retangulo {
constructor(largura,altura ){
  this.largura = largura
  this.altura =altura
}


calcularArea(){
    return this.largura *this.altura;
}
}

const areaRet = new Retangulo(10,10)
console.log(areaRet.calcularArea())
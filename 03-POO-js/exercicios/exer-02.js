

class Dragao {
    constructor(nome, cor, elemento, saude) {
        this.nome = nome;
        this.cor = cor;
        this.elemento = elemento;
        this.saude = saude;
    }

    voar() {
        console.log(`${this.nome} está voando!`)
    }
    cuspirFogo() {
        console.log(`${this.nome} está esprayando fogo!`);
    }

    comer() {
        if (this.saude + 10 > 100) {
            return `O ${this.nome} já está cheio!`;
        } else {
            this.saude += 10;
            return `${this.nome} comeu um prato delicioso e agora tem ${this.saude}% de vida.`
        }
    }

}
const dragao1 = new Dragao('Dragão Vermelho', 'Vermelho Escuro', 'Fogo', 100);
dragao1.voar();
dragao1.cuspirFogo();
console.log(dragao1.comer());



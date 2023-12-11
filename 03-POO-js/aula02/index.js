const pessoa = {
    nome: "Mario",
    idade: 24,
    alterarIdade: function (novaIdade){
        this.idade = novaIdade;
    },
    apresentar: function(){
        console.log(`Olá eu sou ${this.nome} e tenho ${this.idade} de idade;`)
    }
}

// pessoa.apresentar();
// pessoa.alterarIdade(20)
// pessoa.apresentar();

class Pessoa {

    
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar = () => {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

const pessoa1 = new Pessoa("João", 25);


class PessoaDeNovo {

    
    constructor(nome, idade, genero) {
      this.nome = nome;
      this.idade = idade;
      this.genero = genero;
    }
  
    apresentar = () => {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos e meu genero é ${this.genero}.`);
    };

    alterarIdade = (novaIdade)=> {
        this.idade = novaIdade;
    }
}

const elo = new PessoaDeNovo("Roger", 24, "neutre")

elo.apresentar();
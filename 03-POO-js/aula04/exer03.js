const pessoa = {
    nome: 'João',
    idade: 25,
    mostrarInformacoes: function() {
      return `Nome do aluno é ${this.nome} e tem ${this.idade} anos.`
    }
  };
  
console.log(pessoa.mostrarInformacoes());

//Crie uma classe ExploradorOceanoProfundo com atributos como nome, submarino e descobertas submarinas. Implemente métodos para mergulhar(), coletarAmostras() e estudarCriaturasMarinhas()

class ExploradorOceanoProfundo {
    constructor(nome, submarino) {
      this.nome = nome;
      this.submarino = submarino;
      this.descobertasSubmarinas = new Map();
    }
  
    mergulhar() {
      console.log(`${this.nome} está mergulhando nas profundezas do oceano com o submarino ${this.submarino}.`);
    }
  
    coletarAmostras(localizacao, tipo) {
      const amostra = { localizacao, tipo };
      this.descobertasSubmarinas.set(localizacao, amostra);
      console.log(`${this.nome} coletou uma amostra ${tipo} em ${localizacao} usando o submarino ${this.submarino}.`);
    }
  
    estudarCriaturasMarinhas() {
      console.log(`${this.nome} está estudando criaturas marinhas nas descobertas submarinas.`);
      this.descobertasSubmarinas.forEach((descoberta, index) => {
        console.log(`Descoberta ${index + 1} - Localização: ${descoberta.localizacao}`);
        console.log(`Tipo da amostra: ${descoberta.tipo}`);
      });
    }
  }

  const explorador = new ExploradorOceanoProfundo("Capitã Náutica", "Submarino Azul");

  explorador.mergulhar();
  explorador.coletarAmostras("Fossa das Marianas", "rocha");
  explorador.coletarAmostras("Recife de Coral", "coral");
  
  explorador.estudarCriaturasMarinhas();

class NaveEspacial {
    constructor(nome, velocidadeMaxima, capacidadeTripulacao) {
      this.nome = nome;
      this.velocidadeMaxima = velocidadeMaxima;
      this.capacidadeTripulacao = capacidadeTripulacao;
      this.tripulantes = [];
      this.velocidadeAtual = 0;
    }
    acelerar() {
      if (this.velocidadeAtual < this.velocidadeMaxima) {
        this.velocidadeAtual += 10;
        console.log(`${this.nome} acelerou para ${this.velocidadeAtual} perk/s.`);
      } else {
        console.log(`${this.nome} já está na velocidade máxima de ${this.velocidadeMaxima} km/h.`);
      }
    }
  
    adicionarTripulante(nomeTripulante) {
      if (this.tripulantes.length < this.capacidadeTripulacao) {
        this.tripulantes.push(nomeTripulante);
        console.log(`${nomeTripulante} foi adicionado à tripulação de ${this.nome}.`);
      } else {
        console.log(`A tripulação de ${this.nome} está completa. Não é possível adicionar mais tripulantes.`);
      }
    }
  }
  
  // Exemplo de uso:
  const minhaNave = new NaveEspacial('Voyager', 50000, 10);
  
  minhaNave.acelerar(); // Acelera para 10 km/h
  minhaNave.adicionarTripulante('Comandante Shepard');
  minhaNave.adicionarTripulante('Tenente Kaidan Alenko');
  minhaNave.acelerar(); // Acelera para 20 km/h
  minhaNave.adicionarTripulante('Garrus Vakarian');
  
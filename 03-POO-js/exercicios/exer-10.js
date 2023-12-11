class SorveteriaMagica {
    constructor() {
      this.sabores = [];
      this.varinhasMagicas = [];
    }
  
    criarSorveteMagico(sabor, topping) {
      const novoSorvete = { sabor, topping };
      this.sabores.push(novoSorvete);
      console.log(`Novo sorvete mágico de ${sabor} com topping de ${topping} criado.`);
    }
  
    realizarFeiticosGelados(varinhaMagica, tipo) {
      if (this.varinhasMagicas.includes(varinhaMagica)) {
        console.log(`Já estamos usando a varinha mágica ${varinhaMagica}. Espere até terminarmos o feitiço atual.`);
      } else {
        this.varinhasMagicas.push(varinhaMagica);
        console.log(`Usando a varinha mágica ${varinhaMagica} para realizar feitiços gelados.`);
        console.log("Abracadabra! ✨❄️");
       
        console.log("Feitiço gelado concluído!");
        const saborAleatorio = this.sabores[Math.floor(Math.random() * this.sabores.length)];
        console.log(`Sorvete de ${saborAleatorio.sabor} com topping de ${saborAleatorio.topping} está pronto! Aproveite.`);
 
        this.varinhasMagicas.pop();
      }
    }
  }
  const sorveteria = new SorveteriaMagica();

sorveteria.criarSorveteMagico("Chocolate", "Granulado");
sorveteria.criarSorveteMagico("Morango", "Calda de Framboesa");

sorveteria.realizarFeiticosGelados("Varinha Estelar", "Criação");
sorveteria.realizarFeiticosGelados("Varinha do Gelo", "Transformação");

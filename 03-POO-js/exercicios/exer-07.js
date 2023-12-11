/*
🏰 Exercício 7: Construtor de Castelos
Projete uma classe ConstrutorCastelos com atributos como 
nome, estilo arquitetônico e materiais usados. Implemente métodos
 para construirTorre() e adicionarAposentos() em js
*/

class ConstrutorCastelos {
    constructor(nome, estiloArquitetonico) {
        this.nome = nome;
        this.estiloArquitetonico = estiloArquitetonico;
        this.materiaisUsados = [];
        this.torresConstruidas = 0;
        this.aposentosAdicionados = 0;
    }

    construirTorre(tipo, altura) {
        this.torresConstruidas++;
        console.log(`Construindo uma torre do tipo ${tipo} com altura de ${altura} metros no castelo ${this.nome}.`);
    }

    adicionarAposentos(quantidade) {
        this.aposentosAdicionados += quantidade;
        console.log(`${quantidade} aposentos adicionados ao castelo ${this.nome}.`);
    }
}


const casteloFantasia = new ConstrutorCastelos("Castelo da Fantasia", "Gótico");

casteloFantasia.construirTorre("Principal", 30);
casteloFantasia.construirTorre("Canto", 15);

casteloFantasia.adicionarAposentos(10);

console.log(`Número total de torres construídas: ${casteloFantasia.torresConstruidas}`);
console.log(`Número total de aposentos adicionados: ${casteloFantasia.aposentosAdicionados}`);

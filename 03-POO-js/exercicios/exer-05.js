class Restaurante {
    constructor(nome, culinaria) {
        this.nome = nome;
        this.culinaria = culinaria;
        this.pratos = [];
    }
    adicionarPratos(...novosPratos) {
        novosPratos.forEach((novoPrato) => {
            this.pratos.push(novoPrato);
        });
    }
    removerPratos(...indices) {
        indices.forEach((index) => {
            this.pratos.splice(index, 1);
        });
    }
    receberPedido() {
        const indiceAleatorio = Math.floor(Math.random() * this.pratos.length);
        return this.pratos[indiceAleatorio];
    }
}


const restauranteItaliano = new Restaurante("Pizzeria da Maria", "pizza");
restauranteItaliano.adicionarPratos(
    { nome: "Margherita", preco: 20.99 },
    { nome: "Quattro Formaggi", preco: 24.99 },
    { nome: "Pepperoni", preco: 22.99 }
);

console.log("Menu atual do", restauranteItaliano.nome);
console.log(restauranteItaliano.pratos);


restauranteItaliano.removerPratos(1); 


console.log("Menu atualizado do", restauranteItaliano.nome);
console.log(restauranteItaliano.pratos);

const pedidoAleatorio = restauranteItaliano.receberPedido();
console.log("Pedido aleatório recebido:", pedidoAleatorio);


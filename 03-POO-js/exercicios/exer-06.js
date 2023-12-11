/*
🚀 Exercício 6: Clube de Astronomia
Crie uma classe ClubeAstronomia com atributos 
como nome, local e membros. Desenvolva métodos para 
realizarObservacao() e organizarEventosEstelares().
em js
*/

class ClubeAstronomia {
    constructor(nome, local) {
        this.nome = nome;
        this.local = local;
        this.membros = [];
    }

    realizarObservacao(novoMembro, objetoCeleste) {
        if (this.membros.includes(novoMembro)) {
            console.log(`O usuário ${novoMembro} já é um membro do clube.`);
        } else {
            this.membros.push(novoMembro);
            console.log(`${novoMembro} foi adicionado ao clube como novo membro!`);
        }
        console.log(`Iniciando observação da estrela ${objetoCeleste}.`);
    }

    organizarEventosEstelares() {
        const eventos = ["Supernova", "Explosão Estelar", "Trânsito de Planeta"];
        return `Os próximos eventos astronômicos serão: ${eventos[0]}, ${eventos[1]} e ${eventos[2]} respectivamente.`;
    }
}

const clube = new ClubeAstronomia("Clube Astronáutico", "Cidade das Estrelas");

clube.realizarObservacao("João", "Vênus");
clube.realizarObservacao("Mariana", "Júpiter");

console.log(clube.membros);

clube.realizarObservacao("Pedro", "Saturno");

console.log(clube.organizarEventosEstelares());

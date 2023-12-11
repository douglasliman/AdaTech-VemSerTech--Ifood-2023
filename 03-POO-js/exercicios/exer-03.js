class ConsoleRetro {
    constructor(nome, anoLancamento) {
        this.nome = nome;
        this.anoLancamento = anoLancamento;
        this.jogosDisponiveis = [];
    }

    adicionarJogo(nomeJogo) {
        this.jogosDisponiveis.push(nomeJogo);
        console.log(`O jogo "${nomeJogo}" foi adicionado ao ${this.nome}.`);
    }

    jogar(nomeJogo) {
        if (this.jogosDisponiveis.includes(nomeJogo)) {
            console.log(`Jogando o jogo "${nomeJogo}" no ${this.nome}. Divirta-se!`);
        } else {
            console.log(`Desculpe, o jogo "${nomeJogo}" não está disponível no ${this.nome}.`);
        }
    }
}

// Exemplo de uso:
const consoleRetro = new ConsoleRetro('RetroPlay', 1990);

consoleRetro.adicionarJogo('Super Mario Bros');
consoleRetro.adicionarJogo('Tartarugas Ninjas');
consoleRetro.adicionarJogo('Dokey Kong');

consoleRetro.jogar('Super Mario Bros');


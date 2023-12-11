class ParqueEcologico {
    constructor(nome, localizacao) {
        this.nome = nome;
        this.localizacao = localizacao;
        this.fauna = [];
        this.flora = [];
    }

    addEspecie(tipo, especie) {
        const especies = tipo === "Fauna" ? this.fauna : (tipo === "Flora" ? this.flora : null);

        if (especies) {
            // Verificar se a espécie já existe
            if (!especies.some(e => e.especie === especie)) {
                especies.push({ especie });
                console.log(`Espécie ${especie} adicionada ao Parque Ecológico.`);
            } else {
                console.log(`A espécie ${especie} já existe no Parque Ecológico.`);
            }
        } else {
            console.log("Tipo inválido");
        }
    }

    organizarTourVirtual() {
        let apresentacao = `Olá! Eu sou o guia do Tour Virtual do ${this.nome}!\n\n`;
        apresentacao += `Nós estamos em ${this.localizacao}. Aqui você poderá ver ${this.fauna.length} espécie(s) de Fauna e ${this.flora.length} espécie(s) de Flora.\n`;

        for (const tipo of ["Fauna", "Flora"]) {
            const especies = tipo === "Fauna" ? this.fauna : this.flora;
            for (const especieObj of especies) {
                apresentacao += `\nA espécie ${especieObj.especie} é encontrada aqui no Parque Ecológico.`;
            }
        }

        return apresentacao + "\n\nFim da apresentação.";
    }
}

// Exemplo de uso:
const jardimNatural = new ParqueEcologico("Jardim Natural", "Rio de Janeiro");
jardimNatural.addEspecie("Fauna", "Rosa mais rosa");
jardimNatural.addEspecie("Flora", "Rosa simples");
jardimNatural.addEspecie("Fauna", "Dente de Leão");
console.log(jardimNatural.organizarTourVirtual());

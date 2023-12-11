class EstudioArteDigital {
    constructor(nome) {
        this.nome = nome;
        this.equipamentos = [];
        this.obrasDeArte = [];
    }

    criarArteDigital(artista, titulo, estilo) {
        const novaObra = { artista, titulo, estilo };
        this.obrasDeArte.push(novaObra);
        console.log(`Nova obra de arte digital criada por ${artista} no estúdio ${this.nome}.`);
    }

    exporObras() {
        console.log(`Obras de arte digital no estúdio ${this.nome}:`);
        this.obrasDeArte.forEach((obra, index) => {
            console.log(`${index + 1}. Artista: ${obra.artista}, Título: ${obra.titulo}, Estilo: ${obra.estilo}`);
        });
    }
}


const estudioArteDigital = new EstudioArteDigital("PixelArts");

estudioArteDigital.criarArteDigital("Sophia", "Abstração Luminosa", "Abstrato");
estudioArteDigital.criarArteDigital("Gabriel", "Retrato Digital", "Realismo");

estudioArteDigital.exporObras();

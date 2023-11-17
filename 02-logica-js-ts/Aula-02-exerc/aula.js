matriz.forEach((item1, index1) => {
    console.log(matriz[index1]);
    console.log(item1);
    item1.forEach((item2, index2) => {
      console.log({
        item2,
        index2,
      });
    });
  });


  // pra setar valor é +- assim
  let meuMapa = new Map();
meuMapa.set('chave1', 'valor1');
/*
Crie um vetor (array) chamado vetor1 com valores de coordenadas x e outro 
vetor vetor2 com valores de coordenadas y. Calcule o produto escalar (produto interno) 
desses dois vetores usando a fórmula matemática do produto escalar.

*/
let vetor1 = [2, 3]
let vetor2 = [4, 5]

let produtoEscalar = 0;

if (vetor1.length === vetor2.length) {
    for (let i = 0; i < vetor1.length; i++) {
      produtoEscalar += vetor1[i] * vetor2[i];
    }
  
    console.log("O produto escalar é: " + produtoEscalar);
  } else {
    console.log("Os vetores não têm o mesmo tamanho, o produto escalar não pode ser calculado.");
  }
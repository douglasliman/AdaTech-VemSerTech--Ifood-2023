/*

Temos uma lista de pessoas com seus respectivos nomes, alturas e pesos:



Crie um função que receba a função a seguir e mostre no console o valor do calculo do IMC da pessoa.

exemplo: `O IMC é Carlos é 40`

Sendo que o IMC é calculado pela fórmula `peso / altura²`.
*/
const pessoas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
]
function calcularIMC(pessoa) {
  const imc = pessoa.peso / Math.pow(pessoa.altura, 2);
  return imc;
}
function exibirIMC(nome, imc) {
  console.log(`O IMC de ${nome} é ${imc.toFixed(2)}`);
}

for (const pessoa of pessoas) {
  const imc = calcularIMC(pessoa);
  exibirIMC(pessoa.nome, imc);
}

console.log(pessoa.peso)
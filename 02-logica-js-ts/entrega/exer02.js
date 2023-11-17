const empregados = [
    { nome: 'João', salario: 1200 },
    { nome: 'Maria', salario: 1500 },
    { nome: 'Pedro', salario: 1800 },
    { nome: 'Ana', salario: 1400 },
    { nome: 'Carlos', salario: 2000 }
  ];
  
  function findEmployBtSalary(salario, comparacao, mensagem) {
    for (const empregado of empregados) {
      if (comparacao(empregado.salario, salario)) {
        console.log(`Pelo menos um empregado com ${mensagem}: ${empregado.nome}`);
        return;
      }
    }
    console.log(`Nenhum empregado com ${mensagem} encontrado.`);
  }
  
  findEmployBtSalary(1500, (salario, referencia) => salario >= referencia, 'salário maior ou igual a R$ 1.500,00');
  findEmployBtSalary(1000, (salario, referencia) => salario <= referencia, 'salário menor ou igual a R$ 1.000,00');
  
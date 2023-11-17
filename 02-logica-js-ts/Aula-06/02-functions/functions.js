
// ===========================Funções em Variáveis=====================

function teste(a, b) {
    return a + b;
  }
  console.log(teste(1, 2));
  // Arrow Function
  const multiplicar = (a, b) => {
    return a * b;
  };
  const nome = "teste";
  const empty = (arr) => (arr.length ? "Nao esta vazio" : "vazio");
  console.log(multiplicar(2, 3));
  
  function isEmpty(arr) {
    if (arr.length) {
      return "Nao esta vazio";
    } else {
      return "vazio";
    }
  }

// ================Funções em Variáveis=========================

  const saudacao = function (nome, sobrenome, idade, profissao) {
    console.log(`Olá, ${nome}, ${sobrenome}, ${idade}, ${profissao}!`);
  };
  
  saudacao("Maria", "Silva", 23, "enfermeira");
  
  //-------------- n importa a ordem ---------------
  saudacao({
    sobrenome: "Cabral",
    idade: 36,
    nome: "Bruno",
    profissao: "Professor",
  });
  

// ================ Função Autoexecutável =========================

(function (pessoa, numero) {
    console.log(
      `Olá, nome:${pessoa.nome}, sobrenome:${pessoa.sobrenome}, idade:${pessoa.idade}, profissao:${pessoa.profissao}!`
    );
  })(
    {
      sobrenome: "Cabral",
      idade: 36,
      nome: "Bruno",
      profissao: "Professor",
    },
    20
  );

(function (palavra) {
    const mensagem = "Olá, mundo!";
    console.log(palavra, mensagem);
  })("Aula");
// ================ Função Recursiva =========================



function calcularFatorial(n) {
    if (n === 0) {
      return 1;
    }
  
    return n * calcularFatorial(n - 1);
  }

  const resultado = calcularFatorial(10); // 5! = 5 * 4 * 3 * 2 * 1 = 120

console.log(resultado)


function calcularFatorial(n) {
    console.log(n);
    if (n === 0) {
      return 1;
    }
    //primeira volta -> 5 * calcularFatorial(4) = 5 * 24
    //segunda volta -> 4 * calcularFatorial(3) = 4 * 6
    //terceira volta -> 3 * calcularFatorial(2) = 3 * 2
    //quarta volta -> 2 * calcularFatorial(1) = 2 * 1
    //quinta volta -> 1
    return n * calcularFatorial(n - 1);
  }
  
  const resultado1 = calcularFatorial(5);
  console.log(resultado1);

// ================ Funções Encadeadas =========================

function somar(a, b) {
    return a + b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    return a / b;
  }
  
  const resultado3 = dividir(multiplicar(somar(2, 3), 4), 2);
  console.log(resultado); // Output: 10


  // ================ CallBacks =========================
  function somar(a, b) {
    return a + b;
  }
  
  function double(callback, n1, n2) {
    return callback(n1, n2) * 2;
  }
  
  console.log(double(somar, 10, 20))
  

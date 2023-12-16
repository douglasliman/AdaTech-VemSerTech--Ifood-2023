class Conta {
    #saldo = 0;
    #cliente;
  
    constructor(cliente) {
      this.#cliente = cliente;
    }
  
    consultarSaldo() {
      return this.#saldo;
    }
  
    realizarOperacao(valor) {
      if (this.podeRealizarOperacao(valor)) {
        this.#saldo += valor;
        return true;
      } else {
        return false;
      }
    }
  
    realizarSaque(valor) {
      const novoSaldo = this.#saldo - valor;
      if (novoSaldo >= 0) {
        this.#saldo = novoSaldo;
        return true;
      } else {
        throw new Error("Saldo insuficiente");
      }
    }
  
    getCliente() {
      return this.#cliente.getNomeCompleto();
    }
  
    
    podeRealizarOperacao(valor) {
      throw new Error("Método não implementado");
    }
  }
  
  class ContaCorrente extends Conta {
    podeRealizarOperacao(valor) {
      return valor > 0;
    }
  }
  
  class ContaPoupanca extends Conta {
    static taxaDeJurosDiario = 1;
  
    podeRealizarOperacao(valor) {
      return valor <= 0;
    }
  
    calcularTaxaDeJuros(dias) {
      return dias * ContaPoupanca.taxaDeJurosDiario;
    }
  
    depositarComJuros(valor, dias) {
      super.realizarOperacao(valor);
      let juros = this.calcularTaxaDeJuros(dias);
      this.realizarOperacao(juros);
    }
  }
  
  class Cliente {
    nome;
    sobrenome;
    idade;
    cpf;
    contas = [];
  
    constructor(nome, sobrenome, idade, cpf) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.idade = idade;
      this.cpf = cpf;
    }
  
    getNomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    }
  
    criarConta(tipo) {
      const novaConta =
        tipo === "corrente"
          ? new ContaCorrente(this)
          : new ContaPoupanca(this);
      this.contas.push(novaConta);
      return novaConta;
    }

    listarContas() {
        return this.contas.map((conta, index) => {
          return `Conta ${index + 1}: ${conta instanceof ContaCorrente ? 'Corrente' : 'Poupança'}`;
        });
      }
  }
  
  class Transacao {
    constructor(cliente, conta, valor, dataHora) {
      this.cliente = cliente;
      this.conta = conta;
      this.valor = valor;
      this.dataHora = dataHora || new Date();
    }
  
    getNomeCompletoDoClienteDaConta() {
      return this.cliente.getNomeCompleto();
    }
  }
  
  class HistoricoDeTransacoes {
    transacoes = [];
  
    adicionarTransacao(transacao) {
      this.transacoes.push(transacao);
    }
  
    listarTransacoes() {
      return this.transacoes;
    }
  }
  const cliente1 = new Cliente("João", "Silva", 30, "123.456.789-00");
const cliente2 = new Cliente("Maria", "Souza", 25, "987.654.321-00");

const contaJoao = cliente1.criarConta("corrente");
const contaMaria = cliente2.criarConta("poupanca");

contaJoao.realizarOperacao(1000);
contaMaria.realizarOperacao(500);

console.log(`Saldo de ${cliente1.getNomeCompleto()}: ${contaJoao.consultarSaldo()}`);
console.log(`Saldo de ${cliente2.getNomeCompleto()}: ${contaMaria.consultarSaldo()}`);

const transacao1 = new Transacao(cliente1, contaJoao, 200, new Date());
const transacao2 = new Transacao(cliente2, contaMaria, 50, new Date());

console.log(`Transação de ${transacao1.getNomeCompletoDoClienteDaConta()} na conta de ${transacao1.conta.getCliente()}: ${transacao1.valor} `);
console.log(`Transação de ${transacao2.getNomeCompletoDoClienteDaConta()} na conta de ${transacao2.conta.getCliente()}: ${transacao2.valor}`);

const historicoTransacoes = new HistoricoDeTransacoes();
historicoTransacoes.adicionarTransacao(transacao1);
historicoTransacoes.adicionarTransacao(transacao2);

console.log('Histórico de Transações:');
console.log(historicoTransacoes.listarTransacoes());

console.log('Contas de João:', cliente1.listarContas());
console.log('Contas de Maria:', cliente2.listarContas());
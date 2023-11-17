
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100)+1;
}

function jogoAdivinhacao() {
    
    const numeroParaAdivinhar = gerarNumeroAleatorio();

    
    let tentativas = 0;

    
    function iniciarJogo() {
        
        while (true) {
            
            const respostaUsuario = prompt('Adivinhe o número entre 0 e 100:');

            tentativas++;
            
            if (respostaUsuario === null) {
                alert('Insira um número.');
            } else {
                const palpite = respostaUsuario;

                
                if (palpite === numeroParaAdivinhar) {
                    alert(`Parabéns! Você acertou o número em ${tentativas} tentativas.`);
                    break;
                } else if (palpite < numeroParaAdivinhar) {
                    alert(`O número é maior que  ${palpite} .`);
                } else {
                    alert(`O número é menor que ${palpite}.`);
                }
            }
        }
    }

    
    iniciarJogo();
}


jogoAdivinhacao();

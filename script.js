alert('Bem vindo ao Adivinha Aí!');
alert('Você tem 10 tentativas para acertar o número misterioso');

//Função para gerar um numero aleatório
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

//Função principal do jogo
function jogar (){
    let chute 
    const tentativasMax = 10;
    let tentativas = 0;
    const numeroAleatorio = gerarNumeroAleatorio();
    let acertou = false;

    //loop principal do jogo
//Enquanto o chute não for igual ao número ou acabar as chances
while(tentativas < tentativasMax && !acertou) {
    chute = parseInt(prompt('Digite seu palpite (entre 1 e 100):'), 10);

    //verificação para saber se o chute é um número válido
    if (isNaN(chute) || chute < 1 || chute > 100) {
        alert('Por favor, insira um número válido entre 1 e 100.');
        continue; // Pular o restante do loop e pedir outro palpite
    }
    tentativas++; // contador de tentativas

    //Verificação de chute
    if (chute === numeroAleatorio) {
        alert(`Parabéns! Você acertou! O número misterioso é ${numeroAleatorio}.`);
        acertou = true; // Marca como acertou
    } else if (chute > numeroAleatorio) {
        alert(`${chute} é muito alto sio!`);
    } else {
        alert(`${chute} é muito baixo sio!`);
    }
}
    // Mensagem de término do jogo
    if (!acertou) {
        alert(`Você perdeu! O número misterioso era ${numeroAleatorio}.`);
    }

    // Pergunta se o jogador deseja jogar novamente
    const jogarNovamente = prompt('Deseja jogar novamente? (sim/não)').toLowerCase();
    if (jogarNovamente === 'sim') {
        jogar(); // Reinicia o jogo
    }

}

// Inicia o jogo
jogar();

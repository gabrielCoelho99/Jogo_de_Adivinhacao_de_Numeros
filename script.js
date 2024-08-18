alert ('Bem vindo ao Adivinha Aí!');
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
}
//Enquanto o chute não for igual ao número ou acabar as chances
while(chute != numeroAleatorio) {
    chute = parseInt(prompt('Digite seu palpite (entre 1 e 100):'), 10);
    //Se o chute for igual ao número misterioso
    if (chute == numeroAleatorio) {
        alert(`Isso ai! Você acertou! O número misterioso é ${numeroAleatorio}`);
    } else {
        if (chute > numeroAleatorio) {
            alert(`${chute} é muito alto sio!`)
        } else {
            alert(`${chute} é muito baixo sio!`)
        }
    }

}
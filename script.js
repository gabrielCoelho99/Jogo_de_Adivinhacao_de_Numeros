alert ('Bem vindo ao Adivinha Aí!');
alert('Você tem 10 tentativas para acertar o número misterioso');

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let chute = prompt('Chute seu número entre 1 e 100');

//Se o chute for igual ao número misterioso
if (numeroAleatorio == chute){
    alert(`Isso ai! Você acertou! O número misterioso é ${numeroAleatorio}`);
} else {
    alert(`Você errou! Tente novamente!`)
}
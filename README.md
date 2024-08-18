# Jogo_de_Adivinhacao_de_Numeros
Bem-vindo ao projeto "Adivinha Aí"! Esse desafio é uma implementação de um algoritmo de busca binária (ou "busca por divisão"). Este é um jogo simples onde o jogador tem que adivinhar um número aleatório entre 1 e 100. O jogador tem 10 tentativas para acertar o número misterioso. Se acertar, ganha o jogo; se não, o jogo revela o número e termina, claro, tendo a opção de tentar novamente hehe.

## Funcionalidades

- **Geração de Número Aleatório**: O jogo gera um número aleatório entre 1 e 100 que o jogador deve adivinhar.
- **Tentativas**: O jogador tem até 10 tentativas para acertar o número.
- **Validação de Entrada**: O jogo verifica se a entrada do jogador está dentro do intervalo permitido (1 a 100) e se é um número válido.
- **Feedback**: O jogo fornece feedback se o palpite é muito alto ou muito baixo.
- **Reinício**: Após o fim do jogo, o jogador pode optar por jogar novamente.

## Como Funciona

1. **Início do Jogo**: Quando o jogo começa, o jogador é saudado e informado sobre o número de tentativas disponíveis.
2. **Palpites**: O jogador insere palpites através de uma caixa de entrada.
3. **Verificação**: Cada palpite é verificado:
   - Se o palpite for correto, o jogador recebe uma mensagem de vitória.
   - Se o palpite for muito alto ou baixo, o jogador recebe um feedback apropriado.
4. **Tentativas**: O número de tentativas é contado. Se o jogador exaurir as 10 tentativas sem acertar, o número misterioso é revelado.
5. **Reinício**: O jogo pergunta ao jogador se deseja jogar novamente após terminar.

## Código

O código é escrito em JavaScript e é projetado para ser executado em um navegador. Aqui está um resumo do que cada parte faz:

- **`gerarNumeroAleatorio()`**: Função que gera um número aleatório entre 1 e 100.
- **`jogar()`**: Função principal que controla o fluxo do jogo, incluindo a entrada do jogador, verificação de tentativas e mensagens de feedback.
- **Mensagens e Feedback**: Usamos `alert` e `prompt` para interagir com o jogador, dando instruções e recebendo respostas.

## Como Executar

Para experimentar o jogo, você pode acessar a versão online do projeto no seguinte link: [Jogo de Adivinhação](https://gabrielcoelho99.github.io/Jogo_de_Adivinhacao_de_Numeros/).

Se você quiser executar o código localmente:

1. Copie o código fornecido.
2. Cole-o em um arquivo HTML ou em um ambiente que suporte execução de JavaScript no navegador.
3. Abra o arquivo no navegador para jogar.

## Exemplo de Código

Aqui está um exemplo simplificado de como o jogo é iniciado:

```javascript
alert('Bem vindo ao Adivinha Aí!');
alert('Você tem 10 tentativas para acertar o número misterioso');

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

function jogar() {
    // Código do jogo
}

jogar();

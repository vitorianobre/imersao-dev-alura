var numeroSecreto = parseInt(Math.random() * 11);
var numeroTentativas = 2;

function Chutar() {
    let chute = parseInt(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let tentativas = document.getElementById('tentativas');

    // Verificação do chute
    if (chute == numeroSecreto) { // Chute correto
        resultado.innerHTML = "Você acertou!";
    } else if (chute > 10 || chute < 0) { // Chute inválido
        resultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else { // Chute incorreto
        // Verifica se ainda há tentativas restantes
        if (numeroTentativas > 0) {
            tentativas.innerHTML = `Tentativas: ${numeroTentativas}`;
            numeroTentativas--;

            // Verifica se o chute é maior ou menor que o número secreto
            if (chute > numeroSecreto) {
                resultado.innerHTML = `Você errou! O número secreto é menor que ${chute}.`;
            } else {
                resultado.innerHTML = `Você errou! O número secreto é maior que ${chute}.`;
            }
        } else {
            // Quando não houver mais tentativas
            tentativas.innerHTML = `Tentativas: 0`;
            resultado.innerHTML = `Você perdeu! O número secreto é: ${numeroSecreto}`;
        }
    }
    document.getElementById('valor').value = "";
}
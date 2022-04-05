function calculaNota() {
    // Recebendo valores
    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);
    let nota3 = Number(document.getElementById('nota3').value);
    let nota4 = Number(document.getElementById('nota4').value);

    // Calculando média
    let media = ((nota1+nota2+nota3+nota4)/4).toFixed(1);

    // Resultado final
    let resultado = document.getElementById('resultado');

   
    if (media >= 7) {
        resultado.innerHTML = `<p>Sua média é: ${media}<br>Você foi APROVADO!<br>Parabéns!</p>`
    } else {
        resultado.innerHTML = `<p>Sua média é: ${media}<br>Você foi REPROVADO!<br>Estude um pouco mais.</p>`
    }
}
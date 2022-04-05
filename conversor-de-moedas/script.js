function ConverterEmDolar() {
    let valorElemento = document.getElementById('valor');
    let valor = valorElemento.value;
    let valorEmDolarNumerico = parseFloat(valor);

    let valorEmReal = valorEmDolarNumerico * 5.12;
    
    let elementoValorConvertido = document.getElementById('valorConvertido')
    let valorConvertido = "O resultado em real é R$ " + valorEmReal.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEmEuro() {
    let valorElemento = document.getElementById('valor');
    let valor = valorElemento.value;
    let valorEmEuroNumerico = parseFloat(valor);

    let valorEmReal = valorEmEuroNumerico * 5.63;
    
    let elementoValorConvertido = document.getElementById('valorConvertido')
    let valorConvertido = "O resultado em real é R$ " + valorEmReal.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEmBitcoin() {
    let valorElemento = document.getElementById('valor');
    let valor = valorElemento.value;
    let valorEmBitcoinNumerico = parseFloat(valor);

    let valorEmReal = valorEmBitcoinNumerico * 205999.78;
    
    let elementoValorConvertido = document.getElementById('valorConvertido')
    let valorConvertido = "O resultado em real é R$ " + valorEmReal.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
}
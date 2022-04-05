var cartas = [
    {
        nome: "Bulbasauro",
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        atributos: {
            ataque: 7,
            defesa: 8,
            magia: 6
        }
    },
    {
        nome: "Darth Vader",
        imagem: "https://images-na.ssl-images-amazon.com/images/I/41i-0NH0q9L._SX328_BO1,204,203,200_.jpg",
        atributos: {
            ataque: 9,
            defesa: 8,
            magia: 2
        }
    },
    {
        nome: "Shiryu de dragão",
        imagem: "https://cdn.awsli.com.br/600x450/1206/1206083/produto/129234498/a00db1a45c.jpg",
        atributos: {
            ataque: 5,
            defesa: 9,
            magia: 10
        }
    }
];

var cartaMaquina, cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random()*3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random()*3);
    
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random()*3);
    }

    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    var elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = "";
    var divCartaMaquina = document.getElementById('carta-maquina');
    divCartaMaquina.style.backgroundImage = "";
    divCartaMaquina.innerHTML = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

    exibirCartaJogador();
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName('atributo');
    for (let i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById('resultado');
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    
    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "<p class='resultado-final'>Venceu</p>";
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "<p class='resultado-final'>Perdeu</p>";
    } else {
        elementoResultado.innerHTML = "<p class='resultado-final'>Empatou</p>";
    }

    document.getElementById('btnJogar').disabled = true;
    document.getElementById('btnSortear').disabled = false;

    exibirCartaMaquina();
}

function exibirCartaJogador() {
    var divCartaJogador = document.getElementById('carta-jogador');
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""
    for (let atributo in cartaJogador.atributos) {
        opcoesTexto += `<input type='radio' name='atributo' value='${atributo}'> ` + atributo + ` ${cartaJogador.atributos[atributo]}<br>`;
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById('carta-maquina');
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>"

    var opcoesTexto = ""
    for (let atributo in cartaMaquina.atributos) {
        opcoesTexto += `<p> ` + atributo + ` ${cartaMaquina.atributos[atributo]}<p>`;
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
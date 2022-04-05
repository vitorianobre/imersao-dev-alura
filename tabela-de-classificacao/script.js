// Definindo jogadores
var joao = {
    nome: "João",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos:0
};

var maria = {
    nome: "Maria",
    vitorias: 1,
    empates: 1,
    derrotas: 2,
    pontos:0
};

var pedro = {
    nome: "Pedro",
    vitorias: 1,
    empates: 1,
    derrotas: 2,
    pontos:0
};

// Criando lista de jogadores
var jogadores = [joao, maria, pedro];

// Calcular pontos
function calculaPontos(jogador){
    let pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

// Adicionando jogadores no HTML
function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (let i = 0; i < jogadores.length; i++) {
        elemento += `<tr>
            <td>${jogadores[i].nome}</td>
            <td>${jogadores[i].vitorias}</td>
            <td>${jogadores[i].empates}</td>
            <td>${jogadores[i].derrotas}</td>
            <td>${jogadores[i].pontos}</td>
            <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
            <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
        </tr>`
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

// Incrementa vitória e calcula a pontuação
function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

// Incrementa empate e calcula a pontuação
function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
}

// Incrementa derrota
function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadoresNaTela(jogadores);
}

// Adicionar novo jogador
function adicionarJogador(){
    let novoJogador = {
        nome: document.getElementById('nomeJogador').value,
        vitorias: parseInt(document.getElementById('vitoriasJogador').value),
        empates: parseInt(document.getElementById('empatesJogador').value),
        derrotas: parseInt(document.getElementById('derrotasJogador').value)
    };
    novoJogador.pontos = calculaPontos(novoJogador);
    jogadores.push(novoJogador);
    exibeJogadoresNaTela(jogadores);

    // Limpando campos
    document.getElementById('nomeJogador').value = "";
    document.getElementById('vitoriasJogador').value = "";
    document.getElementById('empatesJogador').value = "";
    document.getElementById('derrotasJogador').value = "";
}

// Calculando pontos dos jogadores
for(let indice = 0; indice < jogadores.length; indice++){
    jogadores[indice].pontos = calculaPontos(jogadores[indice]);
}

exibeJogadoresNaTela(jogadores)

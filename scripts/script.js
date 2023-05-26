// 0 = Livre | 1 = Parede | 2 = Espinhos


// Constante da tabela no html do jogo
const elemento = document.getElementById("Dungeons")

// Dimensões do mapa

// Estado do jogo
var GameOver = false
var morte = false
var contadorMorte = 0
var faseOver = false

// Controladores
var controle = "frente"
var movendo = false
var acao = false


// Array dos objetos do jogo
var chave = [10]
var botao
var armadilhaChao = [13]
var portal

var contador = 1

iniciarJogo()


function construirMapa1(fase)
{
    // Destroi toda a fase anterior do jogo
    if (document.getElementById("Mapa") != null) {
        var removerElementos = document.getElementById("Mapa")
        removerElementos.parentNode.removeChild(removerElementos)
    }

    switch (fase) {
        case 1:
            elemento.appendChild(document.createElement("tbody")).setAttribute("id", "Mapa")
            var elementos = document.getElementById("Mapa")
            dimensaoMapa = 15
            var mapa = []
                // Esqueleto da parte Lógica
                for (let i = 0; i < dimensaoMapa; i++) {
                    mapa[i] = []
                    for (let j = 0; j < dimensaoMapa; j++) {
                        mapa[i].push(0)
                    }
                    
                }
                // Construção da parte Lógica (Paredes, espinhos e etc)
                for (let i = 0; i < dimensaoMapa; i++) {
                    mapa[i][0] = 1
                    mapa[i][dimensaoMapa-1] = 1
                    mapa[0][i] = 1
                    mapa[dimensaoMapa-1][i] = 1
                }
                // Construção da renderização
                for (let i = 0; i < dimensaoMapa; i++) {
                    elementos.appendChild(document.createElement("tr")).setAttribute("id", i)
                    for (let j = 0; j < dimensaoMapa; j++) {
                        document.getElementById(i).appendChild(document.createElement("td")).setAttribute("id", `${i}-${j}`)
                        if (mapa[i][j] == 1) {
                            document.getElementById(`${i}-${j}`).textContent = '*'
                        }
                    }
                }

            return mapa
            
    
        case 2:
            elemento.appendChild(document.createElement("tbody")).setAttribute("id", "Mapa")
            var elementos = document.getElementById("Mapa")
            dimensaoMapa = 30
            var mapa = []
                // Esqueleto da parte Lógica
                for (let i = 0; i < dimensaoMapa; i++) {
                    mapa[i] = []
                    for (let j = 0; j < dimensaoMapa; j++) {
                        mapa[i].push(0)
                    }
                    
                }
                // Construção da parte Lógica (Paredes, espinhos e etc)
                for (let i = 0; i < dimensaoMapa; i++) {
                    //Paredes
                    mapa[i][0] = 1
                    mapa[i][dimensaoMapa-1] = 1
                    mapa[0][i] = 1
                    mapa[dimensaoMapa-1][i] = 1
                    if (i <= 8) {
                        mapa[i][21] = 1
                        mapa[i][8] = 1
                        mapa[8][29-i] = 1
                        mapa[8][8-i] = 1
                    }

                    //Espinhos
                    mapa[10][10] = 2
                    mapa[12][12] = 2
                    mapa[7][5] = 2
                    mapa[8][12] = 2
                    mapa[11][24] = 2
                    mapa[6][26] = 2
                    mapa[4][24] = 2
                    mapa[15][6] = 2
                    mapa[19][15] = 2
                    mapa[2][12] = 2

                }
                // Construção da renderização
                for (let i = 0; i < dimensaoMapa; i++) {
                    elementos.appendChild(document.createElement("tr")).setAttribute("id", i)
                    for (let j = 0; j < dimensaoMapa; j++) {
                        document.getElementById(i).appendChild(document.createElement("td")).setAttribute("id", `${i}-${j}`)
                        if (mapa[i][j] == 1) {
                            document.getElementById(`${i}-${j}`).textContent = '*'
                        }
                        if (mapa[i][j] == 2) {
                            document.getElementById(`${i}-${j}`).textContent = '#'
                        }
                    }
                }
            return mapa

        case 3:
            elemento.appendChild(document.createElement("tbody")).setAttribute("id", "Mapa")
            var elementos = document.getElementById("Mapa")
            dimensaoMapa = 45
            var mapa = []
            // Esqueleto da parte Lógica
            for (let i = 0; i < dimensaoMapa; i++) {
                mapa[i] = []
                for (let j = 0; j < dimensaoMapa; j++) {
                    mapa[i].push(0)
                }
                
            }
            // Construção da parte Lógica (Paredes, espinhos e etc)
            for (let i = 0; i < dimensaoMapa; i++) {
                //Paredes
                mapa[i][0] = 1
                mapa[i][dimensaoMapa-1] = 1
                mapa[0][i] = 1
                mapa[dimensaoMapa-1][i] = 1

                //Espinhos
                mapa[40][29] = 2
                mapa[41][29] = 2
                mapa[42][29] = 2
                mapa[43][29] = 2
                
                mapa[39][7] = 2
                mapa[40][5] = 2
                mapa[41][3] = 2
                mapa[41][16] = 2
                mapa[39][22] = 2
                mapa[42][22] = 2
                mapa[32][40] = 2
                mapa[33][39] = 2
                mapa[32][42] = 2
                mapa[33][43] = 2
                mapa[33][42] = 2

                mapa[33][33] = 2
                mapa[35][35] = 2
                mapa[33][23] = 2
                mapa[35][27] = 2

                mapa[35][19] = 2
                mapa[37][24] = 2
                mapa[33][12] = 2
                mapa[35][11] = 2

                mapa[29][10] = 2
                mapa[27][8] = 2
                mapa[23][11] = 2
                mapa[20][09] = 2
                mapa[18][11] = 2

                mapa[15][8] = 2
                mapa[13][11] = 2
                mapa[13][7] = 2
                mapa[9][12] = 2
                mapa[11][14] = 2
                mapa[7][17] = 2
                mapa[8][22] = 2
                mapa[11][26] = 2
                mapa[9][30] = 2
                mapa[16][34] = 2
                
                mapa[18][35] = 2
                mapa[23][36] = 2
                mapa[21][31] = 2
                mapa[27][33] = 2
                mapa[29][30] = 2
                mapa[26][23] = 2

                mapa[4][25] = 2
                mapa[2][31] = 2
                mapa[8][40] = 2
                mapa[12][42] = 2
                mapa[21][42] = 2
                mapa[17][3] = 2

                mapa[13][2] = 2
                mapa[17][5] = 2
                mapa[25][2] = 2
                mapa[31][3] = 2
                mapa[35][5] = 2
                mapa[8][4] = 2



                if (i < 37) {
                    mapa[38][43-i] = 1
                    mapa[37-i][6] = 1
                }
                if (i < 33) {
                    mapa[6][6+i] = 1
                }
                if (i<27) {
                    mapa[32][38-i] = 1 
                    mapa[6+i][38] = 1
                }
                if (i<21) {
                    mapa[32-i][12] = 1
                    mapa[12][12+i] = 1
                    mapa[17][32-i] = 1
                }
                if (i<14) {
                    mapa[26-i][32] = 1
                }
        


            }
            // Construção da renderização
            for (let i = 0; i < dimensaoMapa; i++) {
                elementos.appendChild(document.createElement("tr")).setAttribute("id", i)
                for (let j = 0; j < dimensaoMapa; j++) {
                    document.getElementById(i).appendChild(document.createElement("td")).setAttribute("id", `${i}-${j}`)
                    if (mapa[i][j] == 1) {
                        document.getElementById(`${i}-${j}`).textContent = '*'
                    }
                    if (mapa[i][j] == 2) {
                        document.getElementById(`${i}-${j}`).textContent = '#'
                    }
                }
            }
            return mapa
            
    }
    // Colocar um switch nessa função

}

function renderizacao(mapa, personagem)
{
    if (mapa[personagem.x][personagem.y] == 2) {
        morte = true
    }

    if ( portal != null && (personagem.x == portal.primeiro.x) && personagem.y == portal.primeiro.y) {
        return {x: portal.segundo.x, y: portal.segundo.y+1}
    } else if(  portal != null && (personagem.x == portal.segundo.x) && personagem.y == portal.segundo.y) {
        return {x: portal.primeiro.x, y: portal.primeiro.y-1}
    } else if(portal != null) {
        document.getElementById(`${portal.primeiro.x}-${portal.primeiro.y}`).textContent = '>'
        document.getElementById(`${portal.segundo.x}-${portal.segundo.y}`).textContent = '<'
    }
    
    if (contador == 0 && armadilhaChao[0] != null) {
        const intervalIdArmadilhas = setInterval(function() {
            for (let i = 0; i < armadilhaChao.length; i++) {
                if (armadilhaChao[i].estaAtivada) {
                    armadilhaChao[i].estaAtivada = false
                    document.getElementById(`${armadilhaChao[i].coordenada.x}-${armadilhaChao[i].coordenada.y}`).textContent = ''
                    mapa[armadilhaChao[i].coordenada.x][armadilhaChao[i].coordenada.y] = 0
                } else {
                    armadilhaChao[i].estaAtivada = true
                    document.getElementById(`${armadilhaChao[i].coordenada.x}-${armadilhaChao[i].coordenada.y}`).textContent = 'H'
                    console.log(mapa[armadilhaChao[i].coordenada.x][armadilhaChao[i].coordenada.y])
                    mapa[armadilhaChao[i].coordenada.x][armadilhaChao[i].coordenada.y] = 2
                    
                }
                    
            }
        }, 1000)
        contador++
    }

    for (let i = 0; i < chave.length; i++) {
        if (acao && (personagem.x == chave[i].coordenada.x && personagem.y == chave[i].coordenada.y)) {
            chave[i].playerComAChave = true
            chave[i]._porta.textContent = '='
            mapa[chave[i].porta.x][chave[i].porta.y] = 0
        } 
        if (!chave[i].playerComAChave){
            document.getElementById(`${chave[i].coordenada.x}-${chave[i].coordenada.y}`).textContent = '@'
        } else {
            chave[i]._porta.textContent = '='
        }
        
    }

    if (botao != null && acao && ((botao.coordenada.x == personagem.x) && (botao.coordenada.y == personagem.y))) {
        if (mapa[botao.porta.x][botao.porta.y] == 1) {
            mapa[botao.porta.x][botao.porta.y] = 0
            botao._porta.textContent = ''
        } else {
            mapa[botao.porta.x][botao.porta.y] = 1
            botao._porta.textContent = '*'
        }
        
    } else if(botao != null) {
        document.getElementById(`${botao.coordenada.x}-${botao.coordenada.y}`).textContent = 'O'
    }

    acao = false

    // Movimentação do boneco
    var boneco = document.getElementById(`${personagem.x}-${personagem.y}`)
    boneco.textContent = '&'
    if (movendo) {
        movendo = false
        switch (controle) {
            case 'frente':
                if (mapa[personagem.x-1][personagem.y] != 1) {
                    boneco.textContent = ''
                    boneco = document.getElementById(`${personagem.x-1}-${personagem.y}`)
                    boneco.textContent = '&'
                    return {x: personagem.x-1, y: personagem.y}
                }
                break;

            case 'tras':
                if (mapa[personagem.x+1][personagem.y] != 1  ) { //&& mapa[personagem.x+1][personagem.y]
                    boneco.textContent = ''
                    boneco = document.getElementById(`${personagem.x+1}-${personagem.y}`)
                    boneco.textContent = '&'
                    return {x: personagem.x+1, y: personagem.y}
                }
                break;

            case 'esquerda':
                if (mapa[personagem.x][personagem.y-1] != 1) { //&& mapa[personagem.x][personagem.y-1]
                    boneco.textContent = ''
                    boneco = document.getElementById(`${personagem.x}-${personagem.y-1}`)
                    boneco.textContent = '&'
                    return {x: personagem.x, y: personagem.y-1}
                }
                break;
            
            case 'direita':
                if (mapa[personagem.x][personagem.y+1] != 1) { //&& mapa[personagem.x][personagem.y+1]
                    boneco.textContent = ''
                    boneco = document.getElementById(`${personagem.x}-${personagem.y+1}`)
                    boneco.textContent = '&'
                    return {x: personagem.x, y: personagem.y+1}
                }
                break;
        }
    } 
    return {x: personagem.x, y: personagem.y}
}

// Inicializa as principais config do jogo
function iniciarJogo()
{
    var fase = 1
    var coordenadaInicial = {x: 0, y: 0}

    //Começa o jogo
    start(fase, coordenadaInicial)
}

// Starta o jogo
function start(fase, coordenadaInicial)
{
    var player = new Personagem(coordenadaInicial)
    
    switch (fase) {
        case 1:
            player.coordenada = {x:5, y:5}
            mapa = construirMapa1(fase)
            chave[0] = new Chave({x: 12, y:8}, false, {x:14 , y: 7})

            const intervalId = setInterval(function() {
                player.coordenada = renderizacao(mapa, player.coordenada)
                if (morte == true) {
                    contadorMorte++
                    morte = false
                    start(fase, coordenadaInicial)
                } else if(contadorMorte == 3){
                    clearInterval(intervalId)
                    window.location.replace("../templated/home.html") // Pagina do game over de derrota colocar depois
                } else if ( (player.coordenada.x == chave[0].porta.x) && (player.coordenada.y == chave[0].porta.y) ) {
                    clearInterval(intervalId)
                    fase++
                    start(fase, coordenadaInicial)
                }
            }, 1);
            break;
    
        case 2:
            player.coordenada = {x:22, y:28}
            
            mapa = construirMapa1(fase)
            chave[0] = new Chave({x: 6, y:5}, false, {x: 29, y: 14})
            chave[1] = new Chave({x: 3, y:27}, false, {x: 2, y: 8})
            botao = new Botao({x: 12, y: 5}, {x: 8, y: 28})

            const intervalId2 = setInterval(function() {
                player.coordenada = renderizacao(mapa, player.coordenada)
                if (morte == true) {
                    contadorMorte++
                    morte = false
                    clearInterval(intervalId2)
                    start(fase, coordenadaInicial)
                } else if(contadorMorte == 3){
                    clearInterval(intervalId2)
                    window.location.replace("../templated/derrota.html") // Pagina do game over de derrota colocar depois
                } else if ( (player.coordenada.x == chave[0].porta.x) && (player.coordenada.y == chave[0].porta.y) ) {
                    clearInterval(intervalId2)
                    fase++
                    start(fase, coordenadaInicial)
                }
            }, 1);
            break;

        case 3:
            player.coordenada = {x:41, y:43}
            contador = 0
            mapa = construirMapa1(fase)
            chave[0] = new Chave({x:13, y:23}, false, {x:44, y:26})
            botao = new Botao({x:29, y:16},{x: 17, y: 23})
            portal = new Portal({x: 1, y:3}, {x:3, y: 11})
            armadilhaChao[0] = new ArmadilhaChao({x: 39, y: 29}, false)
            armadilhaChao[1] = new ArmadilhaChao({x: 15, y: 33}, true)
            armadilhaChao[2] = new ArmadilhaChao({x: 14, y: 34}, false)
            armadilhaChao[3] = new ArmadilhaChao({x: 15, y: 35}, true)
            armadilhaChao[4] = new ArmadilhaChao({x: 14, y: 36}, false)
            armadilhaChao[5] = new ArmadilhaChao({x: 15, y: 37}, true)
            armadilhaChao[6] = new ArmadilhaChao({x: 40, y: 2}, false)
            armadilhaChao[7] = new ArmadilhaChao({x: 32, y: 41}, false)
            armadilhaChao[8] = new ArmadilhaChao({x: 13, y: 24}, false)
            armadilhaChao[9] = new ArmadilhaChao({x: 13, y: 22}, false)
            armadilhaChao[10] = new ArmadilhaChao({x: 14, y: 22}, false)
            armadilhaChao[11] = new ArmadilhaChao({x: 14, y: 23}, false)
            armadilhaChao[12] = new ArmadilhaChao({x: 14, y: 24}, false)

            const intervalId3 = setInterval(function() {
                player.coordenada = renderizacao(mapa, player.coordenada)
                if (morte == true) {
                    contadorMorte++
                    morte = false
                    clearInterval(intervalId3)
                    start(fase, coordenadaInicial)
                } else if(contadorMorte == 3){
                    clearInterval(intervalId3)
                    window.location.replace("../templated/derrota.html") // Pagina do game over de derrota colocar depois
                } else if ( (player.coordenada.x == chave[0].porta.x) && (player.coordenada.y == chave[0].porta.y) ) {
                    clearInterval(intervalId3)
                    window.location.replace("../templated/telaZerar.html") // Quando o cara zera o jogo
                }
            }, 1);
            break;


    }
}


//Eventos de Usuário
document.addEventListener("keydown", function(event) 
{
    switch (event.key && event.code) {
        case "KeyW":
            controle = 'frente'
            movendo = true
        break;
    
        case "KeyA":
            controle = 'esquerda'
            movendo = true
        break;

        case "KeyS":
            controle = 'tras'
            movendo = true
        break;

        case "KeyD":
            controle = 'direita'
            movendo = true
        break;

        case "KeyE":
            acao = true
        break;
    }
    event.preventDefault();
});


// Objetos
function Personagem(coordenadaInicial)
{
    this.coordenada = coordenadaInicial
}

function Chave(coordenada, playerComAChave, porta)
{
    this.coordenada = coordenada
    this.playerComAChave = playerComAChave
    this.porta = porta
    this._porta = document.getElementById(`${porta.x}-${porta.y}`)
    this._porta.textContent = 'D'
}

function Botao(coordenada, porta)
{
    this.coordenada = coordenada
    this.porta = porta
    this._porta = document.getElementById(`${porta.x}-${porta.y}`)
}

function ArmadilhaChao(coordenada, estaAtivada)
{
    this.coordenada = coordenada
    this.estaAtivada = estaAtivada
}

function Portal(primeiro, segundo)
{
    this.primeiro = primeiro
    this.segundo = segundo
    document.getElementById(`${primeiro.x}-${primeiro.y}`).textContent = '>'
    document.getElementById(`${segundo.x}-${segundo.y}`).textContent = '<'
}


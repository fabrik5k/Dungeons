// 0 = Livre | 1 = Parede


// Constante da tabela no html do jogo
const elementos = document.getElementById("Dungeons")

// Dimensões do mapa
var coluna = 68 
var linha = 135

// Estado do jogo
var GameOver = false
var morte = false
var contadorMorte = 0
var faseOver = false

// Controladores
var controle = "frente"
var movendo = false
var acao = false


// Array das chaves do jogo
var chave = [10]
var botao


function iniciarMapa()
{
    var mapa = []

    for (let i = 0; i < coluna; i++) 
    {
        elementos.appendChild(document.createElement("tr")).setAttribute("id", i)
        mapa[i] = []
        for (let j = 0; j < linha; j++) 
        {
            mapa[i].push(0)
            var points = document.getElementById(i)
            points.appendChild(document.createElement("td")).setAttribute("id", `${i}-${j}`)
            document.getElementById(`${i}-${j}`).setAttribute("class", "pixelMapa")
            document.getElementById(`${i}-${j}`)//.setAttribute("height", "10px")
            document.getElementById(`${i}-${j}`)//.setAttribute("width", "10px")
            //document.getElementById(`${i}-${j}`).textContent = `${i} ${j}`
            //document.getElementById(`${i}-${j}`).addEventListener() // Adicionar evento futuramente
        }
    }

    return mapa
}
iniciarJogo()


function construirMapa1(mapa, fase)
{
    for (let i = 0; i < 68; i++) {
        for (let j = 0; j < 135; j++) {
            mapa[i][j] = 0
            document.getElementById(`${i}-${j}`).textContent = ''
        }
        
    }

    switch (fase) {
        case 1:
            for (let i = 0; i < 135; i++) {
                // Paredes
                if (i >= 15 && i <= 30) {
                    //if (i > 90) {
                        //mapa[41][i] = 1
                        //document.getElementById(`41-${i}`).textContent = '*'
                   // }
                    mapa[i][40] = 1
                    document.getElementById(`${i}-40`).textContent = '*'
                    mapa[i][55] = 1
                    document.getElementById(`${i}-55`).textContent = '*'
                }
                if (i >= 40 && i <= 55) {
                    mapa[30][i] = 1
                    document.getElementById(`30-${i}`).textContent = '*'
                    mapa[15][i] = 1
                    document.getElementById(`15-${i}`).textContent = '*'
                    //if (i > 40) {
                        //mapa[i][90] = 1
                        //document.getElementById(`${i}-90`).textContent = '*'
                    //}
                }        
                
            }
            return mapa
            
    
        case 2:
            mapa[23][61] = 2
            mapa[29][57] = 2
            mapa[29][71] = 2
            mapa[21][76] = 2
            mapa[21][78] = 2
            mapa[18][56] = 2
            mapa[21][54] = 2
            mapa[43][65] = 2
            mapa[39][59] = 2
            mapa[45][67] = 2
            for (let i = 0; i < 68; i++) {
                for (let j = 0; j < 135; j++) {
                    if (mapa[i][j] == 2) {
                        document.getElementById(`${i}-${j}`).textContent = '#'
                    }
                }
                
            }

            for (let i = 0; i < 135; i++) {
                if (i >= 15 && i <= 45) {
                    if(i < 24){
                        mapa[i][72] = 1
                        document.getElementById(`${i}-${72}`).textContent = '*'
                        mapa[i][57] = 1
                        document.getElementById(`${i}-${57}`).textContent = '*'
                    }
                    mapa[i][50] = 1
                    document.getElementById(`${i}-${50}`).textContent = '*'
                    mapa[i][80] = 1
                    document.getElementById(`${i}-${80}`).textContent = '*'
                }
                if (i >= 50 && i<= 80){
                    if (i <= 57) {
                        mapa[23][i] = 1
                        document.getElementById(`${23}-${i}`).textContent = '*' 
                    }
                    if (i>=73) {
                        mapa[23][i] = 1
                        document.getElementById(`${23}-${i}`).textContent = '*'
                    }
                    mapa[45][i] = 1
                    document.getElementById(`${45}-${i}`).textContent = '*'
                    mapa[15][i] = 1
                    document.getElementById(`${15}-${i}`).textContent = '*'
                }
                
            }
            return mapa
            
    }
    // Colocar um switch nessa função

}

function renderizacao(mapa, personagem)
{
    // Mudar pra um switch case usando a soma das coordenadas do personagem como caso

    //if (acao && ()) {

    //    acao = false
    //}

    // Condições e posicionamento da chave
    // Ajeitar futuramente
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
                if (mapa[personagem.x-1][personagem.y] == 2) {
                    morte = true
                } else if (mapa[personagem.x-1][personagem.y] == 0) {
                    boneco.textContent = ''
                    boneco = document.getElementById(`${personagem.x-1}-${personagem.y}`)
                    boneco.textContent = '&'
                    return {x: personagem.x-1, y: personagem.y}
                }
                break;

            case 'tras':
                if (mapa[personagem.x+1][personagem.y] == 2) {
                    morte = true
                } else if (mapa[personagem.x+1][personagem.y] == 0  ) { //&& mapa[personagem.x+1][personagem.y]
                    boneco.textContent = ''
                    boneco = document.getElementById(`${personagem.x+1}-${personagem.y}`)
                    boneco.textContent = '&'
                    return {x: personagem.x+1, y: personagem.y}
                }
                break;

            case 'esquerda':
                if (mapa[personagem.x][personagem.y-1] == 2) {
                    morte = true
                } else if (mapa[personagem.x][personagem.y-1] == 0) { //&& mapa[personagem.x][personagem.y-1]
                    boneco.textContent = ''
                    boneco = document.getElementById(`${personagem.x}-${personagem.y-1}`)
                    boneco.textContent = '&'
                    return {x: personagem.x, y: personagem.y-1}
                }
                break;
            
            case 'direita':
                if (mapa[personagem.x][personagem.y+1] == 2) {
                    morte = true
                } else if (mapa[personagem.x][personagem.y+1] == 0) { //&& mapa[personagem.x][personagem.y+1]
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
    var mapa = iniciarMapa()
    var coordenadaInicial = {x: 50, y:50} // consertar depois
    var fase = 1

    //Começa o jogo
    start(mapa, fase, coordenadaInicial)
    
}

// Starta o jogo
function start(mapa, fase, coordenadaInicial)
{
    var player = new Personagem(coordenadaInicial)
    
    switch (fase) {
        case 1:
            player.coordenada = {x:27, y:48}
            mapa = construirMapa1(mapa, fase)
            chave[0] = new Chave({x: 17, y:52}, false, {x: 30, y: 48})

            const intervalId = setInterval(function() {
                player.coordenada = renderizacao(mapa, player.coordenada)
                if (morte == true) {
                    contadorMorte++
                    morte = false
                    start(mapa, fase, coordenadaInicial)
                } else if(contadorMorte == 3){
                    clearInterval(intervalId)
                    window.location.replace("../templated/home.html") // Pagina do game over de derrota colocar depois
                } else if ( (player.coordenada.x == chave[0].porta.x) && (player.coordenada.y == chave[0].porta.y) ) {
                    clearInterval(intervalId)
                    fase++
                    start(mapa, fase, coordenadaInicial)
                }
            }, 1);
            break;
    
        case 2:
            player.coordenada = {x:37, y:75}
            
            mapa = construirMapa1(mapa, fase)
            chave[0] = new Chave({x: 21, y:55}, false, {x: 45, y: 66})
            chave[1] = new Chave({x: 17, y:76}, false, {x: 16, y: 57})
            botao = new Botao({x: 29, y: 55}, {x: 23, y: 76})

            console.log("sasdas")
            const intervalId2 = setInterval(function() {
                player.coordenada = renderizacao(mapa, player.coordenada)
                if (morte == true) {
                    contadorMorte++
                    morte = false
                    clearInterval(intervalId2)
                    start(mapa, fase, coordenadaInicial)
                } else if(contadorMorte == 3){
                    clearInterval(intervalId2)
                    window.location.replace("../templated/home.html") // Pagina do game over de derrota colocar depois
                    alert("Voce perdeu KKKKKKKKKKKKKKKKKKKKKKKKKK")
                } else if ( (player.coordenada.x == chave[0].porta.x) && (player.coordenada.y == chave[0].porta.y) ) {
                    clearInterval(intervalId2)
                    alert("Fase 2 Concluida")
                }
            }, 1);
            break;

        case 3:
            
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


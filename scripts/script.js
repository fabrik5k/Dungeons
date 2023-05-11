// 0 = Livre | 1 = Parede


// Constante da tabela no html do jogo
const elementos = document.getElementById("Dungeons")

// Dimensões do mapa
var coluna = 68 
var linha = 135

// Estado do jogo
var GameOver = false

// Controladores
var controle = "frente"
var movendo = false
var acao = false


// Array das chaves do jogo
var chave = []


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


function construirMapa1(mapa)
{
    // Colocar um switch nessa função
    for (let i = 0; i < 135; i++) {
        // Paredes
        if (i < 109 && i > 42) {
            if (i > 90) {
                mapa[41][i] = 1
                document.getElementById(`41-${i}`).textContent = '*'
            }
            mapa[27][i] = 1
            document.getElementById(`27-${i}`).textContent = '*'
            mapa[53][i] = 1
            document.getElementById(`53-${i}`).textContent = '*'
        }
        if (i > 27 && i < 54) {
            mapa[i][109] = 1
            document.getElementById(`${i}-109`).textContent = '*'
            mapa[i][42] = 1
            document.getElementById(`${i}-42`).textContent = '*'
            if (i > 40) {
                mapa[i][90] = 1
                document.getElementById(`${i}-90`).textContent = '*'
            }
        }        
        
    }
    return mapa
}

function renderizacao(mapa, personagem)
{
    // Mudar pra um switch case usando a soma das coordenadas do personagem como caso

    //if (acao && ()) {

    //    acao = false
    //}

    // Condições e posicionamento da chave
    if (acao && (personagem.x + personagem.y == chave[0].coordenada.x + chave[0].coordenada.y)) {
        chave[0].playerComAChave = true
        chave[0]._porta.textContent = '='
        mapa[chave[0].porta.x][chave[0].porta.y] = 0
        acao = false
    } 
    if (!chave[0].playerComAChave){
        document.getElementById(`${chave[0].coordenada.x}-${chave[0].coordenada.y}`).textContent = '@'
    } else {
        chave[0]._porta.textContent = '='
    }


    // Movimentação do boneco
    var boneco = document.getElementById(`${personagem.x}-${personagem.y}`)
    boneco.textContent = '&'
    if (movendo) {
        movendo = false
        switch (controle) {
            case 'frente':
                if (mapa[personagem.x-1][personagem.y] == 0) {
                    boneco.textContent = ''
                    boneco = document.getElementById(`${personagem.x-1}-${personagem.y}`)
                    boneco.textContent = '&'
                    return {x: personagem.x-1, y: personagem.y}
                }
                break;

            case 'tras':
                if (mapa[personagem.x+1][personagem.y] == 0  ) { //&& mapa[personagem.x+1][personagem.y]
                    boneco.textContent = ''
                    boneco = document.getElementById(`${personagem.x+1}-${personagem.y}`)
                    boneco.textContent = '&'
                    return {x: personagem.x+1, y: personagem.y}
                }
                break;

            case 'esquerda':
                if (mapa[personagem.x][personagem.y-1] == 0) { //&& mapa[personagem.x][personagem.y-1]
                    boneco.textContent = ''
                    boneco = document.getElementById(`${personagem.x}-${personagem.y-1}`)
                    boneco.textContent = '&'
                    return {x: personagem.x, y: personagem.y-1}
                }
                break;
            
            case 'direita':
                if (mapa[personagem.x][personagem.y+1] == 0) { //&& mapa[personagem.x][personagem.y+1]
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
            mapa = construirMapa1(mapa)
            chave[0] = new Chave({x: 30, y:90}, false, {x: 47, y: 90})

            const intervalId = setInterval(function() {
                player.coordenada = renderizacao(mapa, player.coordenada)
                if (GameOver) {
                    clearInterval(intervalId)
                }
            }, 1);

            fase++
            start(mapa, fase, coordenadaInicial)
            break;
    
        case 2:
           
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


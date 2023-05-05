// 0 = Livre | 1 = Parede


// Constante da tabela no html do jogo
const elementos = document.getElementById("Dungeons")

// Dimensões do mapa
var coluna = 68 
var linha = 135

// Estado do jogo
var GameOver = false

// Controladores
var controle = 'frente'
var movendo = false
var pegar = false

// Jogador
var player


function criarMapa()
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
            document.getElementById(`${i}-${j}`).setAttribute("height", "10px")
            document.getElementById(`${i}-${j}`).setAttribute("width", "10px")
            // document.getElementById(`${i}-${j}`).setAttribute();
            //document.getElementById(`${i}-${j}`).addEventListener() // Adicionar evento futuramente
        }
    }

    return mapa
}
iniciarJogo()

function renderizacao(mapa, personagem)
{

    var boneco = document.querySelector(`#${personagem.x}-${personagem.y}`)
    boneco.textContent = '&'
    if (movendo) {
        movendo = false
        switch (controle) {
            case 'frente':
                if (mapa[personagem.x-1][personagem.y] == 0 && mapa[personagem.x-1][personagem.y]) {
                    boneco.textContent = ''
                    boneco = document.querySelector(`#${personagem.x-1}-${personagem.y}`)
                    console.log("asd")
                    return {x: personagem.x-1, y: personagem.y}
                }
                break;

            case 'tras':
                if (mapa[personagem.x+1][personagem.y] == 0 && mapa[personagem.x+1][personagem.y]) {
                    boneco.textContent = ''
                    boneco = document.querySelector(`#${personagem.x+1}-${personagem.y}`)
                    return {x: personagem.x+1, y: personagem.y}
                }
                break;

            case 'esquerda':
                if (mapa[personagem.x][personagem.y-1] == 0 && mapa[personagem.x][personagem.y-1]) {
                    boneco.textContent = ''
                    boneco = document.querySelector(`#${personagem.x}-${personagem.y-1}`)
                    return {x: personagem.x, y: personagem.y-1}
                }
                break;
            
            case 'direita':
                if (mapa[personagem.x][personagem.y+1] == 0 && mapa[personagem.x][personagem.y+1]) {
                    boneco.textContent = ''
                    boneco = document.querySelector(`#${personagem.x}-${personagem.y+1}`)
                    return {x: personagem.x, y: personagem.y+1}
                }
                break;
        }
    } 
    return {x: personagem.x, y: personagem.y}
}


function iniciarJogo()
{
    var mapa = criarMapa()
    var coordenadaInicial = {x: 50, y:50} // consertar depois
    var fase = 1

    //Começa o jogo
    start(mapa, fase, coordenadaInicial)
    
}


function start(mapa, fase, coordenadaInicial)
{
    switch (fase) {
        case 1:
            player = new Personagem(coordenadaInicial)

            while (!GameOver) {
                player.coordenada = renderizacao(mapa, player.coordenada)
            }
            fase++
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
            
        break;
    }
    event.preventDefault();
});


// Objetos
function Personagem(coordenadaInicial)
{
    this.coordenada = coordenadaInicial
}

function Chave(coordenada, player)
{
    this.coordenada = coordenada
}


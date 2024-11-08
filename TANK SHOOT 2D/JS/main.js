// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
var utilsObj = new Utils();

// Función para ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
    canvas.width = window.innerHeight * 0.9;
    canvas.height = window.innerHeight * 0.9;

    canvas.width = utilsObj.RoundTablero(canvas.width);
    canvas.height = utilsObj.RoundTablero(canvas.height);

    console.log('width', canvas.width)
    console.log('height', canvas.height)
}

// Llamamos a la función al cargar la página
resizeCanvas();

// Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

// Creamos un objeto de juego
const game = new Game(canvas.width, canvas.height, "start");

// Creamos un tanque de jugador y un tanque enemigo
const playerTank = new Tank(600, 300, 'up', 3, game.ancho, game.alto);

const enemyTank1 = new EnemyTank(100, 100, 'down', 3, game.ancho, game.alto);
const enemyTank2 = new EnemyTank(700, 200, 'down', 3, game.ancho, game.alto);
const enemyTank3 = new EnemyTank(500, 400, 'down', 3, game.ancho, game.alto);
const enemyTank4 = new EnemyTank(600, 100, 'down', 3, game.ancho, game.alto);


// Controles básicos para mover el tanque del jugador
window.addEventListener('keydown', function (e) {
    switch (e.key) {
        // Las teclas de las Flechas del teclado
        case 'ArrowLeft':
            playerTank.moveLeft();
            break;
        case 'ArrowRight':
            playerTank.moveRight();
            break;
        case 'ArrowUp':
            playerTank.moveUp();
            break;
        case 'ArrowDown':
            playerTank.moveDown();
            break;
    }
});

// Añadir movimiento aleatorio al enemigo
function moveEnemyTankRandomly(enemyTank) {
    const randomDirection = utilsObj.GetRandomDirection();

    // Movemos el tanque enemigo en la dirección elegida
    switch (randomDirection) {
        case 'left':
            enemyTank.moveLeft();
            break;
        case 'right':
            enemyTank.moveRight();
            break;
        case 'up':
            enemyTank.moveUp();
            break;
        case 'down':
            enemyTank.moveDown();
            break;
    }
}

// Hacemos que el tanque enemigo se mueva aleatoriamente cada 300ms
setInterval(() => {
    moveEnemyTankRandomly(enemyTank1);
    moveEnemyTankRandomly(enemyTank2);
}, 300);

// Hacemos que el tanque enemigo se mueva aleatoriamente cada 200ms
setInterval(() => {
    moveEnemyTankRandomly(enemyTank3);
    moveEnemyTankRandomly(enemyTank4);
}, 200);


function DibujarUno(ctx, x, y, ancho, alto) {
    var pared = new Wall(x, y, ancho, alto);
    ctx.drawImage(pared.imagen, x, y, ancho, alto);
}

function DibujarCero(ctx, x, y, ancho, alto) {
    ctx.fillStyle = "#2c3e50"; // Color para espacio vacío
    ctx.fillRect(x, y, ancho, alto);
}

function DibujarUno2(ctx, x, y, ancho, alto) {
    ctx.fillStyle = "#808080"; // Color para paredes
    ctx.fillRect(x, y, ancho, alto);
}

function DibujarDos(ctx, x, y, ancho, alto) {
    ctx.fillStyle = "#8B4513"; // Color para obstáculos
    ctx.fillRect(x, y, ancho, alto);
}

function DibujarTres(ctx, x, y, ancho, alto) {
    ctx.fillStyle = "#00FF00"; // Color para tanque del jugador
    ctx.fillRect(x, y, ancho, alto);
}

function DibujarCuatro(ctx, x, y, ancho, alto) {
    ctx.fillStyle = "#FF0000"; // Color para tanque enemigo
    ctx.fillRect(x, y, ancho, alto);
}

function DibujarCinco(ctx, x, y, ancho, alto) {
    ctx.fillStyle = "#0000FF"; // Color para base del jugador
    ctx.fillRect(x, y, ancho, alto);
}

function DibujarSeis(ctx, x, y, ancho, alto) {
    ctx.fillStyle = "#FFFF00"; // Color para base enemiga
    ctx.fillRect(x, y, ancho, alto);
}


function DibujarMapa(ctx, mapa) {
    for (let row = 0; row < mapa.length; row++) {
        for (let col = 0; col < mapa[row].length; col++) {
            const cell = mapa[row][col];
            const x = col * game.anchoCelda;
            const y = row * game.altoCelda;
            drawCell(ctx, cell, x, y);
        }
    }
}

// Dibujar la celda en función de su tipo
function drawCell(ctx, cell, x, y) {
    switch (cell) {
        case 0: // Espacio vacío
            DibujarCero(ctx, x, y, game.anchoCelda, game.altoCelda);
            break;
        case 1: // Pared
            DibujarUno(ctx, x, y, game.anchoCelda, game.altoCelda);
            break;
        case 2: // Obstáculo
            DibujarDos(ctx, x, y, game.anchoCelda, game.altoCelda);
            break;
        case 3: // Tanque del jugador
            DibujarTres(ctx, x, y, game.anchoCelda, game.altoCelda);
            break;
        case 4: // Tanque enemigo
            DibujarCuatro(ctx, x, y, game.anchoCelda, game.altoCelda);
            break;
        case 5: // Base del jugador
            DibujarCinco(ctx, x, y, game.anchoCelda, game.altoCelda);
            break;
        case 6: // Base enemiga
            DibujarSeis(ctx, x, y, game.anchoCelda, game.altoCelda);
            break;
        default:
            console.warn('Elemento desconocido en el mapa: ' + cell);
            break;
    }
}

// Lógica del juego (actualización de la pantalla)
function updateGame() {
    // Limpiamos el canvas en cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //drawEscenario(ctx, escenario); // Dibujamos el escenario en el canvas
    DibujarMapa(ctx, MAPA);

    //playerTank.drawTank(ctx);
    //enemyTank1.drawEnemyTank(ctx); // Dibujamos el tanque enemigo 1
    //enemyTank2.drawEnemyTank(ctx); // Dibujamos el tanque enemigo 2
    //enemyTank3.drawEnemyTank(ctx); // Dibujamos el tanque enemigo 3
    //enemyTank4.drawEnemyTank(ctx); // Dibujamos el tanque enemigo 4


    // Refrescar los graficos
    requestAnimationFrame(updateGame);
}

// Iniciar el juego
updateGame();


/*






                case 2: // Obstáculo
                    ctx.fillStyle = "brown";
                    ctx.fillRect(x, y, cellSize, cellSize);
                    break;
                case 3: // Tanque del jugador
                    playerTank.posX = x;
                    playerTank.posY = y;
                    drawTank(playerTank);
                    break;
                case 4: // Tanque enemigo 1
                    enemyTank1.posX = x;
                    enemyTank1.posY = y;
                    enemyTank1.drawEnemyTank(ctx); // Dibujamos el tanque enemigo 1
                    break;



function drawObstacle(obstacle) {
    let img = new Image();
    img.src = obstacle.src;
    img.onload = () => {
        ctx.drawImage(img, obstacle.posX, obstacle.posY, 50, 50);
    };
}



*/
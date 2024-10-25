// Seleccionamos el canvas y el contexto
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Función para ajustar el tamaño del canvas a la ventana
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;

    canvas.width = Math.round(canvas.width/50) * 50;
    canvas.height = Math.round(canvas.height/50) * 50;

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

// Dibujamos los elementos en el canvas
function drawTank(tank) {
    ctx.fillStyle = 'green';
    // Representamos el tanque como un cuadrado
    ctx.fillRect(tank.posX, tank.posY, 50, 50); 
}

function drawEnemyTank(enemyTank) {
    ctx.fillStyle = 'red';
    // Representamos el tanque enemigo como un cuadrado
    ctx.fillRect(enemyTank.posX, enemyTank.posY, 50, 50); 
}

// Controles básicos para mover el tanque del jugador
window.addEventListener('keydown', function (e) {
    switch(e.key) {
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
    const directions = ['left', 'right', 'up', 'down']; // Posibles direcciones
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    
    // Movemos el tanque enemigo en la dirección elegida
    switch(randomDirection) {
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


// Lógica del juego (actualización de la pantalla)
function updateGame() {
    // Limpiamos el canvas en cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    drawTank(playerTank); // Dibujamos el tanque del jugador
    drawEnemyTank(enemyTank1); // Dibujamos el tanque enemigo 1
    drawEnemyTank(enemyTank2); // Dibujamos el tanque enemigo 2
    drawEnemyTank(enemyTank3); // Dibujamos el tanque enemigo 3
    drawEnemyTank(enemyTank4); // Dibujamos el tanque enemigo 4

    // Refrescar los graficos
    requestAnimationFrame(updateGame); 
}

// Iniciar el juego
updateGame();


/*








function drawObstacle(obstacle) {
    let img = new Image();
    img.src = obstacle.src;
    img.onload = () => {
        ctx.drawImage(img, obstacle.posX, obstacle.posY, 50, 50);
    };
}



*/
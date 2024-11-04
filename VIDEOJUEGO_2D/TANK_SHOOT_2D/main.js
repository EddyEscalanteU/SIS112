const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };
  
  const game = new Phaser.Game(config);
  let player;
  let enemies;
  let cursors;
  let bullets;
  let enemyBullets;
  let lastFired = 0;
  let score = 0;
  let scoreText;
  
  function preload() {
    // Cargar las imágenes para el tanque, las balas y los enemigos
    this.load.image('tank', 'https://i.imgur.com/GwyLeWr.png'); // Tanque del jugador
    this.load.image('bullet', 'https://i.imgur.com/3FYmRIE.png'); // Imagen de la bala
    this.load.image('enemyTank', 'https://i.imgur.com/FrdUtBv.png'); // Tanque enemigo
  }
  
  function create() {
    // Crear el tanque del jugador
    player = this.physics.add.sprite(400, 500, 'tank');
    player.setCollideWorldBounds(true); // Evitar que salga de los límites
  
    // Crear un grupo para las balas del jugador
    bullets = this.physics.add.group({
      classType: Bullet,
      maxSize: 10,
      runChildUpdate: true
    });
  
    // Crear enemigos
    enemies = this.physics.add.group({
      classType: EnemyTank,
      runChildUpdate: true
    });
  
    // Añadir 5 enemigos al campo
    for (let i = 0; i < 5; i++) {
      let enemy = enemies.get();
      if (enemy) {
        enemy.spawn(100 + i * 150, 100);
      }
    }
  
    // Capturar las teclas de flecha y espacio
    cursors = this.input.keyboard.createCursorKeys();
    this.input.keyboard.on('keydown-SPACE', shoot, this);
  
    // Puntuación
    scoreText = this.add.text(16, 16, 'Puntuación: 0', { fontSize: '32px', fill: '#fff' });
  
    // Colisiones
    this.physics.add.overlap(bullets, enemies, destroyEnemy, null, this);
  }
  
  function update(time) {
    // Movimiento del tanque
    if (cursors.left.isDown) {
      player.setVelocityX(-200);
    } else if (cursors.right.isDown) {
      player.setVelocityX(200);
    } else {
      player.setVelocityX(0);
    }
  
    if (cursors.up.isDown) {
      player.setVelocityY(-200);
    } else if (cursors.down.isDown) {
      player.setVelocityY(200);
    } else {
      player.setVelocityY(0);
    }
  }
  
  // Clase para las balas
  class Bullet extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, 'bullet');
    }
  
    fire(x, y) {
      this.body.reset(x, y);
      this.setActive(true);
      this.setVisible(true);
      this.setVelocityY(-300); // Dirección de la bala hacia arriba
    }
  
    update() {
      // Eliminar la bala si sale de la pantalla
      if (this.y < 0) {
        this.setActive(false);
        this.setVisible(false);
      }
    }
  }
  
  // Clase para los tanques enemigos
  class EnemyTank extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, 'enemyTank');
    }
  
    spawn(x, y) {
      this.body.reset(x, y);
      this.setActive(true);
      this.setVisible(true);
      this.health = 3; // Puntos de salud del enemigo
      this.setVelocityY(50); // Movimiento hacia abajo
    }
  
    update() {
      // Si el enemigo sale de la pantalla, lo desactiva
      if (this.y > 600) {
        this.setActive(false);
        this.setVisible(false);
      }
    }
  }
  
  // Función para disparar balas
  function shoot() {
    const bullet = bullets.get();
    if (bullet) {
      bullet.fire(player.x, player.y);
    }
  }
  
  // Función para destruir enemigos
  function destroyEnemy(bullet, enemy) {
    bullet.setActive(false);
    bullet.setVisible(false);
  
    enemy.health -= 1;
    if (enemy.health <= 0) {
      enemy.setActive(false);
      enemy.setVisible(false);
  
      // Incrementar puntuación
      score += 10;
      scoreText.setText('Puntuación: ' + score);
    }
  }
  
const window_height = window.innerHeight;
const window_width = window.innerWidth;

const config = {
    type: Phaser.AUTO,
    with: window_width,
    height: window_height,
    backgroundColor: '#000000',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0,
            },
            fps: 60
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

// holds a game instance
const game = new Phaser.game(config);

function preload() {

};

function create() {

};

function update() {

};






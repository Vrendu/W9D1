import Asteroid from "./asteroid";

class Game {
    static DIM_X = 600;
    static DIM_Y = 600;
    static NUM_ASTEROIDS = 50;
    constructor() {
        this.asteroids = [];
        this.addAsteroids();
    }

    addAsteroids() {
        for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
            this.asteroids.push(new Asteroid({game: this, pos: this.randomPosition()}));
        }
    }

    randomPosition() {
        return [Math.floor(Math.random() * 500),
         Math.floor(Math.random() * 500)]
    }

    draw(ctx) {
        ctx.clearRect(0, 0, 600, 600);
        this.asteroids.forEach(asteroid => {
            asteroid.draw(ctx);
        });
    }

    moveObjects() {
        this.asteroids.forEach(asteroid => {
            asteroid.move();
        });
    }

    wrap(pos) {
        let x_pos = pos[0];
        let y_pos = pos[1];
        if (x_pos > Game.DIM_X) {
            x_pos = 0;
        } else if (x_pos < 0){
            x_pos = Game.DIM_X;
        }
        if (y_pos > Game.DIM_Y) {
            y_pos = 0;
        } else if (y_pos < 0){
            y_pos = Game.DIM_Y;
        }
        return [x_pos, y_pos];
    }

    checkCollisions(){
        for (let i = 0; i < this.asteroids.length; i++) {
            for (let j = 0; j < this.asteroids.length; j++) {
                if (i !== j){
                    if (this.asteroids[i].isCollided(this.asteroids[j])){
                        alert("COLLISION");
                    }
                }
            }  
        }
    }

    step () {
        this.moveObjects();
        this.checkCollisions();
    }

}

export default Game;
import Game from "./game";

class GameView {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;

    }

    start() {
        setInterval(this.game.moveObjects.bind(this.game), 20);
        setInterval(this.game.draw.bind(this.game, this.ctx), 20);
        // setInterval(() => {
        //     this.game.draw(this.ctx);
        // }, 20)
    }



}

export default GameView;
console.log("Webpack is working")
import MovingObject from "./moving_object";
import Asteroid from "./asteroid";
import Game from "./game";
import GameView from "./game_view";
window.MovingObject = MovingObject;



const canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d");
let game = new Game();
ctx.canvas.height = Game.DIM_Y;
ctx.canvas.width = Game.DIM_X;


let gameView = new GameView(game, ctx);
gameView.start();
        



